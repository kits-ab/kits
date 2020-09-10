---
type: post
title: "AWS Key Management System "
authors:
  - soroushnejad
---

Management of cryptographic keys

In this post we will discuss what Key Management System is and what are the main features of it. Furthermore, we will show how you can integrate KMS with AWS lambda and migrate your signing and verification workload to the KMS service. At last, we will discuss a limitation on creating CSRs in the KMS service and a solution for it using Bouncycastle and Java. :rocket:

<!-- more -->

#### What is KMS service

[The key management service (KMS)](https://aws.amazon.com/kms) is a service for the creation and management of the cryptographic keys. You can create both symmetric keys as well as asymmetric key pairs to perform encryption, decryption, signing, and verification process in your applications. Signing and verify in AWS kms feature is [relatively new](https://aws.amazon.com/blogs/security/digital-signing-asymmetric-keys-aws-kms/) compared to encryption and decryption.

#### Key features

KMS is a [fully managed](https://aws.amazon.com/kms/features/) service and can integrate with plenty of AWS services easily. KMS uses a [hardware security module](https://aws.amazon.com/kms/features/#Secure) to keep the cryptographic keys secure. AWS KMS is designed so that no one, including AWS employees, can retrieve your plaintext keys from the service.

#### Characteristic of the key

For the propose of this post, I am using an EC key pair to sign my content with the private key of that key pair. More specifically, the "key-spec" I am using is an asymmetric [NIST-recommended](https://tools.ietf.org/html/rfc5753) elliptic curve key pairs, EC_NIST_P256 for signing and verification. [On this page](https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-choose.html), you can see which configuration is most suitable for your case.

#### What is CSR and why we need to create one CSR

Certificate Signing Request (CSR) is a message from an applicant to a certificate authority(CA). You normally apply for a digital certificate to a CA by sending them a CSR. The most common format for CSRs is the [PKCS](https://en.wikipedia.org/wiki/PKCS)10 specification, usually represented as a Base64 encoded. A CSR usually consists of three parts:

1. A subject including identity information like country, state, city, organization name, and so on.
2. The public key for which the certificate should be issued
3. A digital signature on point one and two. This integrity protection ensures the CA that nothing has changed in the communication channel.

## Kms signer application

Let's create an application to demonstrate how you can migrate your signing workload on KMS. I am using [Serverless framework](https://www.serverless.com/) for creating my AWS resources. If you are not familar with this framework, take a look on [this page](https://www.serverless.com/framework/docs/getting-started/)

- Create a Aws Lambda
  ​ `sls create -t "aws-java-maven" -n kms-signer`

#### First step: Create lambda and API gateway

- Add post method as a trigger to the lambda function in `serverless.yml`

  ```yml
  events:
    - http:
        path: sign
        method: post
  ```

- Deploy
  Congratulation! You created a lambda function and an API gateway for it. It is time to deploy it on AWS. Don't forget to build your project before deploy!
  ​ `sls deploy`
- If the deploy goes well, you will get a link to your API in the logs. You can test the API using a REST client e.g. curl like following:

```bash
curl --location --request POST 'https://<MYURL>/dev/sign' \
--header 'Content-Type: application/json' \
--data-raw '{
	"message": "sign-this!"
}'
```

Ofcourse you get a default result which has created by Serverless framwork. In the next step we will put the application into context and send back an actual result from the API. You can read the logs on CloadWatch console, or easier using this command:

​ `sls logs -f <FUNCTION-NAME>`

#### BONUS:

Useful log messages that you can put in your lambda to observe system environment variables, context data, and event data are as following.

```java
// log execution details
LOG.debug("ENVIRONMENT VARIABLES: {}", gson.toJson(System.getenv()));
LOG.debug("CONTEXT: {}", gson.toJson(context));
// process event
LOG.debug("EVENT: {}", gson.toJson(event));
LOG.debug("EVENT TYPE: {}", event.getClass().toString());
```

#### Second step: Create a EC key pair

In the time of writing this post, CloudFormation does not currently support creating asymmetric CMKs. So we need to do it in the Console or Aws Command line tool. You can find a comprehensive description on how to create a CMK [here](https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html#create-asymmetric-cmk)

#### Third step: Add IAM Role

The Lambda needs to have correct IAM ROLE to be able to access the CMK you have created in the previous step. To give access, you need something like following the IAM role statement in your serverless.yml.

```yml
iamRoleStatements:
  - Effect: "Allow"
    Action:
      - kms:GetPublicKey
      - kms:ListKeys
      - kms:ListResourceTags
      - kms:Sign
    Resource: "arn:aws:kms:<REGION>:<ACCOUNT>:key/<KEY-ID>"
```

#### Fourth step: Sign a string using kms

First of all you need to include `aws-java-sdk-kms` dependency to your project dependencies. Then, You need to define another function handler and corresponding API gateway for it. Finally, you create a method that gets a serilized object as an argument and send a sign request to the KMS. For example you can look into following example:

```java
public byte[] sign(final byte[] message) {
  final SignResult signResult = AWSKMSClientBuilder
      .standard()
      .build()
      .sign(getSignRequest(message));
  return signResult.getSignature().array();
}

private static SignRequest getSignRequest(final byte[] signingInput) {
  final byte[] hashedInput = DigestUtils.sha256(signingInput);
  final ByteBuffer message = ByteBuffer.wrap(hashedInput);
  return new SignRequest()
      .withMessage(message)
      .withMessageType("DIGEST")
      .withKeyId("<KEY-ID>")
      .withSigningAlgorithm(SigningAlgorithmSpec.ECDSA_SHA_256);
}
```

#### Fifth step: Create a CSR programmatically

So far, so good! You have an application that can sign content for you. You can send your signature and your public key to a third party entity, and that entity is able to verify your signature. One problem is remaining, though! What if an attacker forges your signature and public key. You need to ensure the other entities that your public key is authentic.

First, you apply for a certificate by sending a CA a CSR. The digital certificate you eventually get from the CA is confirming the authenticity of your public key. Traditionally, you create a CSR with OpenSSL tool with these steps:

1. First generate a pair of keys:
   `openssl ecparam -out private.key -name prime256v1 -genkey`
2. Then using these pair of key to generating a CSR. Note that you need private key for having a "Applicant signature" on your CSR
   `openssl req -new -key private.key -out my-csr.csr -sha256`

The issue in KMS is the CSR creation feature is not an available feature. Additionally, no one can have access to the private key generated on KMS. So this is a deadend way?

No, using the Bouncycastle, we are able to create a CSR. By using `PKCS10CertificationRequestBuilder` class from PKCS package, we create a "pre-build" CSR object which would need a `ContentSigner`. All we need to do is implement `ContentSigner` interface and glue the "sign" method we created before to this class.

```java
public class AwsKMSContentSigner implements ContentSigner {

  private final ByteArrayOutputStream outputStream;
  private final AlgorithmIdentifier sigAlgId;
  private final AwsKmsSigner signer;

  public AwsKMSContentSigner() {
    this.sigAlgId = new DefaultSignatureAlgorithmIdentifierFinder().find("SHA256WITHECDSA");
    this.outputStream = new ByteArrayOutputStream();
    this.signer = AwsKmsSigner.getInstance();
  }

  @Override
  public AlgorithmIdentifier getAlgorithmIdentifier() {
    return this.sigAlgId;
  }

  @Override
  public OutputStream getOutputStream() {
    return this.outputStream;
  }

  @Override
  public byte[] getSignature() {
    byte[] signedAttributeSet = outputStream.toByteArray();
    return signer.sign(signedAttributeSet);
  }

}
```

Additionally, pass it to the PKCS builder. The builder uses the signer to generate the "application signature" on the CSR.

```java
public String createCsr() {
  PKCS10CertificationRequestBuilder p10Builder = new JcaPKCS10CertificationRequestBuilder(
    new X500Principal("CN=Signer, O=MyOrg, OU=MyOrgUnit, C=Gothenburg, L=Sweden"),
    getPublicKey());
  ContentSigner contentSigner = new AwsKMSContentSigner();
  PKCS10CertificationRequest csr = p10Builder.build(contentSigner);

  PemObject pemObject = new PemObject("CERTIFICATE REQUEST", csr.getEncoded());
  StringWriter csrString = new StringWriter();
  JcaPEMWriter pemWriter = new JcaPEMWriter(csrString);
  pemWriter.writeObject(pemObject);
  pemWriter.close();
  csrString.close();
  return csrString.toString();
}
```

Done! The output is something similar to this:

```
-----BEGIN CERTIFICATE REQUEST-----
MIIBKDCBzwIBADBtMQ8wDQYDVQQHEwZTd2VkZW4xEzARBgNVBAYTCkdvdGhlbmJ1
cmcxGzAZBgNVBAsTEk15T3JnYW5pemF0aW9uVW5pdDEXMBUGA1UEChMOTXlPcmdh
bml6YXRpb24xDzANBgNVBAMTBlNpZ25lcjBZMBMGByqGSM49AgEGCCqGSM49AwEH
A0IABEGM2IMVUC3edUwly1y+G+ufLXbCVj6Ee9Dqz/XFEV7goD2twHBok+kGQxqN
nYkgBDIw54F9JtWWEhSch8QIluCgADAKBggqhkjOPQQDAgNIADBFAiEA3WFMR7mg
nF4VqCh1sFoLoxoAdvZvRpAa/F4wyvJQjU0CIEVxatmlGXzmoBY/MKHPiXG2UKVu
0yOb6ZsZeFQoHHN1
-----END CERTIFICATE REQUEST-----
```

#### Verify the signature in CSR

If you want to verify the digital signature inside a Certificate Signing Request, you can use the OpenSSL "req -verify" command as shown below:

`openssl req -in myCsr.csr -noout -verify`

The output "verify OK" indicates that the decrypted digital signature matches the digest of the CSR data.

#### Useful links

- SSL shopper https://www.sslshopper.com/
- Cert logik https://certlogik.com/decoder/
- https://aws.amazon.com/blogs/security/digital-signing-asymmetric-keys-aws-kms/
