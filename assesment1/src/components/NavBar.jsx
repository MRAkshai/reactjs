import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
         <AppBar position="static" color="secondary" enableColorOnDark position="static">
         <Toolbar variant="dense">
    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
      
    </IconButton>
    <Typography variant="h6" color="inherit" component="div">
      
    </Typography>
                <Typography sx={{Flexgrow:1}} align='left'>BLOG DASHBOARD</Typography>
                 <Button><Link to={'/home'}style={{color:'white'}}>HOME</Link></Button>

                 <Button><Link to={'/addblog'}style={{color:'white'}}>ADD BLOG</Link></Button>
                 

            </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar