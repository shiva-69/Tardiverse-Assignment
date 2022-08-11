const express=require("express");
const { register, login } = require("../Handlers/UserHandler");

const UserRouter=express.Router();


UserRouter.post("/register",register);
UserRouter.post("/login",login);

module.exports=UserRouter;