/*import React, { useState } from 'react'

const StateHandlingusestate = () => {
    const [like, setLike] = useState(0)
     function increment() {
        setLike(like +1) //1001
     }
     function decrement() {
       if (like > 0)
       {
        setLike(like -1)
       }
     }
    return (
    <div>
        <p>{like}</p>
        <button onClick={increment}>Like</button>
        <button onClick={decrement}>Dislike</button>
    </div>
  )
}

export default StateHandlingusestate */



/*import React, { useState } from 'react'

const StateHandlingusestate = () => {
    const [like,setLike]= useState("Hii,welcome ")
    function word() {
        setLike("karthickpriya")
   }
  function old() {
       setLike("Hii ")
    }
 return (
    <div onMouseEnter={word} onMouseLeave={old}>{like}</div>
  )
}

export default StateHandlingusestate */



import React, { useState } from 'react'
import Img from './nature.jpg'
import Luffy from './nat.jpg'

const StateHandlingusestate = () => {
   
    const [image, setImage] = useState(Img)
    const changer = function(){
        setImage(Luffy)
    }
  return (
    <div>
        <img src={image} alt="Imahe" onMouseEnter={changer} />
    </div>
  )
}

export default StateHandlingusestate