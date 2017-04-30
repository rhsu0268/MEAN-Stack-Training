var app = angular.module('everydayTasks', []);


app.factory('todolistService', ['$http', function($http) {

    var todolistData = {
        listData: []
    };

    todolistData.create = function(task)
    {
        console.log("Creating task!");
        return $http.post('/createEverydayTask', task).success(function(data) {
            console.log(data);
        });
    };


    todolistData.get = function()
    {
        return $http.get('/getEverydayTasks').success(function(res) {
            console.log(res);
            todolistData.listData = res;
        });
    }


    todolistData.update = function(updatedTask)
    {
        return $http.post('/updateEverydayTask', updatedTask).success(function(res) {
            console.log(res);
            //todolistData.listData = res;
        });
    }

    todolistData.delete = function(task)
    {
        return $http.post('/deleteEverydayTask', task).success(function(res) {
            console.log(res);
            //todolistData.listData = res;
        });
    }

    return todolistData;
}]);


app.controller('everydayTasksCtrl',['$scope', '$http', 'todolistService', function($scope, $http, todolistService) {

    //console.log("everydayTasks!");
    var tasks = todolistService.get().success(function() {
        console.log(todolistService.listData);
        $scope.toDoList = todolistService.listData;


    });
    //console.log(tasks);

    //$scope.toDoList = ["Study for Final", "Finalize coursework for next semester", "Workout at the gym"];

    $scope.AddItem = function()
    {

        //console.log("Adding Item!");
        //console.log($scope.task);
        todolistService.create({TaskName: $scope.task});
    }

    $scope.UpdateItem = function(task, updatedTask)
    {

        console.log("Updating Item!");
        console.log(task);

        console.log(updatedTask);



        todolistService.update({TaskName: task, UpdatedTask: updatedTask});
    }

    $scope.DeleteItem = function(task)
    {

        console.log("Deleting Item!");
        console.log(task.TaskName);

        //console.log(updatedTask);



        todolistService.delete({TaskName: task.TaskName});
    }



}]);
