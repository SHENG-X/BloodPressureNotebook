const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const config = require('config');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 255
    },
    password: {
        type: String,
        minlength: 6,
        maxlength: 1024,
        required: true
    }
});
const statusSchema = new mongoose.Schema({
    uid:{
        type: String,
        required :true
    },
    systolic:{
        type: Number,
        required: 'Systolic required'
    },
    diastolic:{
        type: Number,
        required: 'Diastolic required'
    },
    pulse:{
        type: Number,
        required: 'Pulse required'
    },
    date:{
        type: Date,
        required: true,
        default: Date.now()
    }
});


function validateUser(user){
    const schema={
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(6).max(1025).required()
    };
    return Joi.validate(user, schema);
}


userSchema.methods.generateAuthToken = function(){
    let token = jwt.sign({_id: this.id,name: this.name}, config.get('JWTPK'));
    return token;
}

const User = mongoose.model('users', userSchema)
const Status = mongoose.model('health_status', statusSchema)

module.exports.Status = Status;
module.exports.User = User;
module.exports.validate = validateUser;