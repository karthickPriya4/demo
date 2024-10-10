import React from "react";
//Arrow function
const Welcome = () => {
    return (
        <div style={{background:'black', color:'white', height: '100px', width: '100px'}}>
           <p>
             Hii, welcome to full stack class
             <marquee behavior="slide" direction="right">hii</marquee>
           </p>
        </div>
    )
}
export default Welcome;