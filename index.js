const express = require('express');
const app = express();
const path = require('path')
const router = express.Router();

const PORT=8080;

router.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/index.html'))
});

app.use('/', router)
var server = app.listen(3000, function(){

})

console.log("Running at Port 3000")

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