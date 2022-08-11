const express = require("express");
const cors= require("cors");
const connectDatabase = require("../Backend/Database/index");
const app = express();
app.use(cors());
app.use(express.json());


connectDatabase()
.then(() => {
    app.listen(3001,()=>
    {
        console.log("Server Connected");
    })
})