var conjugateVerb = require("conjugator/lib/conjugateVerb.js");
const { response } = require("express");
const bodyParser = require("body-parser");

const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var conjugatedVerb = conjugateVerb(req.body.verb, {
    mood: "indicative"
  });
//   conjugatedVerb = JSON.stringify(conjugatedVerb);
//   res.render("conjugator", { kindOfVerb: conjugatedVerb });
res.send(conjugatedVerb);
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});
