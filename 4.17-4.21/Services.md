# Services

Now, let's look at services with respect to MEAN stack.

From the tutorial, you have created a angular service to get at blog posts, create blog posts, and also edit and delete blog posts.

In short, an angular service is simply a way for you to bridge the gap between the front-end and the backend.

This document will walk through the development of an angular service and also all the components that are involved within the MEAN stack application.

1. Introduction
2. Creating a Service
3. Creating Object
4. Retrieving Object
5. Updating Object
6. Delete Object
7. Putting it All Together

## Introduction

Let's return to our todo application and start from scratch. Well, okay, maybe not entirely from scratch.

But let's suppose that we want to create a page for tasks that we want to do for the day. Before, our todo list allowed us to add a whole bunch of tasks that we want to do without any timeframe specifications. Suppose we want to have a page to keep track of things to do everyday and be able to view, create, update, or delete tasks everyday.

Let's call this new page todo list for the day.

Note that anytime you see the operations **c**reate, **r**ead, **u**pdate, **d**elete, you'll dealing with the four main operations that we do with a database: CRUD.

In MEAN stack applications, these operations are best handled with a service.

But let's quickly get started with creating the application. You can follow along with todo-everyday which is the repo that I'm using to create this new segment of the application.

We create a new route for the page, a new file for the view, and put some html into the view file. Now visit: http://localhost:3000/everydayTasks


You should see our new page, which doesn't have much at the moment.

Now, let's create a simple UI.

We want to display a list of tasks followed by a very simple interface for adding new ones. All of this should be relatively simple since you studied HTML.

Now, let's bring in angular into our app. Remember how?

1. Bring in the angular library.
2. Declare ng-app inside html.
3. Create and bring in a javascript file.

Finally, let's define an ng-controller and hook up a lot of our front end elements to this controller.

## Creating a Service

The syntax for creating a service in angular is quite simple:

```javascript
app.factory('serviceName', ['$http', function($http) {

    var infoServiceObject = {
        importantInfo: []
    };
    return infoServiceObject;
}]);

```

Notice that we give our service a name, and inside that service, we create an object that we will use to move data around.

So, let's start by creating a service for our todolist for the day page.

```javascript
app.factory('todolistService', ['$http', function($http) {

    var todolistData = {
        listData: []
    };
    return todolistData;
}]);

```

Now, in order to use this service, we have to bring it into our controller. We call this dependency injection. (It sounds dangerous, I know.)

## Creating an object

Okay, we're ready to use our service. Let's first tackle creating a new object. First, we need a model. So let's create that quickly.

Okay, now, let's start by creating a new function in our service called create.

```javascript
todolistData.create = function(task)
{
    return $http.post('/createEverydayTask', task).success(function(data) {
        console.log(data);
    });
};
```

Now, we can create this new route for creating new data objects. Know where this goes?

Finally, we must call this function in our service inside our controller.

```javascript
todolistService.create({TaskName: $scope.task});
```

## Retrieving Objects

Now, overhaul our angular implementation of the dummy list and create a function within our service to retrieve all the tasks from our database.

```javascript
todolistData.get = function()
{
    return $http.get('/getEverydayTasks').success(function(res) {
        console.log(res);
        todolistData.listData = res;
    });
}
```

We create the route to our backend to retrieveall the tasks.

Next, we must call it in our front end.

```javascript
var tasks = todolistService.get().success(function() {
    console.log(todolistService.listData);
    $scope.toDoList = todolistService.listData;
});
```


This is an example of the use of a promise because network requests can take a while and so we cannot directly just call the function. (More on this next week.)

## Updating an object

Now, let's create a function to update an object:


```javascript
todolistData.update = function(updatedTask)
{
    return $http.post('/updateEverydayTask', updatedTask).success(function(res) {
        console.log(res);
        //todolistData.listData = res;
    });
}
```

Know what's next? We create a route and follow up with calling it in our controller.

## Deleting an Object

Now, let's add one more function to our service, deleting an object.


```javascript
todolistData.delete = function(task)
{
    return $http.post('/deleteEverydayTask', task).success(function(res) {
        console.log(res);
        //todolistData.listData = res;
    });
}
```


Next, we create our route to handle this action and follow up with calling it in our controller:

```javascript
    todolistService.delete({TaskName: task.TaskName});
```

## Putting it all together

I know that was a lot. But services in angular are super useful. In a way, it is like an API. Remember what those are from earlier this week.

We can create a service and tell other developers about our methods, create, get, update, and delete and they can interact with our service without having to look at anything inside the routes.

Moreover, services also serve as the bridge between the back-end and front-end in a MEAN stack application. Notice that we can easily create all these functions within our controller but isolating these functions and putting them into a service offers more organization and also easier maintenance down the road.

In closing, this is another of several skills that you want to master as you continue and become full stack javascript developers. 
