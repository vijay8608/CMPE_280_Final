// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Int32 = require('mongoose-int32')

// create a schema
var prescriberinfo = new Schema({
  Gender: String,
  State:String,
  Specialty:String,
  Prescriptions: Int32
}); 

// the schema is useless so far
// we need to create a model using it
var prescriberInfo = mongoose.model('prescriberinfos', prescriberinfo );

// make this available to our users in our Node applications
module.exports = prescriberInfo;