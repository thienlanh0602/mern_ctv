const jwt = require("jsonwebtoken");
const { model } = require("mongoose");

const middlewareController = {

    //VerifyToken : Xác nhận token có phải người đó hay không?
    VerifyToken: (req, res, next) => {
        const token = req.headers.token;
        if (token) {
            const accessToken = token.split(" ")[1];
            jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
                if (err) {
                    return res.status(403).json("Token is not valid");
                }
                req.user = user;
                next();
            });
        }
        else {
            return res.status(401).json("You're not authenticated");
        }
    },
    verifyTokenAndAdminAuth: (req, res, next) => {
        middlewareController.VerifyToken(req, res, () => {
            if (req.user.id == req.params.id || req.user.admin) {
                next();
            }
            else {
                return res.status(403).json("You are not allowed to delete other");
            }
        });
    },
};

module.exports = middlewareController;