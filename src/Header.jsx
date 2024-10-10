import React from 'react'
import './Header.css'
import Img from './nature.jpg'
const Header = () => {
  return (
    <div className="first">
     <center> <h1>INSTAGRAM</h1></center>  
     <hr></hr>
     <center> <img src={Img} alt="image"></img> </center>  
     <hr></hr>
     
    <p>Nature is an inherent character or constitution, particularly of the ecosphere or the universe as a whole.
         In this general sense nature refers to the laws, elements and phenomena of the physical world, including life.
         Although humans are part of nature, human activity or humans as a whole are often described as at times at odds, or outright separate and even superior to nature.</p>
      <hr></hr>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/qz0aGYrrlhU?si=m8KdDVRHggWep0Bo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       <center><a href="https://www.nature.com/">nature</a></center>
       <hr></hr>
     
       <center><h4>1234567890</h4></center>
    </div>
  )
}

export default Header;