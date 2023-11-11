const mongoose=require("mongoose")

    
    
const Courseschema=new mongoose.Schema({
   name:String,
   description:String,
   image:String,
   teacher:String,
   provider:String
})

const Course=mongoose.model('Course',Courseschema);
module.exports=Course;
