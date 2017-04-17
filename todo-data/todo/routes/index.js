var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var Task = mongoose.model('Task');

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

module.exports = router;
