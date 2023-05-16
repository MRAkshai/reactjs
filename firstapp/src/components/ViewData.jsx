import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewData =() => {

      var[users,setUsers] =useState([])
      useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response)=>{
        console.log(response.data)
        setUsers(response.data)
      }
      )
      .catch((err)=>console.log(err))
    },[])
  return (
    <div style={{padding:"100px"}}>
        <Typography>AXIOS VIEW</Typography>
        <br />
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((value,index)=>{
                        return(
                            <TableRow key={index}>
                                <TableCell>{value.name}</TableCell>
                                <TableCell>{value.email}</TableCell>

                                

                            </TableRow>
                        )
                    }
                    )}
                </TableBody>
            </Table>
        </TableContainer>

    </div>
  )
}

export default ViewData