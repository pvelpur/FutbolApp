const express = require('express');
const app = express();
const path = require('path')
const router = express.Router();
const firebase = require('firebase/app')
require("firebase/auth");


const PORT=8080;

router.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/html/index.html'))
});

router.get('/register', function(req, res){
    res.sendFile(path.join(__dirname+'/html/register.html'))
});

router.get('/login', function(req, res){
    res.sendFile(path.join(__dirname+'/html/login.html'))
});

app.use('/', router)
var server = app.listen(3000, function(){

})

console.log("Running at Port 3000")

// firebase.auth().onAuthStateChanged(function(user){
//         if(user){
//          console.log("congrats")
//         }
//      else{
//           window.alert("TRY AGAIN")
//          }
//      });

// fs.readFile('./index.html', (err, html) => {
//     if (err) throw err;

//     else{
//         http.createServer(function(request, response){
//             response.writeHeader(200, {"Content-Type": "text/html"});
//             response.write(html);
//             response.end();
//         }).listen(PORT)
//     }
// })