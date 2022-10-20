const express = require("express");
const mongoose = require("mongoose");

const app = express();

const db = require("./config/key");

mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true})
.then(() => console.log("MongoDB Connected...."))
.catch((err) => console.log(err));

const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log(`Server run with Port ${PORT}`));