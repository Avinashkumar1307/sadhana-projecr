// models/User.js

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true // Ensure email uniqueness
    },
    password: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
        trim: true,
    },
    gender: {
        type: String,
        required: true,
        trim: true,
        enum: ["male", "female", "other"] // Add enum for gender options
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user" // Added default value
    },
    marital: {
        type: String,
        enum: ["married", "unmarried"],
        default: "unmarried" // Added default value
    },
    dateOfAnniversary: { // Corrected property name
        type: Date, // Assuming anniversary is a date
    },
    dateOfBirth: {
        type: Date, // Assuming date of birth is a date
    },
    createdAt: {
        type: Date,
        default: Date.now // Added default value
    },
    updatedAt: {
        type: Date,
        default: Date.now // Added default value
    }
});

module.exports = mongoose.model("User", userSchema);
