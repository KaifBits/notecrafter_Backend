require("dotenv").config();

const express = require("express");
const cors = require("cors");

const recipieRoute = require("./Routes/reciperoute.js");
const menuroute = require("./Routes/menutable.js");
const movroute = require("./Routes/movieslist.js");
const bookroute = require("./Routes/booklist.js");
const userRoute = require("./Routes/userroute");

const { connectDB } = require("./database.js");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

// Routes
app.use(menuroute);
app.use(movroute);
app.use(bookroute);
app.use(userRoute);

// Connect database
connectDB()
    .then(() => {
        console.log("Database connected");
    })
    .catch((err) => {
        console.error("Database connection failed:", err);
    });

// IMPORTANT FOR VERCEL
module.exports = app;