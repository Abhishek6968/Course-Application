const mongoose=require("mongoose");
//create the schema
const courseSchema=mongoose.Schema({
    
    courseId:String,
    courseName:String,  
    courseCategory:String,
    courseDescripition:String,
    courseDuration:String,
    courseImage:String,

})
const courseData=mongoose.model('courses',courseSchema);
module.exports=courseData;