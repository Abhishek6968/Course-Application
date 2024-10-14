import { Box, Button, duration, TextField } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import {  useLocation, useNavigate } from "react-router-dom"


const course = () => {
    const [course,setCourse]=useState({
      courseId:'',
      courseName:'',
      courseDescription:'',
      courseCategory:'',
      courseDuration:'',
    })
    const fetchValue=(e) => {
      // console.log(e)
      setCourse({...course,[e.target.name]:e.target.value})
    }
    // const sentData=()=>{
    //   console.log(course)

    // }
    const navigate= useNavigate()
    const location=useLocation()
    let sendData=()=>{
      if (location.state!=null) {
        axios.put('http://localhost:4001/course/edit/'+location.state.course._id,course).then((res)=>{
          alert('Data updated');
          navigate('/')
        }).catch((error)=>{
          console.log(error);
        })
      }
    
    
    else{
      axios.post('http://localhost:4001/course/addcourse/',course).then((res)=>{
        navigate('/')
      }).catch((error)=>{
        console.log(error)
      })
    
    }
  }
    useEffect(()=>{
      if(location.state!=null){
        setCourse({...course,
          courseId:location.state.course.courseId,
          courseName:location.state.course.courseName,
          courseCategory:location.state.course.courseCategory,
          courseDescription:location.state.course.courseDescription,
          courseDuration:location.state.course.courseDuration,
         
    
        })
      }
    },[])


    return (<div>
       <h2>LEARN...LEARN...LEARN</h2>
       <Box
      
        component="form"
        sx={{ border: '1px solid #fffff', 
          borderColor: 'BLACK',
          backgroundColor:'#f0f0f0', 
        //    borderWidth: '0.3px',
          borderStyle: 'solid' 
        }}
         
        // sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
        >
      <TextField id="standard-basic"
       label="courseId"
        variant="standard"
        name='courseId'
         value={course.courseId}
        onChange={fetchValue} /><br />
  
      <TextField id="standard-basic"
       label="courseName"
        variant="standard"
        name='courseName'
        value={course.courseName}
        onChange={fetchValue}/><br />
  
      <TextField id="standard-basic"
       label="courseDescription"
        variant="standard"
        name='courseDescription' 
        value={course.courseDescription}
        onChange={fetchValue}/><br />
  
      <TextField id="standard-basic"
       label="courseCategory"
        variant="standard"
        name='courseCategory' 
        value={course.courseCategory}
        onChange={fetchValue}/><br />
  
      <TextField id="standard-basic"
       label="courseDuration"
        variant="standard"
        name='courseDuration'
        value={course.courseDuration}
        onChange={fetchValue}/><br />
      <br /><br />
                  <Button variant="contained" onClick={sendData}>Submit</Button>
                  </Box>
      </div>
  
   )
  } 
  
  export default course