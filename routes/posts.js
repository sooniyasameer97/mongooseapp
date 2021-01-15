const express = require ("express");
const router = express.Router();
const postController = require("../controllers/postController")


//get all post from Db
router.get("/users",postController.getAllEmployee);

// store a post in db
router.post("/",postController.storeAEmployee);

// get a specific post from Db
router.get("/:postId",postController.getSpecificEmployee);

// delete a specific post from Db
router.delete("/:postId", postController.deleteEmployee);

// update a data of Db
router.patch("/:postId", postController.updateEmployee);

//aggregate datas in db
router.get("/totalsalary", postController.aggregateEmployee);

//count number of employees in db
router.get("/count", postController.countEmployee);

module.exports = router;