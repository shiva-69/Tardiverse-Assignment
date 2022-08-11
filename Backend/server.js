const express = require("express");
const cors= require("cors");
const connectDatabase = require("../Backend/Database/index");
const BookHandler = require("./Routers/BooksRouters");
const UserHandler = require("./Routers/UserRouters");
const app = express();
app.use(cors());
app.use(express.json());
app.use(BookHandler);
app.use(UserHandler);


connectDatabase()
.then(() => {
    app.listen(3001,()=>
    {
        console.log("Server Connected");
    })
})