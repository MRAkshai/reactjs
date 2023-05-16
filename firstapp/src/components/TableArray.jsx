import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'

function TableArray() {
  var[names,setNames]= useState(['akshay','kp',])
  return (
    <div>
        <Typography variant='h3'>Table and Array</Typography>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                     <TableCell style={{color:'red'}}><h1>Name</h1></TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                  {
                    names.map((value,index) =>{
                      return(
                        <TableRow key={index}>
                          <TableCell>{value}</TableCell>
                        </TableRow>
                      )

                    }
                    )
                  }
                </TableBody>
            </Table>
        </TableContainer>

    </div>
  )
}

export default TableArray