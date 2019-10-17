var express = require('express');
var hostname = 'localhost'; 
var port = 8080;

var app = express(); 

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var car = {
    "brand":"Ferrari",
    "model":"458 Italia",
    "plateNumber":"AA11BB",
    "price":2000
}

var myRouter = express.Router();

myRouter.route('/cars/:plateNumber')
.get(function(req,res){
    if(req.params.plateNumber == "AA11BB"){
        res.json({message : "Info sur la voiture " + req.params.plateNumber, data: car});
    } else {
        res.json({message : "Voiture inconnue"});
    }

})
.put(function(req,res){
    if(req.query.rent == "true"){
        res.json({message : "Vous souhaitez louer la voiture : " + req.params.plateNumber, debut : req.body.debut, fin : req.body.fin});
    } else {
        res.json({message : "Vous souhaitez ramener la voiture : " + req.params.plateNumber});
    }
});

app.use(myRouter);  

app.listen(port, hostname, function(){
	console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port); 
});
