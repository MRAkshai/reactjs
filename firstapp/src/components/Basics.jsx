import { TextField, Typography } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button'

const Basics = () => {
  return (
    <div>
  <h1>akshay</h1>
  <br></br>
  <input type="text" placeholder='name'/>  
  <Typography variant="h3" >AKSHAY M R</Typography>
  
  <TextField label='username' variant='standard'></TextField><br></br>
  <TextField label='password' variant='standard'></TextField>
  <br></br><br></br>
  <Button color='success' variant="contained">login</Button><br></br><br></br>
  <Button variant='outlined' color='secondary'>secondary</Button>
 

  <br></br>

  </div>
  

  )
}

export default Basics