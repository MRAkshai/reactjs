import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'



const EnterDetails =(props) => {
    var[inputs,setInputs] = useState({sname:'',sgrade:''})

    const inputHandler = (e)=>{
        const{name,value} = e.target
        setInputs((inputs)=>({...inputs,[name]:value}))

    }
    const readValues = ()=>{
      console.log("Clicked")
      console.log("inputs:",inputs);
      axios.post("http://localhost:3005/create",inputs)
      .then((response)=>{
        alert("success")
      })
      .catch(err=>console.log(err))
    }
    if(props.method==="put"){
      axios.put("http://localhost:3005/update/"+inputs._id,inputs)
      .then((response)=>{
        console.log("put:"+response.data);
        alert("updated");
        window.location.reload(false)
      })
      .catch((err)=>{console.log(err)})
    }
    
    
  return (
    <div>
        <Typography variat='h3'>Enter student details</Typography>
        <br></br>
        <TextField label='enter name' name='sname' value={inputs.sname} onChange={inputHandler} variant='outlined'/>
        <br></br>
        <TextField label='enter grade' name='sgrade' value={inputs.sgrade} onChange={inputHandler} variant='outlined'/>
        <br></br>
        <Button variant='contained' onClick={readValues}>submit</Button>
        <br></br>



    </div>
  )
}

export default EnterDetails