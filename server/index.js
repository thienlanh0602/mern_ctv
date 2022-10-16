const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')

const Listpost = require('./module/posts');

app.use(express.json());
app.use(cors());
mongoose.connect(
    '',
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