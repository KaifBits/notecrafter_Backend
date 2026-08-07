const jwt = require("jsonwebtoken");

function auth(req, res, next) {
    try {
        const authHeader = req.headers.authorization;

        console.log("AUTH HEADER:", authHeader);

        if (!authHeader) {
            return res.status(401).json({
                message: "No token provided"
            });
        }

        const token = authHeader.split(" ")[1];

const decoded = jwt.verify(
    token,
    process.env.JWT_SECRET
);
        req.user = decoded;

        next();

    } catch(err) {
        console.log(err.message);

        return res.status(401).json({
            message:"Invalid Token"
        });
    }
}

module.exports = auth;   