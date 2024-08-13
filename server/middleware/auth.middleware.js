const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, process.env.secretKey, (err, decoded) => {
      // console.log(decoded)
      if (decoded) {
        req.body.userId = decoded.userId;
        req.body.username = decoded.username;
        next();
      } else {
        res.send({ error: err });
      }
    });
  } else {
    res.send({ msg: "Please Login" });
  }
};
module.exports = {
  auth,
};
