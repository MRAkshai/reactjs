import { Button,Typography } from "@mui/material";
import React, { useState } from 'react'

function stateBasics = ()=> {
    var[pname,setPname ]= useState("class");
    const changeName =(){
        console.log("clicked");
        setPname(change)
    }
  return (
    <div>
    <Typography variant='h1'>welcome</Typography>
    </div>
    

  )
}

export default stateBasics