import { TextField,Button} from '@mui/material'
import React, { useState } from 'react'

export const Example1 = () => {
    var[val,setVal] = useState( {id:'',age:'',add:''});
    const inputHandler =(e) =>{
        const{name,value}= e.target
       setVal((val)=>({...val,[name]:value}))
    } 

  return (
    <div>
        <br></br>
        <TextField label='id' name='id' value={val.id} onChange={inputHandler}/>
        <br></br>
        
        <br></br>
        <TextField label='age' name='age' value={val.age} onChange={inputHandler}/>
        <br></br>
        {val.id}
        <br></br>
        {val.age}
        <br></br>
        <TextField label='address' name='add' value={val.add} onChange={inputHandler}/>
        <br></br>
        {val.add}

        <br></br>
        <Button  variant='contained' >login</Button>

        

    </div>
  )
}
