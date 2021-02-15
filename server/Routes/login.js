import express from "express";
import bcrypt from "bcrypt";
import RegistrationModel from "../Models/registration-model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.post("/", (req, res) => {
  const Username = req.body.Username;
  const Password = req.body.Password;
  RegistrationModel.findOne({ Username }, (err, response) => {
    if (!err && response) {
      bcrypt.compare(Password, response.Password, (err, match) => {
        if (!err) {
          if (match) {
            jwt.sign(
              { Username, Password },
              process.env.JWT_AUTH_TOKEN,
              (err, token) => {
                if (!err) {
                  return res.json({ token, password: response.Password });
                }
              }
            );
          } else {
            return res.json({ access_granted: false });
          }
        }
      });
    } else {
      return res.json({ access_granted: false });
    }
  });
});

export default router;
