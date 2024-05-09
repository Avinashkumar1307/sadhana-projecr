// controllers/signup.js

const User = require('../models/User');
const bcrypt = require("bcrypt");

exports.signup = async (req, res) => {
    try {
        // Extract user data from request body
        
        const { name, email, mobile, country, age, gender, password, confirmPassword } = req.body;

        // Validate required fields
        if (!name || !email || !mobile || !country || !age || !gender || !password || !confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        // Check if user with the same email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User already exists',
            });
        }

        // Check if password and confirmPassword match
        if (confirmPassword !== password) {
            return res.status(400).json({
                success: false,
                message: 'Password and confirmPassword should match',
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user document
        const newUser = await User.create({
            name, email, mobile, country, age, gender, password: hashedPassword
        });

        return res.status(200).json({
            success: true,
            message: 'User Created Successfully',
            user: newUser // Return the created user
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'User cannot be registered, please try again later',
        });
    }
}
