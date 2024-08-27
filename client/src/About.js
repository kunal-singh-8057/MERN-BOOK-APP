import React from 'react'
import img3 from './Assets/img5.jpeg'
import img4 from './Assets/img6.png'
import './About.css'

const About = () => {
  return (
<>
<div className='back5'></div>
<h1 className='hu'>About Us</h1>

<div className='div2'>
<img src={img4} className='img4'></img>
<p className='par'>
The Wizard readings website is a vibrant online destination for book lovers, offering a vast selection of titles across all genres. 
It provides a user-friendly interface where visitors can easily search for books, read reviews, 
and discover recommendations tailored to their tastes.
</p>
</div>
</>
  )
}

export default About

