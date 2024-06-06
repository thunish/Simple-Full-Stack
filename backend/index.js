// backend/index.js
const express = require('express');
const cors = require("cors");
const rootRouter = require("./routes/index");
require("dotenv").config()
const port = process.env.port || 3001

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

app.listen(port,()=>{
    console.log("Server is running on port ", +port)
});