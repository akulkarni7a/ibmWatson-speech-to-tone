// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
// var connection = require("../config/connection.js");
// var Pet = require("../models/petconnection.js");
var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
fs = require('fs')
var newString;

var tone_analyzer = new ToneAnalyzerV3({
    username: "739c4f95-8d5f-44f4-acc1-6bee7b7a48e2",
    password: "3HT46uWqZfdc",
    version_date: '2016-05-19'
});
var result = [];

// Routes
// =============================================================
module.exports = function(app) {


    app.get("/convert/:string?", function(req, res) {
      console.log(req.params.string);
      var preString = req.params.string;
      var newString = preString.toString();

      tone_analyzer.tone({
                    tone_input: newString,
                    content_type: 'text/plain'
                },function(err,tone){
                  if (err) {
                        console.log(err);
                    } else {
                        res.json(tone);
                    }
                }
            );
      

    });
};