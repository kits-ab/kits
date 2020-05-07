---
type: post
title: Union types - when one type isn't enough
authors:
  - philipwallin
---

I often encounter situations where I want to use data which have more than one type. The most common case for me is when I want to present an as informative response as possible to why an HTTP request wasn't successful, but it could also be an internal backend API with a set of types which might be extended in the future, or a frontend application where multiple types would help model the domain. Unions types to the rescue!

<!-- more -->

## Background
A couple of years ago I was working on a large codebase with a lot of dependencies between features where we often missed to implement new functionality for all use cases in the product, as it was quite impossible to know all functionality that we supported. When I first learned about the [visitor pattern](https://en.wikipedia.org/wiki/Visitor_pattern) I felt like it solved all my problems, I could now extend my data types and all code that used the types would need to implement handling of the newly added cases. The visitor pattern require you to explicitly handle all potential data it can contain, which is nice, but the downside is that it produces a lot of boilerplate code and isn't really intuitive to understand, it felt like I had to read up on the pattern over and over again. Enter union types.

## Union types
Union types, or discriminating unions, are basically a type which can contain one value of one of its specified types, similar to how in a [data format specification](https://www.json.org/json-en.html) you might want to say "a value is either a boolean, a string, or a number".

In TypeScript using a union type might look like this
```typescript
const value: boolean | string | number = "hello";
```

or in F# like this
```fsharp
type ValueType =
    | Boolean of bool
    | Text of string
    | Number of int
    
let value = Text "hello";
```

or in C# I have created [my own open source project](https://github.com/PhilipAlexanderWallin/GenericDataStructures) for union types
```csharp
Union<bool, string, int> value = "hello";
```

What is great about the union type is that you cannot access specific functionality of the value type unless you first can guarantee the functionality is available. Lets say we now want to get the number of characters of our value, I'll treat true/false as text in this example:

In TypeScript this might look like this
```typescript
function getNumberOfCharacters(value: boolean | string | number): number {
    if (typeof value === "boolean")
    {
        return value ? 4 : 5;
    }
	else if (typeof value === "number")
    {
        return value.toString().length;
    }
	else 
    {
        // Here we know it's a string, which has a length property
        return value.length;
    }
}

const characters = getNumberOfCharacters(value);
```

or in F# like this

```fsharp
let getNumberOfCharacters value =
    match value with
    | Boolean boolean -> match boolean with
        | true -> 4
        | false -> 5
    | Text text -> text.Length
    | Number number -> number.ToString().Length
    
let characters = getNumberOfCharacters value;
```

or in C# for [my union type](https://github.com/PhilipAlexanderWallin/GenericDataStructures#union)

```csharp
var characters = value.Map(
        boolean => boolean ? 4 : 5,
        text => text.Length,
        number => number.ToString().Length
    );
```

Another nice thing here is that if we should include an additional type in the value union type in the future the code wouldn't compile. In the case of TypeScript I would no longer know it's a string type in my last "else"-case, in F# I would no longer be matching on all possible values, and in my C# library I would be missing a Func as parameter.

## How I use union types
Lately I've been working mostly with REST API:s, where my use case has been that I should execute some kind Create/Read/Update/Delete operation and report back either a successful result or a failure result with data detailing why the operation failed. Commonly the failure cases are validation errors, missing data/resources, conflicting modifications, or insufficient permissions. In backend services I've seen many different kinds of result classes, often with implicit relation between data properties which you as a user of the service need to understand to access the result properties safely. In my library I have implemented [a result type](https://github.com/PhilipAlexanderWallin/GenericDataStructures#result) which is basically just a union type with extra methods to deal with the success case. This can be useful if you for example use the backend services both for a public REST API, where error handling is very important, and for an internal API or tool for developers where you only care if operation executed as expected. It also makes it more semantically clear what is the expected result than just using a union type directly.

## Summary
I believe union types is a good way of handling multiple data types while maintaining strongly typed code, and as a way to minimize need of dependent properties of data objects. Even if your language of choice doesn't support it natively you can hopefully implement it yourself.

If you're a C# developer feel free to try out my [generic data structures project](https://github.com/PhilipAlexanderWallin/GenericDataStructures) for union types, any and all feedback is appreciated!
