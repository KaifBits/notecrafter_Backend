const express=require("express");
const {movieget,movieset,mstatus,plans,getplans}=require("../Controllers/movie");
const app=express();

const route=express.Router();

route.post("/movie/upload/:username",movieset);
route.get("/movies/:username",movieget);
route.post("/movies/:id",mstatus);
route.post("/plans/:username",plans);
route.get("/getplans/:username",getplans);

module.exports=route;