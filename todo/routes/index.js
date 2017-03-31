var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var Task = mongoose.model('Task');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/saveTask/:taskName', function(req, res, next) {

    console.log(req.params.taskName);
    //console.log(req.body);

    var task = new Task();
    task.Task = req.params.taskName;
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

module.exports = router;
