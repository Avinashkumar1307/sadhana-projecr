const express = require("express");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 4000;
require('./config/database').connect();
const user = require('./routes/user')
const questionAndAnswers = require('./routes/QuestionAndAnswer')
const admin = require('./routes/Admin')
const cors = require('cors')
app.use(cors());
app.use(express.json());
app.use("/api/v1", user)
app.use("/api/v2", questionAndAnswers)
app.use("/api/v1/admin",admin)
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(
	cors({
		origin: "*",
		credentials: true,
	})
);
const corsOptions = {
    origin: 'http://localhost:3000',
  };
  
  // Enable CORS with the specified options
  app.use(cors(corsOptions));
app.listen(PORT, (req, res) => {
    console.log(`server is start at ${PORT}`)

})