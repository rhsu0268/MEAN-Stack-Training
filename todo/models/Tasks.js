var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
    Task: String

});

mongoose.model('Task', TaskSchema);
