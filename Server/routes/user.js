const express = require("express");
const router = express.Router();


const {signup} = require('../controllers/signup');
const {login} = require('../controllers/login')
const {auth,isUser,isAdmin}=require('../middlewares/auth')

router.post("/login",login);
router.post("/create",signup);

router.get("/user", auth, isUser, (req,res) => {
    res.json({
        success:true,
        message:'Welcome to the Protected route for User',
    });
} );

router.get("/admin", auth, isAdmin, (req,res) => {
    res.json({
        success:true,
        message:'Welcome to the Protected route for Admin',
    });
});



module.exports = router;