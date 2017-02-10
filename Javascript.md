# Javascript

As with other language, you should be comfortable with variables, loops, conditions, functions, objects.

Aside from that, I want to point out some interesting characteristics about the language that you will see over time:

- Functions are "first class citizens"

This means that we can treat a function like an object and assign it to a variable.

```bash

var hello = function()
{
    console.log("hello world!");
}

```

- We can actually be very sophisticated and not give a function a name. We call this an anonymous function or a closure if you ever programmed in Swift.

```bash
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
```

- Anonymous functions are super useful in networking. Callbacks are everywhere.

- There are lots of libraries that we can use with Javascript. One of the most popular is jQuery. It allows us to manipulate HTML elements very easily:

```bash

$("#super").click(function() {
    console.log("I love javascript!");
});

```

- Angular is the new big front-end framework built on top of javascript. It's wonderful.
