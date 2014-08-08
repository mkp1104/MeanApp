var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FormDataSchema = new Schema({
    userName: String,
    userProjectName:String,
    userPracticeArea:String
});

module.exports = mongoose.model('UserFormDataModel', FormDataSchema);