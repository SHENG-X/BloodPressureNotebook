const express = require('express');
const app = express();
const PORT = 8080 || env.process.PORT;
const router = require('./routes')
const bodyParser = require('body-parser');
const config = require('config');
const cors = require('cors');

if(!config.get('JWTPK')){
    console.log('FATAL ERROR: JWTPK is not defined');
    process.exit(1);
}

//need to use cors allow cors origin access,
//and expose the customized header to client
var corsOptions = {
    exposedHeaders: ['Content-Range', 'X-Content-Range', 'x-auth-token']
}
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use('/api', router);



app.listen(PORT, ()=>
    console.log('Listen to port', PORT)
);