const mongoose = require("mongoose");

const bookschema = new mongoose.Schema({

    name:{

        type:String,
        required:true,
    },

    aurthor:{

        type:String,
        required:true,
    },

    descripition:{

        type:String,
        required:true,
    },

    image:{

        type:String,
        required:true,
    },

    price:{

        type:String,
        required:true,
    },
});


const bookmodels = mongoose.model("books",bookschema);
module.exports = bookmodels;




