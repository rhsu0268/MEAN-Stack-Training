var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
    Task: String,
    DueDate: String

});

mongoose.model('Task', TaskSchema);
