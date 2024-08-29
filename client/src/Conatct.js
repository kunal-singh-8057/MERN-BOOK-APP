import React, { useState } from 'react'
import './Contact.css'
import Axios from 'axios'

const Conatct = () => {

  const[con,setcon] = useState("");
  const[em,setem] = useState("");
  const[message,setmessage] = useState("");

  const contact = ()=>{

    Axios.post("https://mern-book-app-phi.vercel.app/contact",{
      con:con,
      em:em,
      message:message
    })

    .then(()=>{
      console.log("success")
      alert("Message Send Successfully Our Team Will Contact You Soon")
    })

    .catch((err)=>{
      console.log(err)
    })
  }


  return (
<>
<div className='newcon'></div>

<div className='form2'>
<h1>Contact Us</h1>
<br></br>
<br></br>
<label>Name:</label>
<br></br>
<br></br>
<input placeholder='Enter the name here' onChange={(e)=>{setcon(e.target.value)}}></input>
<br></br>
<br></br>
<label>Email:</label>
<br></br>
<br></br>
<input placeholder='Enter the email here' onChange={(e)=>{setem(e.target.value)}}></input>
<br></br>
<br></br>
<label>Message:</label>
<br></br>
<br></br>
<textarea placeholder='Enter your message here' onChange={(e)=>{setmessage(e.target.value)}}></textarea>
<br></br>
<button onClick={contact}>Submit</button>
</div>
<h1 className='con'>Have any Doubts Contact us now</h1>
</>

  )
}

export default Conatct
