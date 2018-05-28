const express = require('express');
const router = express.Router();
const db = require('../model');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const utility = require('../utility');
const jwt = require('jsonwebtoken');
const config = require('config');
const authToken = require('../middlewares');

router.get('/', authToken, (req, res) => {
    db.Status.find({uid: req.user._id})
        .then(data => {
            res.send(data);
        })
        .catch(err => res.send({ error: err }))
});

router.get('/self', authToken, (req, res) => {
    res.send('connected');
});


// router.get('/:id', authToken, (req, res) => {
//     let uid=req.params.id;
//     db.Status.find({_id: uid}).then(data => {
//         res.send(data);
//     }).catch(ex =>{
//         res.send({error: ex.message});
//     })
// });

router.post('/status', authToken, (req, res) => {
    let status ={...req.body, uid : req.user._id};
    db.Status.create(status).then(data => res.send(status)).catch(err => res.send({error: err.message}));
});

router.post('/user', async (req, res) => {
   const { error } = db.validate(req.body);
   if(error){
       return res.status(400).send({error: error.details[0].message});
   }else{
       let user = await db.User.findOne({email: req.body.email});
       if(user){
           res.status(400).send({error: "User already exists!"});
       }
       else{
           let user = req.body;
           user.password = await utility.hashpass(req.body.password);
           db.User.create(user).then(data =>{
               res.header('x-auth-token', data.generateAuthToken()).send(_.pick(data, ['name', 'email']));
           }).catch(err =>res.send({error: err.message}));
       }
   }
});

router.post('/auth', async (req, res) => {
    const { error }  = await utility.auth(req.body);
    if (error) {
        res.send({
            error: error.details[0].message
        })
    }
    let user = await db.User.findOne({email: req.body.email});
    if(user){
        const valid = await bcrypt.compare(req.body.password, user.password);
        if(!valid){
            res.status(400).send({'error': 'Invalid email or password'});
        }
        else{
            const token = user.generateAuthToken();
            res.header('x-auth-token', token).send(_.pick(user, ['name', 'email']));
        }
    }
    else{
        res.status(400).send({error: 'Invalid email or password'});
    }
})
module.exports = router;