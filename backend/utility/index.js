const bcrypt = require('bcrypt');
const Joi = require('joi');

async function hashpass(password){
      const salt = await bcrypt.genSalt(10);
      const hashedpassword = await bcrypt.hash(password, salt)
      return hashedpassword;
}
async function auth(req) {
      const schema = {
            email: Joi.string().min(5).max(255).email().required(),
            password: Joi.string().min(6).max(1024).required()
      }
      return Joi.validate(req, schema);
}

module.exports.hashpass = hashpass;
module.exports.auth = auth;