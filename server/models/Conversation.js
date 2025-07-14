
const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({
    user1: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    user2: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    messages: [{
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        text: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
        timestamp: {
            type: Date,
            default: Date.now
        }
    }]
});

module.exports = mongoose.model('Conversation', conversationSchema);
