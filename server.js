
const app = require('./app');
const server = require('http').Server(app);

//Server Config
const port = process.env.PORT || 80
function outms() {console.log("Listening on Port 80") }
server.listen(80,outms)
  

