require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDB= require("./db/conn");

const users = require("./models/userSchema");
const cors = require("cors");
const router = require("./routes/router");
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017'


const port = process.env.PORT || 3333;

app.use(cors());

// Database Connection
connectDB(DATABASE_URL);

// JSON
app.use(express.json())

// Load Routes
app.get("/",(req,res)=>{
    res.json("server start")
})

app.use(router);


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
 })