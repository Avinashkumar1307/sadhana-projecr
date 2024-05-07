const express = require("express");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8000;
require('./config/database').connect();
const user = require('./routes/user')


app.use(express.json());
app.use("/api/v1",user)
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.listen(PORT, (req, res) => {
    console.log(`server is start at ${PORT}`)
    
})