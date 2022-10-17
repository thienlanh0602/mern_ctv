const express = require('express');
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGODB_URL,() =>{
    console.log("connected to mongoDB")
})

app.use(cors()); //Ngăn lỗi cors origin 
app.use(cookieParser()); //Tạo cookie và nhấn cookie
app.use(express.json()); //Những request dưới dạng json

//ROUTES: get, post, put, delete
app.use("/v1/auth", authRoute);
app.use("/v1/user", userRoute);

app.listen(8000, () => {
    console.log("Server is running")
});

//AUTHENTICATION: So sánh username, mật khẩu của người dùng so với thông tin trên database
//AUTHORIZATION: Chức năng phân quyền    
//JSON WEB TOKEN: Xác thực người dùng để phân quyền giống như cmnd
