var conjugateVerb = require("conjugator/lib/conjugateVerb.js");
const { response } = require("express");
const bodyParser = require("body-parser");

const express = require("express");
const app = express();

app.use(express.urlencoded({extended: true}))

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req,res){
    var conjugatedVerb = conjugateVerb(req.body.verb);
    
    res.send(conjugatedVerb.subjunctive)
});

app.listen(3000, function(){
    console.log("server started on port 3000")
});



