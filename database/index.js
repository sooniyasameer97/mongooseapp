const mongoose = require("mongoose");

//schemas
const Post = require("./schemas/posts");

//db connect
mongoose.connect(process.env.DB_CONNECTION,
    { 
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    ()=>{
        console.log("connected db")
    }
)

module.exports = Post;