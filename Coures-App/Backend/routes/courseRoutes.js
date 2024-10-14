const express=require('express');
const router=express.Router();
const courseModel=require('../model/courseData');
router.use(express.json());
router.use(express.urlencoded({extended:true}));
//GET OPERATIONS
router.get('/',async (req,res)=>{
    try {
        const data=await courseModel.find();
        res.status(200).send(data);
    } catch (error) {
       res.status(404).send('Data not found');
    }
    
})
//post operation
router.post('/addCourse',async(req,res)=>{
    try {
        var item=req.body;
        const data1=new courseModel(item);
        const saveddata=await data1.save();
        res.status(200).send('Post successful');
    } catch (error) {
res.status(404).send('Post unsuccessful');
        
    }
})
//Update Operation
router.put('/edit/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const data=await courseModel.findByIdAndUpdate(id,req.body)
        res.status(200).send('Update Successful')
    } catch (error) {
        res.status(404).send('Update Unsuccessful')
    }
})
//Delete Operation
router.delete('/delete/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const data=await courseModel.findByIdAndDelete(id)
        res.status(200).send('Delete Successfully')
    } catch (error) {
        res.status(404).send('Delete Unsucessfully')
    }
})

module.exports=router;