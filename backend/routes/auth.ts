import  User from '../db/User';
import express from 'express';
const router = express.Router();
import  bcrypt from 'bcryptjs';
const bcryptSalt=10;
import jwt from "jsonwebtoken";
const secretKey = "Anubhavbjpneta";
router.post('/Signup', async (req, res) => {
    const {name,email,password}=req.body;
    if (!email || !password ||!name) {
      return res.sendStatus(400);
    }
    console.log(req.body);
       try {
       await User.create({
          name,
          email,
          password:bcrypt.hashSync(password,bcryptSalt)
        });

        console.log("user doc created")
        const token = jwt.sign({email}, secretKey,{expiresIn:"1h"})
        return res.json({"Message":"User crearted",token,name});
      } catch (err) {
        console.error(err);
      }
    })
  
  router.post('/Login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.sendStatus(400);
    }
    const existingUser = await User.findOne({email});
    if (!existingUser) {
      return res.sendStatus(400);
    }
    const name=existingUser.name;
    if(!name)
    {
      return res.status(500).json({message:'No Name Found'});
    }
    console.log(name);
    const token = jwt.sign({email}, secretKey,{expiresIn:"1h"})
    res.json({"message":"User Logged in",token,name});
  });

  module.exports=router;