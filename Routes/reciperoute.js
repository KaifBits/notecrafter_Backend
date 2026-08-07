const express = require("express");
const router = express.Router();

const {getDb}=require("../database.js");


// create recipe
router.post("/create/:username", async(req,res)=>{

    try{

        const data=req.body;

        const result=await getDb()
        .collection("recipie")
        .insertOne(data);


        await getDb()
        .collection("user")
        .updateOne(
            {
                username:req.params.username
            },
            {
                $push:{
                    recipie:result.insertedId
                }
            }
        );


        res.status(200).send("recip inserted");


    }catch(err){

        console.log(err);
        res.status(500).send("error");

    }

});


module.exports=router;