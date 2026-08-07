const express=require("express");
const auth = require("../middleware/auth");

const {movieget,movieset,mstatus,plans,getplans}=require("../Controllers/movie");
const app=express();

const route=express.Router();

route.post("/movie/upload",auth,movieset);
route.get("/movies",auth,movieget);
route.post("/movies/:id",mstatus);
route.post("/plans/:username",plans);
route.get("/getplans/:username",getplans);

module.exports=route;