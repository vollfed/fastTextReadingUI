var express = require('express');
//var mqtt = require('mqtt')
//var client  = mqtt.connect('mqtt://192.168.3.11')

var app = express();
app.use(express.static(__dirname +'/nodeHTTP/'));
app.use(express.static(__dirname +'/node_modules/'));


app.get('/root', function (req, res) {
   console.log("returning chart");

   res.sendFile( __dirname + "/nodeHTTP/index.html" );
})

var server = app.listen(8087, function () {
   var host = server.address().address;
   var port = server.address().port;
   
   console.log("Example app listening at http://%s:%s", host, port)
})