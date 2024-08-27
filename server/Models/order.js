const mongoose = require("mongoose");

const orderschema = mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },

    price:{
        type:String,
        required:true
    },

    address:{
        type:String,
        required:true
    },
})

const ordermodel = mongoose.model("order",orderschema)
module.exports = ordermodel