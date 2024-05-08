const User = require('../models/User');
const QuestionAndAnswers = require('../models/QuestionAndAnswer')
require('dotenv').config();
const jwt = require("jsonwebtoken");
exports.questionAndAnswers = async (req, res) => {
    try {

        //data fetch
        const { data } = req.body;
        console.log("req.body");
        const payload = jwt.verify(req.body.token, process.env.JWT_SECRET);
        console.log(payload)
        //validation on email and password
        if (!data) {
            return res.status(400).json({
                success: false,
                message: 'Please write th question',
            });
        }

        const newQuestion = await QuestionAndAnswers.create({
            data,userId:payload.id
        });

        return res.status(200).json({
            success: true,
            message: 'User Created Successfully',
            user: newQuestion // Return the created user
        });

    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Login Failure',
        });

    }
}