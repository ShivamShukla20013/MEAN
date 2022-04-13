const mongoose = require('mongoose');

var Member = mongoose.model("Member",{
    FirstName: {type:String},
    LastName: {type:String},
    ContactNo: {type:String},
    EmailID: {type:String},
    Password: {type:String},
    Gender: {type:String},
    Status: {type:String},
},"Member");

module.exports={Member}