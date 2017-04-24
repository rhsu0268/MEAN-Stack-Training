# Ajax and Promises

Now, we get into some more advanced topics in web development.

First, one of the tremendous powers that you have with javascript is that you can write code that is **asynchronous**.

In this document, we will look at:

1. Synchronous code
2. Asynchronous code
3. Examples
4. Ajax

## Synchronous Code

A program executes synchronously if a line of code cannot run until the previous line has been run.

Use this analogy to think about this concept. Suppose you are lining up to buy a BTS burger at BTS, my favorite burger place at Foggy Bottom. You can't make an order until the person standing in front of you has ordered. [Now, if they have an online app or a kiosk that allows multiple people to place orders at the same time, that would be a different story.]

But we'll stick with this example. Note that people that come in after you also can't order their burgers until you have ordered yours.

## Asynchronous Code

When you write asynchronous code, a task called A can execute some task that may take a while but task B which comes after A can be run before A is finished running.

We can consider our analogy of BTS from before. Now, suppose BTS made their cashiers servers and required them to take people's order at the table. [It's not what's happening now but just consider it.]

Notice that unlike before, multiple people can place orders at once. In particular, the other people don't have to wait for you to get your order for them to place their order and vice versa.

While it is true that the orders can be served in the order they come in, this doesn't have to be the case. Suppose I ordered a burger and then, you ordered a beer. Now, it's reasonable that your beer will be served before I get my burger since it probably takes longer to prepare a burger than to prepare the beer.

One thing that needs to be clear is that it's not the same as concurrency or multi-threaded processing.

Javascript can be written asynchronously but for the most part, it is single-threaded.

## Examples

One very simple way to illustrate asynchronous code is the setTimeout function in javascript:

Consider the following:

```javascript
console.log("Hello, Akira!");

setTimeout(function() {

    console.log("Goodbye, Akira!");

}, 2000);
console.log("Hello, Akira again!");
```

So, what is happening here?

First, we console.log Hello, Akira. Okay.
Now, notice that setTimeout takes two arguments. The first is an anonymous function and a second integer value.

In this case, we are calling console.log after two seconds have gone by to print out Goodbye, Akira.

And notice that we call console.log again at the end to print "Hello, Akira again!"

So, what will this print in the end:

```
Hello, Akira!
Hello, Akira again!
Goodbye, Akira! (After two seconds)
```

Notice that our Hello, Akira again! prints before the Goodbye, Akira! This is what happens in asynchronous code. You can schedule tasks to be run and continue executing code after that piece of code.

# Ajax

Now, for another important concept.

Ajax stands for **A**synchronous **J**avaScript **A**nd **X**ML.

Ajax allows a web page to load some more data by making a request to a server without reloading the whole page.

Consider:

![alt text](Ajax.gif)

Notice that when we want more data, we create an XMLHttpRequest Object. This object can in turn send an HTTPRequest to fetch data from the server. The data is ultimately brought back to the client's browser and used to update the page's content.

Ajax is actually everywhere on the web. You just might not have noticed it. For example, if you used Googlemaps, when you drag and drop your mouse or the trackpad, your whole page isn't reloading. Rather, certain squares on your page is loading and slowly coming in. It's ajax behind the scenes that is making that possible.

Another good example is changing stock prices on stock trading sites. In particular, ajax requests are working behind the scenes to updating the numbers and decimals without the user having to click a button to reload the screen.

# Callback functions

At the center of ajax is the callback function.

Let's consider a problem where we need to retrieve data from a server that may take a while and do something to that data once it is returned.

Anytime that you hear about a task taking a while, asynchronous code should come into your mind.

We can create a function to get this data called getData:

```javascript                              
function getData(callback)
{
    $.get("data.php", function(res) {
        callback(res);
    });
}
```

Here, we see that the function getData takes a callback function. Inside, we use $.get to make a ajax request using data.php as server code, and then use that callback function to handle the response (res) when the data comes back.

Now, we can use this function like so:

```javascript
getData(function (data) {
    console.log(data);
});
```

You can think of this code with another analogy of BTS. If you'll gotten a burger there, you know that you get a buzzer when you place an order and pay for your burger. Then, when the burger is ready, the buzzer goes off and you return to the counter to pick up your burger. In a way, your order is a task and that buzzer is a callback. When your order is done and ready, a callback function or the buzzer is used to run another piece of code or in this case inform you that the burger is ready.
