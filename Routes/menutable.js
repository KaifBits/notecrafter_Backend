const express=require("express");
const {menuget,getbyid}=require("../Controllers/menutable");
const app=express();

const route=express.Router();

route.get("/menu/:username",menuget);
route.get("/user/:id",getbyid);

module.exports=route;