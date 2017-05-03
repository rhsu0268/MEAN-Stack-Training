# Synchronous File IO in Node.js

In the last document, we looked at Streams which is an asynchronous way of reading and writing files.

Now, let's explore synchronous file IO. This document explores:

1. Synchronous Read
2. Synchronous Write
3. Synchronous File-IO vs. Streams

## Synchronous Read

Suppose we want to read a file and only execute code after the file has been read.

We can do the following:

```javascript
var fs = require('fs');
var contents = fs.readFileSync('/etc/passwd').toString();
console.log(contents);
```

readFileSync is a function that reads a file synchronously meaning that it will be done
before tasks that come after it is run.

## Synchronous Write

Similar to synchronous read, we have a function for synchronous write: writeFileSync

```javascript
var fs = require('fs');
fs.createWriteStream('/tmp/fs.tmp');
```

## Synchronous File-IO vs. Streams

Now, you might be wondering when to use synchronous File-IO and when to use streams.

In general, you should use the synchronous File-IO functions if you need to display a file to the user in the browser. For the most part, this means that you are not running code after this task and so it is alright for you to hang the UI while this task runs.

On the other hand, if you are parsing files like a csv file, you almost always want to use streams.

There are some great examples in our SEWP codebase and I suggest you take a look at those and see how all of these functions and similar ones are used.
