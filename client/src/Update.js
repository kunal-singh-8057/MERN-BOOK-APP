import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Axios from 'axios'
import './Update.css'

const Update = () => {

  const {id} = useParams();
  const[values,setvalues] = useState({
    id: id,
    name:'',
    aurthor:'',
    descripition:'',
    image:'',
    price:''
  })

 

  useEffect(()=>{
    Axios.get("https://mern-book-app-phi.vercel.app/viewbooksbyid/"+id)
    .then(res=>{
      setvalues({...values, name: res.data.name, aurthor: res.data.aurthor,descripition: res.data.descripition,image: res.data.image,price: res.data.price})
})
  },[])

  const navigate = useNavigate()

  const update = ()=>{
    Axios.put("https://mern-book-app-phi.vercel.app/updatebooksbyid/"+id,values)
    alert("Data updated successfully")
    navigate("/dashboard")
    }

  return (
  <>
<div className='back8'></div>
<form onSubmit={update}>
<div className='form5' >
<label>Name:</label>
<br></br>
<input placeholder='Enter the bookname here' value = {values.name} onChange={e=> setvalues({...values, name:e.target.value})}></input>
<br></br>
<label>Aurthor:</label>
<br></br>
<input placeholder='Enter the Aurthor here'e value={values.aurthor} onChange={e=> setvalues({...values, aurthor:e.target.value})}></input>
<br></br>
<label>Descripition:</label>
<br></br>
<input placeholder='Enter the Descripition here' value={values.descripition} onChange={e=> setvalues({...values, descripition:e.target.value})}></input>
<br></br>
<label>Image:</label>
<br></br>
<input placeholder='Enter the Image URL here' value={values.image} onChange={e=> setvalues({...values, image:e.target.value})}></input>
<br></br>
<label>Price:</label>
<br></br>
<input placeholder='Enter the Price here' value={values.price} onChange={e=> setvalues({...values, price:e.target.value})}></input>
<br></br>
<button>Update BOOK Data</button>
</div>
</form>
  </>
  )
}

export default Update
