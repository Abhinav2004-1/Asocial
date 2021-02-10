import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/', (req, res) => {
    const Token = req.body.Token;
    jwt.verify(Token, process.env.JWT_AUTH_KEY, (err, data) => {
        if(!err){
            return res.json(data);
        }
        return res.json(err);
    })
});

export default router;