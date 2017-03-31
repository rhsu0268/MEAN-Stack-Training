var app = angular.module('home', []);

app.controller('ListCtrl', ['$scope', '$http', function($scope, $http) {

    console.log("Inside ListCtrl");

    $scope.toDoList = ["Learn Javascript", "Learn MEAN Stack", "Learn Git/Github"];

    $scope.AddItem = function()
    {
        console.log($scope.newTask);
        $scope.toDoList.push($scope.newTask);



        $http.post('/saveTask/' + $scope.newTask).then(function(res) {
            console.log("DONE");
            console.log(res.data);

        });
    }

    $http.get('/getTasks').then(function(res) {
        console.log(res.data);

    });
}]);
