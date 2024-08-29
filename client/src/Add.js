import React, { useState } from 'react'
import Axios from 'axios'
import Addbooks from './Addbooks.css'

const Add = () => {

  const[name,setname] = useState("");
  const[aurthor,setaurthor] = useState("");
  const[descripition,setdescripition] = useState("");
  const[image,setimage] = useState("");
  const[price,setprice] = useState("");

  const cre = ()=>{
    Axios.post("https://mern-book-app-phi.vercel.app/createbooks",{
      name:name,
      aurthor:aurthor,
      descripition:descripition,
      image:image,
      price:price
    })

    .then(()=>{
      alert("New Book Added successfully")
    })

    .catch((err)=>{
      console.log(err)
    })
  }
  return (
  <>
  <div className='back11'></div>
<div className='form5'>
<label>Name:</label>
<br></br>
<input placeholder='Enter the bookname here' onChange={(e)=>{setname(e.target.value)}}></input>
<br></br>
<label>Aurthor:</label>
<br></br>
<input placeholder='Enter the Aurthor here' onChange={(e)=>{setaurthor(e.target.value)}}></input>
<br></br>
<label>Descripition:</label>
<br></br>
<input placeholder='Enter the Descripition here' onChange={(e)=>{setdescripition(e.target.value)}}></input>
<br></br>
<label>Image:</label>
<br></br>
<input placeholder='Enter the Image URL here' onChange={(e)=>{setimage(e.target.value)}}></input>
<br></br>
<label>Price:</label>
<br></br>
<input placeholder='Enter the Price here' onChange={(e)=>{setprice(e.target.value)}}></input>
<br></br>
<button className='Create-book' onClick={cre}>Craete Book</button>
</div>
  </>
  )
}

export default Add
