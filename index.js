var conjugateVerb = require("conjugator/lib/conjugateVerb.js");

var comerConjugation = conjugateVerb("comer");

console.log("The first person plural future subjunctive is: " + 
  comerConjugation.subjunctive.future.plural.first);