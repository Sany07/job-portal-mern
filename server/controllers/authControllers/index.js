const User = require('../../models/userModel')
const asyncHandler = require('express-async-handler')
const generateJwtToken = require('../../utilities/generateJwtToken')
const { errorHandler } = require('../../middlewares/errorMiddleware')

const loginUser = asyncHandler(async(req, res, next)=>{


    const { emailOrUsername, password } = req.body;

    const user = await User.findOne({
        $or: [{ email: emailOrUsername }, { userName: emailOrUsername }]
    }).select("+password");

    if (!user) {
        throw new Error("User doesn't exist", 401);
    }
    const isUser = await user.comparePassword(password);

    if (!isUser) {
        throw new Error("Password doesn't match", 401);
    }

    if(isUser) {
        res.status(201).json({
        message: 'Logged in Successful',
        user:{
            _id: isUser.id,
            name: isUser.userName,
            email: isUser.email,
        }
        })
    }
  })



// @desc Register Controller
const registerUser = asyncHandler(async(req, res, next)=>{
    
    const { userName, email, password, isRecruiter} = req.body

    if (!userName || !email || !password) {
        throw new Error('Please fill all fields', res.status(400))
    }
    const isUserExist = await User.findOne({
        $or: [{ email }, { userName }]
    });
    if (isUserExist) {
        if (isUserExist.userName === userName) {
            throw new Error("Username already exists", res.status(400));
        }
        throw new Error("Email already exists", res.status(401));
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
        user:{
                   _id: user.id,
        name: user.userName,
        email: user.email,
        token: generateJwtToken(user._id,email), 
        }

        })
    }else {
        
        throw new Error('Registration Failed',res.status(400))
    }
    
})


module.exports ={
    registerUser, loginUser
}