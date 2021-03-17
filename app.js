

require('dotenv').config();
const Server = require('./models/server');


const server = new Server();
server.listen();




/*
const express = require('express')
const app = express()
 
app.get('/', (req, res) => {
  res.send('Hello World')
})
 
app.listen( this.port,()=>{
    console.log('Server corriendo en puerto',this.port)
})

*/