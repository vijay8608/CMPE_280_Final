// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var overdose = new Schema({
  State: String,
  Population:String,
  Deaths:String,
  Abbrev:String
});

// the schema is useless so far
// we need to create a model using it
var Over = mongoose.model('overdose', overdose);

// make this available to our users in our Node applications
module.exports = Over;