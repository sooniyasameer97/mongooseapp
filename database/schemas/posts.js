const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    first_name: {
        type : String,
        required : true
    },
    last_name : {
        type : String,
        required : true
    },
    e_mail: {
        type : String,
        required : true
    },
    phone:{
        type : String,
        required : true
    },
    job:{
        type : String,
        required : true
    },
    salary:{
        type : Number,
        // required : true
    },
    date : {
        type : Date,
        default : Date.now
    },
})

const postsModel = mongoose.model("Posts",postSchema);

module.exports =  postsModel;