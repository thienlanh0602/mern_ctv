const express = require('express');
<<<<<<< HEAD
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')

const Listpost = require('./module/posts');

app.use(express.json());
app.use(cors());
mongoose.connect(
    "mongodb+srv://ThienLanh:Limbo060201!@cluster0.hthblpc.mongodb.net/Listpost?retryWrites=true&w=majority",
    {
        useNewUrlParser: true
    }
);

app.post("/insert", async (req, res) => {
    const TitleName = req.body.TitleName
    const Content = req.body.Content
    const title = req.body.title

    const post = new Listpost({
        TitleName: TitleName,
        Content: Content,
        title: title,
    });

    try {
        await post.save();
        res.send("Đã thêm vào cơ sở dữ liệu");
    } catch (error) {
        console.log(error);
    }
});

app.get("/read", async (req, res) => {
    Listpost.find({}, (err,result) =>{
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    });
    
});

app.listen(3001, () => {
    console.log("...");
});
=======
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
>>>>>>> 5fcbcaac747c24fd09cd1a60a72a8f68d0b17a2b
