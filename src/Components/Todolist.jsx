import React, { useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'

const Todolist = () => {
    const[todo,setTodo] = useState('');
    const[db,setDb]=useState([]);
    

    function dataPost(){
      axios.post(" http://localhost:3000/posts",{todo})
       .then(()=>{
        alert("data has been posted")
        
       })
       .catch(() =>{
        alert("data has not been posted")
       })
    }
    function getData(){
        axios.get(" http://localhost:3000/posts",{todo})
        .then((ref)=>{
            setDb(ref.data)
            
        })
        .catch(() =>{
            alert("the das has not been recieved")
        })

    }
    function updateData(id,data)
{
  axios.put(`http://localhost:3000/posts/${id}`,{todo:data})
  .then(()=>{
    console.put("data update");
    getData();

  })
  .catch(()=>{
    console.log("data cannot update")
  })
}

function cancelData(id,data)
{
  axios.delete(`http://localhost:3000/posts/${id}`,{todo:data})
  .then(()=>{
    console.log("data deleted");
    getData();

  })
  .catch(()=>{
    console.log("data cannot delete")
  })
}


function newData(id){
  const data =prompt ('enter the data')
  
  updateData(id,data)
}






    console.log(db)
  return (
    <div>
        <p>
            {todo}
            
        </p>
    <TextField
    

    id="outlined-basic"
    label="Todo" 
    variant="outlined"
    value={todo}
    onChange={(ref) => setTodo(ref.target.value)} /> 
    <br></br>
     
<br></br>
 <Button variant="contained" onClick={dataPost} >post</Button> 
 <Button variant="contained" onClick={getData} >get</Button> 
 <div>
  <ul>
    {
      db.map((item)=>(
        <li key={item.id}>{item.todo}<Button onClick={()=> newData(item.id)}>Edit</Button><Button onClick={()=> cancelData(item.id)}>Delete</Button></li>
      ))
    }
  </ul>


 </div>
    </div>
  )
}

export default Todolist