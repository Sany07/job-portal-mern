

const express = require("express");
const {register} = require('./auth/authRoutes')

const router = express.Router();

// router.post("/login",loginUser);

router.post("/register", registerUser);

module.exports = router;

module.exports ={
    register
}