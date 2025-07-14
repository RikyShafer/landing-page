
const mongoose = require('mongoose');

const UserRegisterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    roles: {
        type: [String],
        enum: ["ADMIN", "USER"],
        default: "USER",
    },
    email: {
        type: mongoose.Schema.Types.String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('UserRegister', UserRegisterSchema);
