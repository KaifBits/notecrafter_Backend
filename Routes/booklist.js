const express=require("express");
const auth = require("../middleware/auth");

const {bookset,bookget}=require("../Controllers/booksetcon.js");
const app=express();

const route=express.Router();

route.post("/book",auth,bookset);
route.get("/book",auth,bookget);


module.exports=route;