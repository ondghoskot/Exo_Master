// Import modules
const express = require("express");
const cors = require('cors');
require('dotenv').config();

// start instance
const app = express();
app.use(express.json());
app.use(cors({
    origin: "*"
}));

// call routers
app.get("/", (req, res) => {
    res.send("hello world")
});

// error handling
app.use((error, req, res, next) => {
    res.status(500).send(error.message);
});

// listen on PORT
app.listen(process.env.PORT, ()=>{ console.log(`Listening on ${process.env.PORT}`)});