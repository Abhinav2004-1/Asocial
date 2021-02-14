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
    },
    
    FriendRequest: {
        type: [String],
        default: []
    }
});

const RegistrationModel = mongoose.model('registrations', Schema);

export default RegistrationModel;