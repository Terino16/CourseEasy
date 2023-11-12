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
        const userdoc = await User.create({
          name,
          email,
          password:bcrypt.hashSync(password,bcryptSalt)
        });

        console.log("user doc created")
        const token = jwt.sign({email}, secretKey,{expiresIn:"1h"})
        console.log("token bn gaya");
        console.log('User created:', userdoc);
        return res.cookie('token',token).json({"Message":"User crearted"});
      } catch (err) {
        console.error(err);
      }
    })
  
  router.post('/Login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.sendStatus(400);
    }
    console.log(email);
    const existingUser = await User.findOne({email});
    if (existingUser) {
      return res.sendStatus(400);
    }
    console.log(existingUser);
    const token = jwt.sign(email, secretKey, { expiresIn:"1h" })
    res.cookie('token',token).json({"message":"User Logged in"});
  });

  module.exports=router;