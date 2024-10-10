import React from 'react'
import './StateHandle.css';
import ImageIcon from '@mui/icons-material/Image';
import Img from './nature.jpg'
const StateHandle = () => {
    function message() {
        //alert("This is nature pic")
        open('https://en.wikipedia.org/wiki/Nature')
    }
  return (
    <div>
        <span onMouseOver={message}>
             <ImageIcon></ImageIcon>
        </span>
        &nbsp;
        <hr></hr>
        <span onClick={message} >
          <img src={Img} alt="nature" />
        </span>
        &nbsp;
        <hr></hr>
        <center><button onClick={message}>
            Open site
       </button></center>
        <hr></hr>
        <p></p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/qz0aGYrrlhU?si=m8KdDVRHggWep0Bo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
       
    </div>
  )
}

export default StateHandle