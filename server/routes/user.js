const middlewareController = require("../controllers/middlewareControllers");
const userController = require("../controllers/userControllers");

const router = require("express").Router();

//GET ALL USER: Lấy tất cả user 
router.get("/",middlewareController.VerifyToken ,userController.getAllUsers);

//DELETE USER
//v1/user/:id = v1/user/123456 
router.delete("/:id",middlewareController.verifyTokenAndAdminAuth,userController.deleteUser);

module.exports = router;
