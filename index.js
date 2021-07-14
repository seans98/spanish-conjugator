var conjugateVerb = require("conjugator/lib/conjugateVerb.js");
var inflect = require("conjugator/lib/inflect.js");
const { response } = require("express");
const bodyParser = require("body-parser");

const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/styles", express.static(__dirname + '/styles'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var { indicative, imperative, conditional, subjunctive } = conjugateVerb(
    req.body.verb
  );

  if (indicative['present']['singular']['first'] === indicative['present']['singular']['second']){
      res.render("error", {errorVerb: req.body.verb})
  } else {
    res.render("conjugator", {
        kindOfVerb: indicative,
        kindOfVerb2: imperative,
        kindOfVerb3: conditional,
        kindOfVerb4: subjunctive,
      });
  }


});

app.listen(3000, function () {
  console.log("server started on port 3000");
});
