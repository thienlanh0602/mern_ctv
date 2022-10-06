const mongoose = require('mongoose');

const Posts = new mongoose.Schema({
    TitleName: {
        type: String,
        required: true,
    },
    Content: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    }
});

const posts = mongoose.model("post", Posts);
module.exports = posts;