// Personer och deras kontaktuppgifter. Flyttade från @kokitotsos/react-components (types).

export enum SocialType {
  GitHub = "github",
  Keybase = "keybase",
  LinkedIn = "linkedin",
  Twitter = "twitter"
}

export class Username {
  private readonly username: string
  private readonly type: SocialType

  constructor(username: string, type: SocialType) {
    this.username = username
    this.type = type
  }

  toLink() {
    switch (this.type) {
      case SocialType.GitHub:
        return `https://github.com/${this.username}`
      case SocialType.Keybase:
        return `https://keybase.io/${this.username}`
      case SocialType.LinkedIn:
        // Innehållet anger hela LinkedIn-adressen.
        return this.username
      case SocialType.Twitter:
        return `https://twitter.com/${this.username}`
    }
  }

  toString() {
    return this.type
  }
}

export class PhoneNumber {
  private readonly n: string

  // Tar emot nummer i valfritt format ("0708 – 27 74 99", "+46708277499"), men det måste bli
  // tio siffror. Ett felaktigt nummer i innehållet stoppar bygget i stället för att visas fel.
  constructor(n: string) {
    const cleanNumber = n.replace("+46", "0").replace(/\D/g, "")
    if (cleanNumber.length !== 10) {
      throw Error(`Ogiltigt telefonnummer "${n}", ska vara tio siffror`)
    }
    this.n = cleanNumber
  }

  toLink() {
    return `tel:+46${this.n.substring(1)}`
  }

  // "0708-27 74 99": bindestreck i stället för tankstreck.
  toString() {
    const n = this.n
    return `${n.substring(0, 4)}-${n.substring(4, 6)} ${n.substring(6, 8)} ${n.substring(8, 10)}`
  }
}

export class Email {
  private readonly address: string

  constructor(address: string) {
    this.address = address
  }

  toLink() {
    return `mailto:${this.address}`
  }

  toString() {
    return this.address
  }
}

export interface Social {
  github?: Username
  keybase?: Username
  linkedin?: Username
  twitter?: Username
}

export interface Person {
  id: string
  name: string
  tagLine?: string
  imageSrc?: string
  avatarSrc?: string
  avatarSrcSet?: string
  href?: string
  phone?: PhoneNumber
  email?: Email
  social?: Social
  tags?: string[]
}
