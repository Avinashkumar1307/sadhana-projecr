const express = require("express");
const router = express.Router();
const {getalluserdata} = require('../controllers/GetAllUser')
const {auth,isUser,isAdmin}=require('../middlewares/auth');


router.get('/getalluser',auth,isAdmin,getalluserdata)



module.exports = router;