const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
var validator = require('validator');


const PostSchema = mongoose.Schema({
    title:{
        type: String,
        trim: true,
        maxLength: [150, 'Your title cannot exceed 150 characters']
    },    
    description:{
        type: String,
        trim: true,
    },
    salary:{
        type: String,
        trim: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    isActive: { type: Boolean, required: true, default: false },
},
    {
    timestamps: true,
})

UserSchema.pre('save', async function(next){

    if(!this.isModified('password')){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt);
    next();

});

UserSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

module.exports = mongoose.model('User',PostSchema)