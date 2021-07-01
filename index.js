const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();


//  Database connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
.then(console.log("Connected to MongoDB!"))
.catch((err) => console.log(err));

app.use("/", (req, res) => {
    console.log("This is main url");
})


// Server run
app.listen("5000", () => {
    console.log("Backend is running.");
});