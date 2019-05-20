const mongoose = require('mongoose');

const EleveSchema = mongoose.Schema({
    _id: {type:Number,required:true},
    nomUtilisateur: String,
     email: String,
    password:String
}, {
    timestamps: true
});
/* _id: {type:Number,required:true} */

module.exports = mongoose.model('login', EleveSchema);