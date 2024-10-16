// Import modules
const express = require("express");
require('dotenv').config();
const connectDb = require("./config/db");
const cors = require('cors');
const exerciseRoutes = require('./routes/exerciseRoutes.js');

// start app
const app = express();
app.use(express.json());
app.use(cors({
    origin: "*"
}));

// connect to database
connectDb();

// call routers
app.use('/api/exercises', exerciseRoutes);
app.get("/", (req, res) => {
    res.send("Exo Master")
});

// error handling
app.use((error, req, res, next) => {
    res.status(500).send(error.message);
});

// listen on PORT
app.listen(process.env.PORT, ()=>{ console.log(`Listening on ${process.env.PORT}`)});