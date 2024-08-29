require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT ;
const app = express();
const mongoose = require("mongoose");
const bookmodels = require("./Models/user");
const MOGODB_URL = process.env.MOGODB_URI;
const bodyparser = require("body-parser");
const usermodels = require("./Models/books");
const contactmodels = require("./Models/contact");
const ordermodel = require("./Models/order");
const cors = require("cors");

app.use(cors());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.json());

mongoose.connect(MOGODB_URL).then(()=>{
    console.log("Database connected successfully")
}).catch(()=>{
    console.log("Database connection failed")
})

//METHOD TO GET HELLO
app.get("/",(req,res)=>{
    res.json("Hello")
})

// Method to create the books
app.post("/createbooks",async(req,res)=>{
    const que = await bookmodels.create(req.body)

    res.status(200).json({
        success:true,
        que
    })
})


// Method to find the books
app.get("/getbooks",async(req,res)=>{
     await bookmodels.find()
     .then(users => res.json(users))
     .catch(error=> res.json(error))
})



//Method to find books by id 
app.get("/viewbooksbyid/:id",async(req,res)=>{
    const id = req.params.id
      bookmodels.findById(id)
     .then(res=>res.json(res))
     .catch(err=>res.json(err))  
    })

//Method to upadte the books
app.put("/updatebooksbyid/:id",async(req,res)=>{

    const{name,aurthor,descripition,image,price} = req.body
    const id = req.params.id
     await bookmodels.findByIdAndUpdate(id,{
        name,
        aurthor,
        descripition,
        image,
        price
    })

   .then(res=>res.json(res))
   .catch(err=>res.json(err))
})

//Methods to delete the books by id
app.delete("/deletebooksbyid/:id",async(req,res)=>{
    
    const id = req.params.id
     bookmodels.findByIdAndDelete({_id: id})
    .then(res=>res.json(res))
    .catch(err=> res.json(err))
})

//Method to add new users
app.post("/addusers",async(req,res)=>{
    const add = await usermodels.create(req.body)

    res.status(200).json({
        success:true,
        add
    })
})

//Method to login old user
app.post("/login",async(req,res)=>{

    const{email,password} = req.body;

     await usermodels.findOne({email:email})

    .then(user=>{
        if(user){

            if(user.password === password){
                res.json("success")
            }else{
               res.json("err") 
            }
        }else{
            res.json("user not existed")
        }
    })
})

//Methos to login the admine
app.post("/admine",async(req,res)=>{

    const password = '123456789'
    const{email} = req.body
    await usermodels.findOne({email:email})
    .then(user=>{

        if(user){

            if(user.password === password){
                res.json("admine")
            }else{
                res.json("Wrong password")
            }
        }else{
            res.json("Admine not existed")
        }
    })
})

//Methods to store the contact data
app.post("/contact",async(req,res)=>{
    const hey = await contactmodels.create(req.body)

    res.status(200).json({
        success:true,
        hey
    })
})

//Methods to place orders
app.post("/order",async(req,res)=>{
    const cre = ordermodel.create(req.body)

    res.status(200).json({
        success:true,
        cre
    })
})

app.listen(PORT,()=>{
    console.log(`The server is working at : http://localhost:${PORT}`);
})
