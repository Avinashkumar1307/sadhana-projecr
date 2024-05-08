// models/User.js

const mongoose = require("mongoose");
const user = require('./User')
const questionAndAnswers = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        
        ref: user,
    },
    data: {
        type: String,
        required: true,
        trim: true
    },
    replies: [
        {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                
                ref: user,

            },
            data: {
                type: String,
                
                trim: true
            }, createdAt: {
                type: Date,
                default: Date.now
            }
        }

    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("QuestionAndAnswers", questionAndAnswers);
