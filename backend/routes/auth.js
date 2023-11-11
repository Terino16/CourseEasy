const User =require('../db/User');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const bcryptSalt=10;
const  {jwttoken}  =require ('../middlewares');
router.post('/Signup', async (req, res) => {
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
  
  router.post('/Login', async (req, res) => {
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

  module.exports=router;