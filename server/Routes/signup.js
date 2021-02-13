import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import RegistrationModel from "../Models/registration-model.js";
dotenv.config();

const router = express.Router();

router.post("/", (req, res) => {
  const Username = req.body.Username;
  let Password = req.body.Password;
  const Confirm = req.body.Confirm;
  const Email = req.body.Email;

  if (
    Username.length >= 4 &&
    Password === Confirm &&
    Password.length >= 8 &&
    Email.length >= 11
  ) {
    const NumberRegex = /[0-9]/;
    if (NumberRegex.exec(Password) !== null) {
      bcrypt.hash(Password, 10, (err, hashed) => {
        if (!err) {
          Password = hashed;
          const Data = {
            Username,
            Password,
            Email,
          };
          const RegistrationData = new RegistrationModel(Data);
          RegistrationData.save().then(() => {
            jwt.sign(Data, process.env.JWT_AUTH_TOKEN, (err, token) => {
              if (!err) {
                return res.json({ token });
              }
              return res.json({ registration_err: true });
            });
          });
        } else {
          return res.json({ registration_err: true });
        }
      });
    } else {
      return res.json({ registration_err: true });
    }
  }
});

export default router;
