const express = require('express')
const app = express()
const cookieParser = require('cookie-parser'); // Import cookie-parser
const cors=require('cors');
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser()); // Use cookie-parser middleware

const bcrypt = require('bcrypt');
require('dotenv').config()
const User=require('./models/User')
const Course=require('./models/Courses')
app.use(cors({
  credentials:true,
  origin:'http://localhost:3000'
}));
const port = 3001
const secretKey = "Anubhavbjpneta";
const expiresIn = "1h";

const jwttoken = (req, res) => {
  const username = { username: req.headers.username };
  const token = jwt.sign(username, secretKey, { expiresIn });
  return token;
};

const authenticate = (req, res, next) => {
  const authorization = req.cookies.token
  if (!authorization) {
    return res.status(403).send({ message: "No Token Provided" });
  } else {
    jwt.verify(authorization, secretKey, (err, user) => {
      if (err) {
        return err;
      }
      req.user = user;
      next();
    });
  }
};


 mongoose.connect(process.env.MONGODB_URL)

const bcryptSalt=bcrypt.genSaltSync(10);

app.post('/Signup', async (req, res) => {
  const {name,email,password}=req.body;
     try {
      const userdoc = await User.create({
        name,
        email,
        password:bcrypt.hashSync(password,bcryptSalt)
      });
      var usertoken=jwttoken(req,res);
      console.log('User created:', userdoc);
      res.cookie('token',usertoken).json(userdoc)
    } catch (err) {
      console.error(err);
    }
   
  })

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }
    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ message: 'Invalid password' });
    }
    var usertoken=jwttoken(req,res);
    res.cookie('token',usertoken).json(user)
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.get('/Courses',async(req,res)=>{
 const course=await Course.find();
 if(!course)
 res.json({message:"Error finding any course"})
return res.json(course);
})

app.get('/Courses/:id', async (req, res) => {
  const courseId = req.params.id; // Get the course ID from the URL params
  try {
    const course = await Course.findById(courseId); // Use findById to find a course by ID

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    return res.json(course);
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



