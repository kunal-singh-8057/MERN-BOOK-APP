import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Axios from 'axios'
import img2 from './Assets/img1.webp'
import './Read.css'

const Read = () => {

    const[name,setname] = useState("");
    const[price,setprice] = useState("");
    const[address,setaddress] = useState("");

    const navigate = useNavigate();

    const buy = ()=>{
        Axios.post("https://mern-book-app-phi.vercel.app/order",{
            name:name,
            price:price,
            address:address
        })

        .then((res)=>{
            console.log(res)
            alert("order placed successfully")
            navigate("/viewbooks")
        })

        .catch((err)=>{
            console.log(err)
        })
    }
  return (
  <>
   <div className='form1'>
<img src={img2} className='img2'></img>
<h1>Order</h1>
   <br></br>
  <label>Name:</label>
  <br></br>
  <input placeholder='Enter the email here' onChange={(e)=>{setname(e.target.value)}}></input>
  <br></br>
  <label>Price:</label>
  <br></br>
  <input placeholder='Enter the password here' onChange={(e)=>{setprice(e.target.value)}}></input>
  <br></br>
  <label>Address:</label>
  <br></br>
  <input placeholder='Enter the Address here' onChange={(e)=>{setaddress(e.target.value)}}></input>
  <br></br>
  <br></br>
  <button onClick={buy}>Buy</button>
  <br></br>
  <br></br>
</div>
  </>
  )
}

export default Read

