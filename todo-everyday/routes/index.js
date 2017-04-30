var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var Task = mongoose.model('Task');
var EverydayTask = mongoose.model('EverydayTask');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/saveTask/:task', function(req, res, next) {

    var newTask = JSON.parse(req.params.task);

    var task = new Task();
    task.save(function(err, task) {
        if (err)
        {
            return next(err);
        }
        res.json(task);

    });

});

router.get('/getTasks', function(req, res, next) {

    Task.find(function(err, tasks) {

        if (err)
        {
            return next(err);
        }
        res.json(tasks);

    });

});

router.get('/everydayTasks', function(req, res, next) {

    res.render('everydayTasks', { title: 'Express' });

});





router.post('/createEverydayTask', function(req, res, next) {

    console.log(req.body);

    //var taskName = req.body.data;
    //console.log(taskName);
    var task = new EverydayTask(req.body);

    //console.log(task);
    task.save(function(err, data) {
        if (err)
        {
            return next(err);
        }

        res.json(data);
    });



});


router.get('/getEverydayTasks', function(req, res, next) {

    EverydayTask.find(function(err, tasks) {

        if (err)
        {
            return next(err);
        }
        res.json(tasks);

    });

});


router.post('/updateEverydayTask', function(req, res, next) {

    console.log(req.body);

    EverydayTask.findOne({ TaskName: req.body.TaskName }, function(err, task) {
       //console.log(piece);
       console.log(task);

       task.TaskName = req.body.UpdatedTask;
       task.save();


   });


});

router.post('/deleteEverydayTask', function(req, res, next) {

    console.log(req.body);

    console.log(req.body.TaskName)
    EverydayTask.findOne({ TaskName: req.body.TaskName }, function(err, task) {
       //console.log(piece);
       console.log(task);

       //task.TaskName = req.body.UpdatedTask;
       task.remove();


   });


});

module.exports = router;
