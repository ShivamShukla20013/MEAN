const mongoose = require('mongoose');   
const url = "mongodb://localhost:27017/CrudDB";

mongoose.connect(url, (err,db)=> {
    if (err) {
        throw err;
    }
    console.log('Database Connected Succesfully.')
});

module.exports=mongoose;