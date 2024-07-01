const mongoose = require('mongoose');
const { trim } = require('validator');

const menShema=new mongoose.Schema({
    ranking:{
        type:Number,
        required: true,
        unique:true
    },
    name:{
        type:String,
        required: true,
        trim:true
    },
    dob:{
        type:Date,
        required: true,
        trim:true
    },
    country:{
        type:String,
        required: true,
        trim:true
    },
    score:{
        type:Number,
        required: true,
        trim:true
    },
    event:{
        type:String,
        default:"100m"
    },
    
})

//create collection
const userData=mongoose.model("Mens100m",menShema);
module.exports=userData;