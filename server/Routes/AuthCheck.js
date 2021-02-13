import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/', (req, res) => {
    const Token = req.body.Token;
    console.log(Token)
    jwt.verify(Token, process.env.JWT_AUTH_KEY, (err, data) => {
        console.log(err, data)
        if(!err){
            return res.json(data);
        }
        return res.json({jwt_auth_invalid: true});
    })
});

export default router;