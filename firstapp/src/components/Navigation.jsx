import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div>

       <AppBar>
            <Toolbr>
                <Typography sx={{Flexgrow:1}} align='left'>Trialapp</Typography>
                 <Button><Link to={'/table'}style={{color:'white'}}>Table</Link></Button>

                 <Button><Link to={'/'}style={{color:'white'}}>State</Link></Button>
                 <Button><Link to ={'/axios'}style={{color:'white'}}>AXIOS</Link></Button>

            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navigation