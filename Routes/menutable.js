const express=require("express");
const auth = require("../middleware/auth");

const {menuget,getbyid}=require("../Controllers/menutable");
const app=express();

const route=express.Router();

route.get("/menu",auth,menuget);
route.get("/user/:id",getbyid);

module.exports=route;