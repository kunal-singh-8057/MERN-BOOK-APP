

const mongoose = require("mongoose");


const contactschema = mongoose.Schema({

    con:{
        
        type:String,
        required:true
    },

    em:{
        
        type:String,
        required:true
    },

    message:{
        
        type:String,
        required:true
    },
})

const contactmodels = mongoose.model("contact",contactschema);
module.exports = contactmodels;
