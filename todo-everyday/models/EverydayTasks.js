var mongoose = require('mongoose');

var EverydayTaskSchema = new mongoose.Schema({
    TaskName: String

});

mongoose.model('EverydayTask', EverydayTaskSchema);
