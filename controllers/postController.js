const Post = require("../database");


//get all post from Db
const getAllEmployee =async (req,res)=>{
    try {
        const posts = await Post.find();
        res.json(posts);
    }
    catch(err){
        res.json({status : "false" , message : "error"})
    }
};

// store a post in db
const storeAEmployee = async(req,res)=>{
    const post = new Post({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        e_mail: req.body.e_mail,
        phone:req.body.phone,
        job:req.body.job,
        salary:req.body.salary,
    });

    post.save()
    .then(data => {
        res.json(data);
    })
    .catch(err =>{
        res.json({status : "false" , message : "error"})
    })
};

// // get a specific post from Db
const getSpecificEmployee = async (req,res)=>{
    let id = req.params.postId;
    id = id.substring(1);
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({ message : err })
    }
};

// // delete a specific post from Db
const deleteEmployee = async (req,res)=>{
    try {
        const removedPost = await Post.remove({_id : req.params.postId });
        res.json(removedPost);
    } catch (err) {
        res.json({ message : err })
    }
};

// // update a data of Db
const updateEmployee = async (req,res)=>{
    try {
        const updatePost = await Post.updateOne(
            {_id : req.params.postId },
            { $set : { first_name : req.body.first_name }}
        );
        res.json(updatePost);
    } catch (err) {
        res.json({ message : err })
    }
};
// // aggregate  datas in Db


const aggregateEmployee =async (req,res)=>{
    try {
    Post.aggregate([
    {$match: {first_name:"abc"} },
    {$group: {_id: "$first_name",amount: { $sum: "$salary"} } }
    
    ]).exec((err, Post) => {
    
    res.json(Post);
    })
     
    }
    catch(err){
    res.json({status : "false" , message : "error"})
    }
    };
//count the number of employees 
const countEmployee=async (req,res)=>{
    console.log("res")
    try {
    Post.count({first_name:"abchwhde"}
   ).exec((err, Post) => {
    
    res.json(Post);
    })
     
    }
    catch(err){
    res.json({status : "false" , message : "error"})
    }

    };

module.exports = {
    getAllEmployee,
    storeAEmployee,
    getSpecificEmployee,
    deleteEmployee,
    updateEmployee,
    aggregateEmployee,
    countEmployee
};