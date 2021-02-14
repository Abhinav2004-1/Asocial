import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    Messages: {
        type: [{
            sender: String,
            messages: {
                type: [{message: String, self: {type: Boolean, default: false}}]
            }
        }],
        default: []
    }
});

const MessageModel = mongoose.model(Schema);

export default MessageModel;