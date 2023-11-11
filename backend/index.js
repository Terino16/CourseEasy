const express = require('express');
const app = express();
const cookieParser = require('cookie-parser'); // Import cookie-parser
const cors=require('cors');
const mongoose = require('mongoose');
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
require('dotenv').config()
const userroutes=require("./routes/auth");
const courseroutes=require("./routes/courses");
app.use(cors());
const port = 3001
mongoose.connect(process.env.MONGODB_URL).then(()=>console.log("DB"));
app.use("/courses",courseroutes);
app.use("/user",userroutes);




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



