import { Box, Button, Card, CardActions, CardContent, CardMedia,  Grid2, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
  
const Home = () => {
  const [showFullDescription, setShowFullDescription] = useState({});

  const handleReadMore = (courseId) => {
    setShowFullDescription((prevExpanded) => ({ ...prevExpanded, [courseId]: !prevExpanded[courseId] }));
  };
const [row,setRow]=useState([])
useEffect(()=>{
  axios.get('http://localhost:4001/course')
  .then((res)=>{
    setRow(res.data);

  })
},[]);

const navigate=useNavigate()
function updateCourse(course){
  navigate('/course',{state:{course}})
}



// const row=[{
  
// "courseId":"100",
// "courseName":"FSD",
// "courseCategory":"IRP.",
// "courseDescription":"good",
// "courseDuration":4,
// "courseImage":"https://img.freepik.com/premium-vector/data-science-logo-template_567288-95.jpg?w=2000"
// },
// {
//  "courseId":"101",
// "courseName":"CSS",
// "courseCategory":"SMP",
// "courseDescription":"good",
// "courseFee":5,
// "courseImage":"https://tse4.mm.bing.net/th?id=OIP.KNtpuLuJ_nPJ9tFfAgZRBwHaD4&pid=Api&P=0&h=180https://tse4.mm.bing.net/th?id=OIP.KNtpuLuJ_nPJ9tFfAgZRBwHaD4&pid=Api&P=0&h=180"
// }, 
// {
//   "courseId":"102",
// "courseName":"BSA",
// "courseCategory":"Smp",
// "courseDescription":"good",
// "coursDuration":6,
// "courseImage":"https://i.pinimg.com/originals/64/79/b9/6479b9448caa384c54cdeceb1578b5ae.jpg"
// },

// ]


  return (
    <div>
      <Grid2 container spacing={4}  justifyContent="center" >
      {/* <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3, padding: 2 }}> */}

      {row.map((course) => (

<Grid2 item key={course.courseId} xs={8} sm={4} md={3} lg={3} sx={{marginTop:'6%'}} >
    <Card>
      <CardMedia
        sx={{ height: 100,objectFit: 'cover', width:250,  borderRadius: '10px 10px 0 0'}} 
        image={course.courseImage}
        title={course.courseName}
      />
      <CardContent sx={{padding:3}}>
        <Typography gutterBottom variant="h5" component="div">
          {course.courseId}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {course.courseName}
        </Typography>
        {/* <Typography variant="body2" sx={{ color: 'text.secondary',marginBottom: 1 }}>
        {showFullDescription[course.courseId]
                    ? course.courseDescription
                    : course.courseDescription.substring(0, 40) + '...'} <br />
                  <span onClick={() => handleReadMore(course.courseId)} style={{ cursor: 'pointer', color: 'green' }}>
                    {showFullDescription[course.courseId] ? 'Read Less' : 'Read More'}
                  </span>

    </Typography> */}
    <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: 1 }}>
  {showFullDescription[course.courseId]
    ? course.courseDescription || "Description not available"
    : (course.courseDescription ? course.courseDescription.substring(0, 40) + '...' : "Description not available")} <br />
  <span onClick={() => handleReadMore(course.courseId)} style={{ cursor: 'pointer', color: 'green' }}>
    {showFullDescription[course.courseId] ? 'Read Less' : 'Read More'}
  </span>
</Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary',marginBottom: 1 }}>
        {course.courseCategory}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary',marginBottom: 1}}>
            {course.courseFee}
        </Typography>
        {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {course.courseImage}
        </Typography> */}
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
        <Button size="small" variant="contained" color="primary" onClick={()=>{updateCourse(course)}}>edit</Button>
        <Button size="small" variant="contained" color="primary">delete</Button>
    

      </CardActions>
    </Card>
    </Grid2>
     ))}
    
     
     </Grid2>

     </div>
 
  )
}

export default Home