import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Navigator() {
  return (
    <div >
             <AppBar>
            <Toolbar>
            <Typography sx={{Flexgrow:1}} align='left'>Trialapp</Typography>
                 
                 <Button><Link to={'/table'}style={{color:'red'}}>View</Link></Button>

                 
                 <Button><Link to ={'/axios'}style={{color:'red'}}>Add</Link></Button>

            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navigator