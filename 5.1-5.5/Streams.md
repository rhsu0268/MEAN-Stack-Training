# Node.js Streams

Now, let's talk about one last topic which are streams in relation to Node.js.

This document will look at these areas:

1. Why Streams?
2. Streams (Introduction)
3. Readable Stream
4. Writable Stream

## Why Streams?

If you have coded in Java before, you might have used streams in relation to File I/O (Input/Output) library.

Similar to Java, Node.js has an incredibly useful library for manipulating files.

You'll want to do your best to make the most of the material presented in this document because we work with lots of different files such as txt, csv, pdf, excel, word, etc in the SEWP project.

## Streams (Introduction)

So what are streams?

To put it simply, a stream is a unix pipe that allows you to "read data from a source and pipe it to a destination."

To put it technically, the steam is often referred to as the "EventEmitter" but don't worry too much about this term.

Note that a stream can be readable, writable or duplex (readable and writable).

What does it mean to be readable?

Well, it means that you can read data from that stream.

What about writable?

You can guess. It means you can write data to the stream.

By nature, Node.js is built on top of streams. In particular, the Node.js server consists of a request object which is a readable stream.

Sometimes we try to get data off of that request and the reason we can do that is because it's a readable stream.

Similarly, we can write the response from the server in the routes because the response object is a writable stream.

## Readable Stream

How do we read a file using a readable stream.

To do this, we create a readableStream object using the fs module.

Now, we read the file asynchronously, which means that when a chunk of data is available, a "data" event is emitted and then we can do what we want with the data inside a callback function.

Here's the code:

```javascript
var fs = require('fs');
var readableStream = fs.createReadStream('file.txt');
var data = '';

readableStream.on('data', function(chunk) {
    data += chunk;
});

readableStream.on('end', function() {
    console.log(data);
});

```
Notice that we also include a block for the "end" event. This occurs when we are finished with reading the file.

Another way to implement this same code is to keep reading the file until all the data has been read.

How do you think this is implemented?

(I'm leaving the implementation out to leave this as an exercise for you to figure out. Google around for resources if you're stuck.)

### Setting Encoding

One thing to bear in mind is that when you read data from a readable stream, that data comes back to you as a buffer object. It looks like gibberish if you printed the output to the terminal.

To get at the content, you have to set the encoding. In general, the encoding for the English language is utf8:

```javascript
readableStream.setEncoding('utf8');
```

### Piping

Another important thing to bear in mind is that readable streams are a great way for you to pipe data.

What does it mean to pipe data?

This means that you can read data from a given source and send it to a specific destination.

A lot of Unix developers like to pipe output from a process or errors in a web application to a log file.

Suppose we want to read the content of file1 and sent that content to file2. (Suppose this is the copy file function that we are building for our web application.)

In this case, we can first create a readableStream for file1 and then a writableStream for file2 and pipe the output of the readableStream to the writableStream.

The code looks like this:

```javascript
var fs = require('fs');
var readableStream = fs.createReadStream('file1.txt');
var writableStream = fs.createWriteStream('file2.txt');

readableStream.pipe(writableStream);
```

## Writable Streams

Unlike readable streams, writable streams allow you to write data to a destination.

The code is very similar to readable streams.

Consider this example of reading file1 and writing it to file2 (a longer implementation than the use of piping):

```javascript
var fs = require('fs');
var readableStream = fs.createReadStream('file1.txt');
var writableStream = fs.createWriteStream('file2.txt');

readableStream.setEncoding('utf8');

readableStream.on('data', function(chunk) {
    writableStream.write(chunk);
});
```


### End

If you worked with File I/O in Java or C, you are often told that you should handle the end of the program in a way that is good practice. This means closing the file you were reading from or the file you were writing to. You should also close the any streams you are using.

The same is true for Node.js streams. When you are done with reading or writing, you should close the stream.

In web applications like MEAN, we often want to send this message to the response object like so:

```javascript
res.end("Done reading!");
```

When end() is called, the stream emits a finish event and you can't' read or write from the stream after that.
