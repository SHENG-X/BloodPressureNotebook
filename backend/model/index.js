const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/health').then(
    ()=>console.log('Connected to DB')
).catch(
    err => console.log('Connection failed', err.message)
);

const {User, Status, validate} = require('./status');
module.exports.User = User;
module.exports.Status = Status;
module.exports.validate = validate;