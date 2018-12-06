// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var overdoseNew = new Schema({
  State: String,
  Population:Number,
  Deaths:Number,
  // Abbrev:String
});

// the schema is useless so far
// we need to create a model using it
var OverNew = mongoose.model('overdoseNew', overdoseNew);

// make this available to our users in our Node applications
module.exports = OverNew;