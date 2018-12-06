// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Int32 = require('mongoose-int32')

// create a schema
var stateinfo = new Schema({ 
    state : String, 
    abbrev : String, 
    heroin : Number, 
    fentanyl : Number, 
    cocaine : Number, 
    benzodiazepine : Number, 
    etoh : Number, 
    any_opiooid : Number, 
    oxycodone : Number, 
    methadone : Number, 
    hydrocodone : Number, 
    amphet : Number, 
    oxymorphone : Number, 
    tramad : Number, 
    morphine : Number, 
    Male : Number, 
    Female : Number, 
    White : Number, 
    Hispanic : Number, 
    Black : Number, 
    Unknown : Number, 
    Asian :  Number, 
    Chinese : Number, 
    Hawaiian : Number,
    Residance : Number,
    Hotel : Number,
    Hospital : Number,
    In_Vehicle : Number,
    Street : Number
});

var stateInfo = mongoose.model('states', stateinfo);

// make this available to our users in our Node applications


module.exports = stateInfo;
