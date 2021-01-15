const express =  require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors")
require("dotenv/config")

//import routes
const routes = require("./routes")

const app = express();

//neede to parse post json data
// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//fix cross-origin isuue
app.use(cors())

app.use("/",routes);


//acess static file
app.use(express.static('staticHTML'));


//routes
app.get("/",(req,res)=>{
    res.send("welcome to mongoose");
});


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

//listeen
app.listen(3000);