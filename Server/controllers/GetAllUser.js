const User = require('../models/User');
//login
exports.getalluserdata = async (req,res) => {
    try {
        let user = await User.find({});
       console.log("all the data ------");
       console.log(user)
        return res.status(200).json({
            user:user,
            message:'Get all user data ',
        });
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'Login Failure',
        });

    }
}