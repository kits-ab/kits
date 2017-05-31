---
layout: bloggpost
heading: GraphQL - Behind the scenes
authors:
  - gustavjorlov
category: blogg
published: true
---

# Intro

GraphQL is a query language for APIs. It was created with the client in mind, enabling easier and less network activity as well as hiding data transformations in the backend. It has an appealing syntax, which might be the only thing you'll ever care about if you are the client developer. It sure sounds like a lot of complexity is hidden on the backend. That's true, and it would be very hard to develop the backend if you needed to do all the data assembling by yourself. In this post I'll walk you through how that's done and some patterns and new best practices along the way.

# Syntax

I will start by setting the context, showing a little bit of a request/response, but if you like to learn more complex queries you need to read elsewhere.
```
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
```
Will end up in a response like this:
```
company {
  id: 1,
  name: 'KITS AB',
  address {
    street: 'Norra Allegatan 8',
    city: 'Göteborg'
  }
}
```
The response matches the query almost exactly. Which is really nice as a client developer. The data is already formatted as you like, you can also alias some fields or reuse fragments of queries, but that's not for the scope of this article.

# How it works

## Types and schema

# GraphQL vs. REST

# Documentation

# Best practices

## Auth
## Caching / batch fetching

# Tools

# The road ahead