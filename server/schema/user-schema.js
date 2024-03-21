const mongoose = require("mongoose")

const mongodb = mongoose.Schema({
    name:{
        type:String
    },
    username:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    phonenumber:{
        type:String
    }
});

const mongoconnection = mongoose.model('user',mongodb);

module.exports = {mongoconnection,mongodb};
