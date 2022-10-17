const authController = require("../controllers/authControllers");
const middlewareController = require("../controllers/middlewareControllers");

//Đăng ký, đăng nhập
const router = require("express").Router();

//REGISTER
router.post("/register", authController.regiserUser );

//LOGIN
router.post("/login", authController.loginUser );

//REFRESH
router.post("/refresh", authController.requestRefreshToken );

//LOG OUT
router.post("/logout",middlewareController.VerifyToken ,authController.userLogout );

module.exports = router;