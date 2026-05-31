const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 20,
        match: /^[a-zA-Z0-9_]+$/
    },
    email : {
        type: String,
        unique : true,
        required : true,
        lowercase : true,
        trim : true,
        match: /^\S+@\S+\.\S+$/
    },
    password : {
        type: String,
        required: true,
        minlength: 6
    },
    role : {
        type: String,
        enum: ['user', 'artist'],
        default: 'user'
    }
})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel