const express= require('express');
const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

const createToken = (_id) =>{
    return jwt.sign({_id,}, process.env.SECRET, {expiresIn: '5d'})
}

// Login Route-

router.post('/login',async(req,res)=>{

    const {email,password}=req.body

    try {
        const user = await userModel.login(email,password);

        // Creating a token -
        const token = createToken(user._id);

        res.status(200).json({email,token})
    } catch (error) {
        res.status(400).json({error: error.message});
    }

})

//SignUp Route-

router.post('/signup',async(req,res)=>{

    const {name,email,password}=req.body

    try {
        const user = await userModel.signup(name,email,password);

        // Creating a token -
        const token = createToken(user._id);
        console.log(token)

        res.status(200).json({name,email, token})
    } catch (error) {
        res.status(400).json({error: error.message});
    }
})


module.exports = router;