const mongoose = require("mongoose");

const userschema = new mongoose.Schema({

    user:{
        type:String,
        required:false
    },

    email:{
        type:String,
        required:false
    },

    password:{
        type:String,
        required:false
    },
})

const usermodels = mongoose.model("users",userschema);
module.exports = usermodels;