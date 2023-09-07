const mongoose=require("mongoose")
const  { Schema }=mongoose
    
    
const Courseschema=new Schema({
   name:String,
   description:String,
   image:String,
   teacher:String,
   provider:String
})

const Coursemodel=mongoose.model('Course',Courseschema);
module.exports=Coursemodel;
