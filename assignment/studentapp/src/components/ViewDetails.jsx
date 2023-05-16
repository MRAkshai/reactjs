import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'


  
  
    
    function ViewDetails() {
      var[students,setStudents]=useState([]);
      var[update,setUpdate]=useState(false);
      var[singlevalue,setSingleValue] = useState([]);
    
      useEffect(()=>{
        axios.get('http://localhost:3005/view')
        .then(response=>{
          console.log("response:",response.data)
          setStudents(students=response.data)
        })
    },[])

    const updateValue = (value)=>{
      setSingleValue(value);
      setUpdate(true); 
    }
      const deleteValues = (id)=>{
        console.log("delete clicked"+id)
        axios.delete("http://localhost:3005/delete/"+id)
        .then((response)=>{
          console.log(response.idvalue)
          alert("Deleted");
          window.location.reload(false)
        })
      }
      return (
        <div>
          
          <Typography variant="h3">STUDENT DETAILS</Typography>
          var finalJSX=<TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Grade</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {students.map((value,index)=>{
                  return(
                    <TableRow key={index}>
                      <TableCell>{value.sname}</TableCell>
                      <TableCell>{value.sgrade}</TableCell>
                      <TableCell>
                        <Button onClick={()=>{deleteValues(value._id)}}>Delete</Button>
                        <Button onClick={()=>updateValue(value)}>UPDATE</Button>

                      </TableCell>
                      
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <br></br>
  
        </div>
      )
    }
    
    export default ViewDetails