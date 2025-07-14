const mongoose = require('mongoose');
const Conversation = require('../models/Conversation'); 
const User  = require("../models/User");

const viewInChatToADMIN = async (req, res) => {
    try {
        if (!req.user.roles.includes("ADMIN")) {
            return res.status(403).json({ message: 'בשולח  אינו מורשה' });
        }
        const conversation = await Conversation.find();
        res.status(200).json({ data: conversation }); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const viewInChat = async (req, res) => {
    try {
        const userId = req.user._id;

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 4; 

        const skip = (page - 1) * limit;

        const conversations = await Conversation.find({
            $or: [{ user1: userId }, { user2: userId }]
        }).sort({ _id: -1 }) // מיון מהחדש לישן
          .skip(skip)
          .limit(limit)
          .populate('user1', 'username')
          .populate('user2', 'username')
          .populate('messages.sender', 'username');

        res.status(200).json(conversations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const continueChatting = async (req, res) => {
    try {
        const { recipient, text } = req.body;
        console.log(req.user_id);
        const sender = req.user._id;

        if (!req.user.roles.includes("ADMIN")) {
            return res.status(403).json({ message: 'Sending is not authorized' });
        }

        const Finding = await User .findById(recipient);
        if (!Finding) {
            return res.status(404).json({ message: 'Receiving user not found' });
        }

        const newConversation = {
            user1: sender,
            user2: recipient,
            messages: [{
                sender,
                text
            }]
        };
        const newConversation1 = await Conversation.create(newConversation);

        res.status(200).json(newConversation1);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const chat = async (req, res) => {
    try {
        const { ConversationId, text } = req.body;
        console.log(req.user_id);
        const sender = req.user._id;

        const addMessage = await Conversation.findById(ConversationId);
        if (!addMessage) {
            return res.status(404).json({ message: 'call not found' });
        }

        addMessage.messages.push({
            sender,
            text
        });
        await addMessage.save();
        res.status(200).json(addMessage);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteMessage = async (req, res) => {
    try {
        const { conversationId, messageId } = req.body;

        const conversation = await Conversation.findById(conversationId);
        if (!conversation) {
            return res.status(404).json({ message: 'call not found'});
        }

        const messageIndex = conversation.messages.findIndex(msg => msg._id.toString() === messageId);
        if (messageIndex === -1) {
            return res.status(404).json({ message: 'Message not found' });
        }

        conversation.messages.splice(messageIndex, 1);
        await conversation.save();

        res.status(200).json({ message: 'The message was successfully deleted'});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    viewInChatToADMIN,
    viewInChat,
    continueChatting,
    chat,
    deleteMessage
};
