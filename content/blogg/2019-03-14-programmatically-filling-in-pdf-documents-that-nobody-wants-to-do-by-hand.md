---
type: post
title: Programmatically filling in PDF documents that nobody wants to do by hand
authors:
  - williambernting
---
Developers, like us at KITS and many others around the world, like to picture themselves working on large scale solutions, solving great engineering challenges that in the end will save the day. Then comes the day where you are asked "can you make us able to export this data, and have it filled out on this PDF document?".

Truth this, from a business perspective, large systems tend to be amazing at giving you convoluted solutions to solve more than one problem, and if you're unlucky, they solve each problem half-decently at best. Sometimes the small hacks are simply the best productivity boosters, and that's why employees with some scripting knowledge can reach amazing productivity compared to their peers.

Today I'm going to show a quick and simple way to get this type of work done, and I'm going to start off by giving you my complete solution, because you want the solution and I respect that completely.

If being a developer is not your main job, don't worry, I'm going to give you a few prerequisites to get going.

# Setup phase

What you need:
* A way to actually _get_ my code: Git for Windows (unless you're not using Windows)
* A way to actually edit the code: A nice code editor, like VS Code. https://code.visualstudio.com/ (guide will instruct you based on using VS Code from here on out)
* A way to actually run the code: NodeJS (Latest or LTS)

Here are the steps.
1. Open a so-called git bash console (just open the windows start menu and type `git bash`, it should be there).
2. Type `git clone https://github.com/wbern/hummus-pdf-example.git` to get my example repository, it will be named `hummus-pdf-example` by default. Humm

![Git Clone GIF](https://github.com/wbern/hummus-pdf-example/raw/master/blog_assets/blog_git_clone.gif "Git Clone GIF")

*For those who want to know, we are using an enhanced shell bundled with `git`, a great way to share code and my way to share my code with you. You can later use git to manage your own projects, but that's for a future blog post.*

3. Now, open VS Code, and go File > Open Folder and select the directory (`hummus-pdf-example`). You can also right-click the folder in the File Explorer and choose "Open with Code".
4. Try to press "F5", which will start a debug session and execute the index.js file.

## Oops!
We will get an error saying `Error: Cannot find module 'hummus-recipe'`. This is because programmers rarely create code that is responsible for the entire chain of operations to get the end result that's needed. We need to install our declared dependencies in the `package.json` file.

Simply enough, in the same way that NodeJS lets us take care of executing javascript on your computer outside the browser, we will get NodeJS retrieve our dependencies via its own package called `npm`.

5. Get that `git bash` shell open, and type `cd hummus-pdf-example` to get into your project's working directory.
6. Now we can type `npm install`.

*If you never want to leave VS Code, there is actually a Terminal tab at the bottom pane*

7. After its done, as an added bonus, we can now execute the application from the shell if we'd like to with `npm run start` (the `start` script lives in package.json), **but that will give us limited debugging capabilities so lets _not_ do that for now.**
8. Now go back to VS Code, and try that F5 key again to start debugging. If the "Debug Console" tab didn't open itself automatically, click on it at the bottom tab.

### Cool, now you're seeing `running: port 8080!`, but what is actually happening here and how is that useful to me?*

## This application is actually.. a tiny web server..?!
You never quite know what you get when downloading other people's code without looking. :-) Don't worry, this is not malicious, and nobody is going to be able to do anything harmful with your little web server.

Focusing on what's cooler, what this means is that, if you open your web browser while it's running, you can type in `http://localhost:8080` to access it on your own machine (localhost = you), and specifically `http://localhost:8080/hello` to use the little command I added for you. (If localhost doesn't work, you could also try `http://127.0.0.1/`)

![Git Hello GIF](https://github.com/wbern/hummus-pdf-example/raw/master/blog_assets/blog_hello.gif "Git Hello GIF")

What this means is that you can potentially put this script anywhere, not just on your own machine, to let many more employees use what you just made. In the end, the more people who use something you made, the more special it should make you feel.

This what many developers consider their real calling, helping others, underneath all the stereotypical things.

## So how do I get this thing to do what I want..

# Code phase

## I want to put some text on a PDF, please send help.
We're using a package called `hummus-recipe` (github repo: https://github.com/chunyenHuang/hummusRecipe) that helps us read and modify PDF files. In order to actually fill in anything, we need to open the PDF, write some text at some specific coordinates, and close the PDF.

Because programmers want structure and order, I have created an object that holds the coordinates to each field I want to fill in on the single-page document in this demonstration, on line 8 in the code. (hint: press `CTRL + G` to open a "goto line" feature in VS Code)

```
const fields = {
    choiceRiksdagen: { x: 83, y: 256 },
    choiceLandsting: { x: 83, y: 279 },
    choiceLandstingText: { x: 235, y: 279 - 3 },
    choiceKommun: { x: 83, y: 301 },
    choiceKommunText: { x: 235, y: 301 - 3 },
    choiceEU: { x: 83, y: 324 },
    party: { x: 85, y: 208 },
    date: { x: 97, y: 368 },
    municipality: { x: 97, y: 391 }
};
```

Going closer to the bottom of the code, I am retrieving the values provided when using the web server, based inside the property `req.query`. Basically, me writing `http://localhost:8080/generate?date=2019-05-20,2019-05-19&municipality=Gothenburg,Stockholm,Malmö

Will be parsed by the below code:
```
// Put date and municipality in a key and iterate one at a time
Object.keys(req.query || {}).forEach(key => {
    // if `date` is the name of one of the `fields` we have declared coordinates for, put those texts (2019-05-20 and 2019-05-19) inside a `texts` object.
    if (fields[key]) {
        texts[key] = req.query[key].split(",");
    }
});
```

If you are new to code, don't worry, you can solve the same problem in a hundred different ways, and reading other people's code can, at first, be difficult because you are different people. The industry may help to give standards, but even those standards change over time.

Feel free to look up all the functions used online before you continue. If you want the work done by end of business, let's continue!

After we have the texts stored conveniently in a `texts` object, the code will continue and execute the following..

*Before you look, remember that the data structure looks like this inside texts:*
```
// this is how the data looks like during execution.
texts: {
    date: ["2019-05-20", "2019-05-19"],
    municipality: ["Gothenburg", "Stockholm", "Malmö"]
}
```

Learning to inspect the code while its running (debugging) can help you gain real insight on what is going on in your code. **Using VS Code, In the text/code text area, Try clicking the empty space to the left of the line number**. This will add a red circle that the code will stop on if the execution reaches it. When the execution is paused, you can hover variables like `texts` to see what they contain, as well as to type things in `Debug Console` at the bottom pane to execute javascript in real-time. Pretty cool, and an invaluable tool to any developer.

![Git Debugging GIF](https://github.com/wbern/hummus-pdf-example/raw/master/blog_assets/blog_breakpoints.gif "Git Debugging GIF")

Now, on to the code that will put our texts on the PDF.
```
// Go over each text field name (like date)
Object.keys(texts).forEach(fieldName => {
    // go over each date's individual entry in the array
    texts[fieldName].forEach((rowValue, index) => {
        pdfDoc.text(
            // eg. "2019-05-20"
            rowValue,
            // the X and Y coordinates that we have specified for that field
            fields[fieldName].x,
            // Note that we're using a trick with index and a multiplier to input the dates on a new Y coordinate for each time we write it.
            fields[fieldName].y + index * multiplierOffset,
            // you can change the font settings if you want
            fontSettings
        );
    });
});
```

After that code has executed, you will be getting a pdf downloaded, and as a bonus, the pdf will be stored locally on the machine as well.

## I understood roughly 10% of that
Ok, understood! Here's my suggestion, tinker with as much of the code as you can. Next, I will show you how to fit this to your use-case. Often times you don't need to understand it all to make it work for you.

# Time to hack it!
Obviously you don't want to fill in this form but something else.

You can do this by putting in coordinates into the following code:

```
const fields = {
    choiceRiksdagen: { x: 83, y: 256 },
    choiceLandsting: { x: 83, y: 279 },
    choiceLandstingText: { x: 235, y: 279 - 3 },
    choiceKommun: { x: 83, y: 301 },
    choiceKommunText: { x: 235, y: 301 - 3 },
    choiceEU: { x: 83, y: 324 },
    party: { x: 85, y: 208 },
    date: { x: 97, y: 368 },
    municipality: { x: 97, y: 391 }
};
```

Then when you use the URL, you just provide the names listed above and the text will appear correctly. Need a multiplier override for specific fields? No problem! Just add them into each field. Hacking this to fit your needs is the most essential part, whether you understood all the code or not.

# Finished
Hopefully you got something that you can tinker with as a side-project. Or you already got it to work. Either way, I hope you will get this working for your use case, and in the worst case, just contact me by filing a GitHub issue in the repository (https://github.com/wbern/hummus-pdf-example).

If you want to get into web development and create visual components, I suggest writing some form controls to let you create PDF's more easily, which I found to be slightly out of scope for this small topic.

## Bonus! Hosting the server with heroku for free
If your documents aren't too important, you might want to consider a really simple hosting service for this neat solution. That way, other people can more easily use your custom tailored solution.

1. Go to https://www.heroku.com/ and sign up.
2. Connect heroku to your code somehow (they help you out a lot, I used GitHub for integration, so if you "Fork" my GitHub repo with a GitHub account, you can do the same thing as I did.)
3. Access your web server. For example, mine can be accessed from `https://partibeteckning-underskrifter.herokuapp.com/`
4. Now anytime you push your code, your changes can be provided automatically to your new and awesome web service.

Thanks for reading!
