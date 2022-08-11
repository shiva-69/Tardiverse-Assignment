const express=require("express");
const { AddBook, FindAllBooks } = require("../Handlers/BookHandler");


const BooksRouter=express.Router();


BooksRouter.get("/books",FindAllBooks);
BooksRouter.post("/books",AddBook);

module.exports=BooksRouter;