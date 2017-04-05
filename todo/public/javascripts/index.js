var app = angular.module('home', []);

app.controller('ListCtrl', ['$scope', '$http', function($scope, $http) {

    console.log("Inside ListCtrl");

    $scope.toDoList = [{task: "Learn Javascript", done: true}, {task: "Learn MEAN Stack", done: false}, {task: "Learn Git/Github", done: false}];

    $scope.AddItem = function()
    {
        $scope.toDoList.push($scope.newTask);

        var task = JSON.stringify($scope.newTask);

        $http.post('/saveTask/' + task).then(function(res) {

        });

    }


    $scope.MarkComplete = function()
    {
        console.log("Mark Complete");
        task.done = true;
    }

    $http.get('/getTasks').then(function(res) {

    });
}]);
