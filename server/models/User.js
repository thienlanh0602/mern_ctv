const mongoose = require("mongoose");

//Khung xương chứa thuộc tính của model 
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, //Ép buộc nếu không nhập username thì trả về lỗi
        minlength: 6,
        maxlength: 20,
        unique: true //Khi người khác tạo một username đã tồn tại thì báo lỗi       
    },
    name: {
        type: String,
        required: true, //Ép buộc nếu không nhập name thì trả về lỗi
        maxlength: 60,
        unique: true //Khi người khác tạo một username đã tồn tại thì báo lỗi       
    },
    class: {
        type: String,
        required: true, //Ép buộc nếu không nhập class thì trả về lỗi
        minlength: 8,
        maxlength: 8,
        unique: true //Khi người khác tạo một username đã tồn tại thì báo lỗi       
    },
    mssv: {
        type: String,
        required: true, //Ép buộc nếu không nhập mssv thì trả về lỗi
        minlength: 10,
        maxlength: 10,
        unique: true //Khi người khác tạo một username đã tồn tại thì báo lỗi       
    },
    email: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    admin: {
        type: Boolean, //true hoặc false để biết người đó có phải là admin hay không
        default: false, //Bất kì ai đăng ký thì không phải là admin

    },
},
    { timestamps: true } //User này được tạo được update khi nào    
);

module.exports = mongoose.model("User", userSchema);