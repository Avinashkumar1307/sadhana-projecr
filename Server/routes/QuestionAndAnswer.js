const express = require("express");
const router = express.Router();

const {auth,isUser,isAdmin}=require('../middlewares/auth')
const {questionAndAnswers} = require('../controllers/QuesAndAnswe')


router.post("/questionAndAnswers", auth, isUser, questionAndAnswers);





module.exports = router;