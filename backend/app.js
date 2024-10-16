// Import modules
const express = require("express");
const connectDb = require("./config/db");
const cors = require('cors');
require('dotenv').config();

// start app
const app = express();
app.use(express.json());
app.use(cors({
    origin: "*"
}));

// connect to database
connectDb();

// call routers
app.get("/", (req, res) => {
    res.send("Exo Master")
});

// error handling
app.use((error, req, res, next) => {
    res.status(500).send(error.message);
});

// listen on PORT
app.listen(process.env.PORT, ()=>{ console.log(`Listening on ${process.env.PORT}`)});