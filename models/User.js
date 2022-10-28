const mongoose  = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },

    email: {
        type:String,
        required:true,
        unique:true
    },

    password: {
        type:String,
        required:true
    }
    
  },{timeStamps:true});

// mongoose.model = {}
// if model exist use it else create it
module.exports = mongoose.models.User || mongoose.model('User', UserSchema);
// export default mongoose.model('User', UserSchema);