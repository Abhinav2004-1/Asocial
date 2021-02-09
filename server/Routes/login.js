import express from 'express';
import bcrypt from 'bcrypt';
import RegistrationModel from '../Models/registration-model.js';

const router = express.Router();

router.post('/', (req, res) => {
    const Username = req.body.Username;
    const Password = req.body.Password;

    RegistrationModel.findOne({Username}).exec.then((response) => {
        bcrypt.compare(Password, response.Password, (err, match) => {
            if(!err){
                if(match){
                    return res.json({access_granted: true})
                }
                return res.json({access_granted: false})
            }
        })
    })
    
})

export default router;