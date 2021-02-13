import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import RegistrationModel from "../Models/registration-model.js";
import nodemailer from 'nodemailer';
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
                const transporter = nodemailer.createTransport({
                  service: 'gmail',
                  auth: {
                    user: process.env.EMAIL,
                    pass: process.env.PASSWORD
                  }
                });
                transporter.sendMail({
                  sender: 'A-Socail',
                  to: Email,
                  subject: 'A-Social Registration',
                  html: '<h1 style="margin: 10px auto; text-align: center;">Welcome to A-Social</h1><div style="padding: 10px 2%; margin: 10px auto; font-size: 16px">Please confirm your Email to further continue with A-Social.</div><a href="https://localhost:3000" style="width: 95%; display:block; margin:10px auto; padding:18px 4%; background-color: #ff374e; color:#fff; font-size:20px; border: none;  border-radius: 10px; margin-top:30px; text-align: center;">Accept to Confirm</a>'
                }, () => {});
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
