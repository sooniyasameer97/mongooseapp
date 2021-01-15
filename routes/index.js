const express = require('express');
const router = express.Router();
const post = require("./posts");

router.use("/posts",post);


module.exports =router;