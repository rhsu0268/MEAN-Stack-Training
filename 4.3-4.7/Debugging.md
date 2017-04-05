# Debugging

One of the most important skills that you will need to develop is debugging the MEAN stack application when you run into problems.

![alt text](First_bug.jpg)

This is one of my favorite pictures in Computer Science history. It's actually the first computer bug discovered by Grace Murray Hopper. <http://www.computerhistory.org/tdih/September/9/>

This file will give you an overview of:

1. Common debugging tools
2. Where errors can occur
3. The steps you should take in debugging the application
4. Sample exercise for debugging the todo application

## Debugging Tools

Let's go over some of the tools that you can use to debug your program.

- First, if you ever used "printf()" for C or "System.out.println()" when you used Java, you already used the first tool that I will describe. "console.log" is a really good function to use to print the value of variables or data structures in your code.

- Second, other people may also encountered the same error that you are getting. (Google is your friend here.) **"STACKOVERFLOW your errors."**
<br>
In particular, you can usually find descriptions of errors or difficulties people had and resolutions or solutions to them. (Sometimes good developers are also good googlers.)

## Where Errors Can Occur

Now, let's go over where errors can occur.

If you're working with a front end task in HTML, or CSS, markup fails "silently." In particular, if you make a mistake in not closing an html tag, your markup will still render in your browser. It just might not look right but you won't see any errors.

Here's an example of making some text bold and things didn't go according to plan:

```html
<b>This is a sentence that is in bold.<b>This is a sentence that is not supposed to be bold.
```

Here, we made the first sentence bold but the second is also bold because we didn't close off that second b tag. Errors like this are quite common but note that these are not going to generate errors on your screen.

Second, when you're working with Angular, typos and errors will appear on your developer's console if you're using chrome.

To bring up the console, you can use the following shortcut on a Mac: Command + Option + I

The command for Windows is: F12, Ctrl + Shift + I

Errors appear in red text and can be sometimes daunting to decipher.

Finally, server errors are also quite common especially when you're working with a backend task in routes. There are various status codes that come up here.

(For the most part, 200 means Okay. Errors that are 400 usually means Page Not Found, or File Not Found and a 500 error means something's wrong on the server side.)

## Steps in Debugging

1. If you're working with an angular task, check the console for errors if things don't work and use console.log to print the value of variables.
2. if you're working with a back-end task, check the terminal for errors and also use console.log to print the value of variables.
3. If the error is something you never seen before, STACKOVERFLOW it. (Most likely, someone else had the same problem and a solution to resolve is already out there.)

## Sample Exercise

Now, to review the things that we learned in this README, here are two exercises that you can do on the todo application.

1. Our todolist app wouldn't be very useful if we can't cross out items that we have completed. I implemented that feature but there's something wrong that I can't figure out. Have a look and see if you can fix it so that you can cross out items when the button is clicked.

2. Now, you will notice that I added a field for due date and in the process I seemed to have broken the back end of the application so that new tasks are not being saved properly. Have a look at the routes and see if you can fix the app so that I am saving both the name of the task and its due date. (Hint: I would look at the models to see what schema is defined.)

I would start with cloning my MEAN-Stack-Training Repo. Cd into todo and start up mongo and do npm start.

Good luck!
