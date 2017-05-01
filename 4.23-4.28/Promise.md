# Promises

We now explore another important topic with respect to javascript and how to leverage its power in MEAN stack applications.

This document will explore the following:

1. The Problem with Callbacks
2. Promises (Introduction)
3. Example
4. Use Cases in MEAN stack

# The Problem with Callbacks

In the document that explored ajax, you looked at how great callbacks can be in allowing us to run a task that may take a long time and then continue executing our program while we wait for that task to finish.

Sometimes, we refer to javascript as allowing us to write non-blocking code. In particular, a given task doesn't have to finish before we run another task.

But there are some problems with this.

First, perhaps we need the value of that task before we can continue to execute the program.

Suppose the task that we are executing is gathering info about reviews on a BTS burger. Well, that request may take a while but suppose the user needs to see those reviews before he decides what to order.

In this case, a callback will execute and come back when the data is ready. But what if the user must obtain this data before he can make a purchase. In this case, it won't make sense to use a callback while the user is brought to a page to purchase a burger.

Another problem that is quite common is often called "callback hell".

This occurs when multiple callbacks are called within a callback. This leads to a nested web of networks that can often be really hard to read and hard to maintain from the standpoint of software management.

## Promises (Introduction)

This is where promises can be super useful.

A promise as implied is sort of a commitment to something existing in the future.

With regard to javascript, this means creating a function that will return a promise object. This promise object is a representation of a value that will exist in the future. For example, it can be data fetched from a server like those burger reviews that were discussed earlier.

## Example

Let's look at a more concrete example to understand promises a bit more.

Let's suppose that we have a function called getData which takes two arguments: options, and callback.

```javascript
function getData(options, callback)
{
    $.get('example.php', options, function(res) {
        callback(null, JSON.parse(response));
    }, function() {
        callback(new Error("AJAX request failed!"));    
    });
}
```

Notice that this function makes an ajax request to example.php and then calls our
callback when it is done.

Let's use this functions now:

```javascript
    getData({name: "John"}, function(err, data)
    {
        if(err)
        {
            console.log("Error! " + err.toString())
        }
        else
        {
            console.log(data);
        }
    });
```

Now, let's modify the function so that it returns a promise.

```javascript
function getData(options)
{
    return new Promise(function(resolve, reject)
    {
        $.get("example.php", options, function(res) {
            resolve(JSON.parse(res));
        }, function() {
            reject(new Error("Ajax request failed!"));
        });
    }
}
```

Notice that in this code, we create a new Promise which gets passed two objects, a resolve and a reject object. The resolve handles the action when the function runs smoothly and the reject handles errors that can occur.

Let's look at how we use this:

```javascript
getData({name: "John"}).then(function(data) {
    console.log(data);
}, function(err)
{
    console.log("Error! " + err);
});
```

Notice that we call then on the function getData. You can think of this as when getData completes, "then" do this.

## Use Cases in MEAN Stack

So when should you use a promise vs. callback?

In general, you should use a promise if you need a task to be done before tasks after it can run.

For example, if you need some data that must come back to you before you execute the rest of your code, use a promise. Suppose you're parsing an email and using the fields to create an object like what we're doing with RFQ parsing. Then, you should use a promise to make sure that the email has been parsed before creating the RFQ object.

In another scenario, the task that you want to run might take a long time. Suppose, you just simply want to update a table when a change occurs server side. In this case, a callback would be the better choice.

That concludes our walkthrough of promises. 
