const jwt = require('jsonwebtoken');
const config = require('config');
function authToken(req, res, next){
          const token = req.header('x-auth-token');
          if(token){
                try{
                  const decoded = jwt.verify(token, config.get('JWTPK'));
                  req.user = decoded;
                  next();
                }
                catch(err){
                  res.status(400).send({error: 'Invalid token'});
                }
          }
          else{
               return res.status(401).send({error: 'Access denied. No token provided'});
          }
}

module.exports = authToken;