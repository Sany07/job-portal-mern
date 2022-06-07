const User = require('../../models/userModel')
const asyncHandler = require('express-async-handler')
const generateJwtToken = require('../../utilities/generateJwtToken')

const loginUser = asyncHandler(async(req, res)=>{
    res.send('Hello World')
  })

// @desc Register Controller
const registerUser = asyncHandler(async(req, res)=>{
    
    const { userName, email, password, isRecruiter} = req.body

    if (!userName || !email || !password) {
        throw new Error('Please add all fields', res.status(400))
    }
    const isUserNameExist = await User.findOne({ userName });

    if (isUserNameExist) {
        throw new Error('Username already exists', res.status(400))
    }
    const isEmailExist = await User.findOne({ email });
    if (isEmailExist) {
        throw new Error('Email already exists', res.status(400))
    }
    if(isRecruiter){
        role = 'recruiter'
    }
    const user = await User.create({
        userName,
        email,
        password,
    })
    
    if(user) {
        res.status(201).json({
        message: 'Account Registered successfully',
        _id: user.id,
        name: user.userName,
        email: user.email,
        token: generateJwtToken(user._id,email),
        })
    }else {
        
        throw new Error('Registration Failed',res.status(400))
    }
    
})


module.exports ={
    registerUser, loginUser
}