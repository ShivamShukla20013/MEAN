
const express = require('express'); 
const router = express.Router();

var ObjectId = require('mongoose').Types.ObjectId;

var {Member} = require('../models/MemberModel');

router.get('/',(req,res)=> {
    Member.find((err,docs)=> {
        if(err) throw err;
        console.log(docs);
        res.send(docs);
    }); 
});

router.post('/',(req,res)=> {
    var MemberRecord = new Member({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        ContactNo: req.body.ContactNo,
        EmailId: req.body.EmailId,
        Password: req.body.Password,
        Gender: req.body.Gender,
        Status: req.body.Status,
    });

    MemberRecord.save((err,docs)=> {
        if (err) throw err;
        console.log('Data Inserted.');
    });
});

module.exports=router;