const express = require("express");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { UserModel } = require("../model/user.model");

userRouter.post("/register", async (req, res) => {
  const { username, email, password, role } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      const user = new UserModel({ username, email, password: hash, role });
      await user.save();
      res.status(200).send({
        msg: "The new user has been registered",
        registeredUser: user,
      });
    });
  } catch (error) {
    res.status(400).send({ error: error });
  }
});
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          res.status(200).send({
            msg: "Login successful!",
            token: jwt.sign(
              { userId: user._id, username: user.username },
              process.env.secretKey
            ),
            user,
          });
        } else {
          console.log(err);
          res.status(402).send({ error: err });
        }
        // result == true
      });
    } else {
      res.status(400).send({ msg: "Wrong Credentials" });
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = {
  userRouter,
};
