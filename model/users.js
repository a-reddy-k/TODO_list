const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now
    },
    description:{
        type:String,
        default:"Yet to Define",
    }

});

const UserModal=mongoose.model("User",UserSchema);
module.exports=UserModal;