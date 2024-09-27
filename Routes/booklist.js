const express=require("express");
const {bookset,bookget}=require("../Controllers/booksetcon.js");
const app=express();

const route=express.Router();

route.post("/book/upload/:username",bookset);
route.get("/book/:username",bookget);


module.exports=route;