---
layout: bloggpost
heading: GraphQL - Behind the scenes
authors:
  - gustavjorlov
category: blogg
published: true
---

GraphQL is a query language for APIs. It was created with the client in mind, enabling easier and less network activity as well as hiding data transformations in the backend. It has an appealing syntax, which might be the only thing you'll ever care about if you are the client developer. It sure sounds like a lot of complexity is hidden on the backend. That's true, and it would be very hard to develop the backend if you needed to do all the data assembling by yourself. In this post I'll walk you through how that's done and some patterns and new best practices along the way.

<!--more-->

## Syntax

I will start by setting the context, showing a little bit of a request/response, but if you like to learn more complex queries you need to read elsewhere.

~~~ javascript
query {
  company(id:1) {
    id,
    name,
    address {
      street,
      city
    }
  }
}
~~~
Will end up in a response like this:
~~~ javascript
company {
  id: 1,
  name: 'KITS AB',
  address {
    street: 'Norra Allegatan 8',
    city: 'Göteborg'
  }
}
~~~
The response matches the query almost exactly. Which is really nice as a client developer. The data is already formatted as you like, you can also alias some fields or reuse fragments of queries, but that's not for the scope of this article.

## How it works

The query gets evaluated by a schema that defines which keywords that can be composed together. The schema specifies the capabilities of the server in a typed schema, (which also happens to be the documentation, but more about that later).

### Types and schema

Following types are what made the query above possible, a couple of types along with the possible fields to ask for:

~~~ graphql
type Query {
  company(id: Int!): Company
}

type Company {
  id: Int,
  name: String,
  address: Address
}

type Address {
  street: String,
  city: String
}
~~~

As well as common primitive types (i.e. Int and String) your own types can be composed as fields into each other, making the arbitrary composition possible. This is by far the coolest thing with GraphQL. You can compose your data how you like, and the server will magically solve the hard parts for you.

### Resolving data

You might ask what a challenge the backend developers have at hand. But the answer is that it's not that complex. This is a place where strong typing shines.

For every type, you specify a resolver function. Code of your choice. This makes GraphQL database agnostic, or you might not want a database at all, files on the disk will do perfectly fine (at least as far as GraphQL concerns). The resolver function will receive context parameters to make resolving of the correct data possible. This context consist of `arguments` (like `id` from out type above) , `parent` and `context`. Parent in our case above will for the `Address` resolver be the resulting `Company`. The last context parameter can be things like the logged in user or other things you need to decide upon the right data.

~~~ javascript
const resolver = (arguments, parent, context) => {
  // invoke your business layer and pass along needed context
};
~~~

## GraphQL vs. REST

## Documentation

## Best practices

### Auth
### Caching / batch fetching

## Tools

## The road ahead