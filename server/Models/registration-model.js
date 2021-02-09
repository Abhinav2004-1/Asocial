import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    Username: {
        type: String,
        required: true
    },

    Password: {
        type: String,
        required: true
    },

    Email: {
        type: String,
        required: true
    }
});

const RegistrationModel = mongoose.model('registrations', Schema);

export default RegistrationModel;