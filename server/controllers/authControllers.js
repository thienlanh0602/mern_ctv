const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


let refreshTokens = [];
const authController = {
    //REGISTER: Đăng ký
    regiserUser: async(req,res) => {
        try{
            const salt = await bcrypt.genSalt(10); //Gia vị để mã hóa mật khẩu
            const hashed = await bcrypt.hash(req.body.password, salt); //Mã hóa mật khẩu

            //Create new user: tạo user mới
            const newUser = await new User({
                name:req.body.name,
                class:req.body.class,
                mssv:req.body.mssv,
                username: req.body.username,
                email: req.body.email,
                password: hashed,
            });

            //Save to DB: Lưu vào DB
            const user = await newUser.save();  
            res.status(200).json(user);
        }catch(err){
            res.status(500).json(err);  
        }
    },
    //GENERATE ACCESS TOKEN
    generateAccessToken: (user) => {
        return jwt.sign(
            {
            id: user.id,
            admin: user.admin
            },
            process.env.JWT_ACCESS_KEY,
            {expiresIn: "20s" } //Thời gian secret token hết hạn
        );
    },
    //GENERATE REFRESH TOKEN
    generateRefreshToken: (user) => {
        return jwt.sign(
            {
            id: user.id,
            admin: user.admin
            },
            process.env.JWT_REFRESH_KEY,
            {expiresIn: "360d" } //Thời gian secret token hết hạn
        );
    },
    //LOGIN
    loginUser: async(req,res) => {
        try{
            const user = await User.findOne({username: req.body.username});
            if(!user){
                return res.status(404).json("Wrong username!");
            }
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if(!validPassword){
                return res.status(404).json("Wrong password!");
            }
            if(user && validPassword){
            const accessToken =  authController.generateAccessToken(user);
            const refreshToken =  authController.generateRefreshToken(user);
            refreshTokens.push(refreshToken);
            res.cookie("refreshToken", refreshToken, {
                httpOnly:true,
                secute:false,
                path:"/",
                sameSite:"strict",
            })
                const {password, ...others} = user._doc;
                res.status(200).json({...others,accessToken});
            }
        }catch(err){
            res.status(500).json(err);  
        }
    },

    requestRefreshToken: async(req,res) => {
        //Lấy refresh token từ user
        const refreshToken = req.cookies.refreshToken;
        //res.status(200).json(refreshToken);
        if(!refreshToken) return res.status(401).json("You're not authenticated");
        if(refreshTokens.includes(refreshToken)){
            return res.status(403).json("Refresh token is not valid");
        }
        jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err,user) => {
            if(err){
                console.log(err);
            }
            refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
            //Tạo accesstoken, refreshtoken mới
            const newAccessToken = authController.generateAccessToken(user);
            const newRefreshToken = authController.generateRefreshToken(user);
            refreshTokens.push(newRefreshToken) 
            res.cookie("refreshToken", newRefreshToken, {
                httpOnly:true,
                secute:false,
                path:"/",       
                sameSite:"strict",
            });
            res.status(200).json({accessToken: newAccessToken});
        }); 
    },

    //LOG OUT
    userLogout: async(req,res) => {
        res.clearCookie("refreshToken");
        refreshTokens = refreshTokens.filter(token => token !== req.cookies.refreshToken);
        res.status(200).json("Logged out!");
    }
};

//Lưu trữ token
//1. LOCAL STORAGE:
//XSS tấn công

//2. HTTPONLY COOKIES:
//CSRF tấn công khắc phục bằng SAMESITE

//3. REDUX STORE lưu trữ ACCESSTOKEN
// HTTPONLY COOKIES lưu trữ REFRESHTOKEN

// Dùng BFF PATTHERN (BACKEND FOR FONTEND) (Tham khảo)
module.exports = authController;