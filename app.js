const express=require("express");

const menuroute=require("./Routes/menutable.js");
const movroute=require("./Routes/movieslist.js");
const bookroute=require("./Routes/booklist.js");
const userRoute = require("./Routes/userroute"); // Import user routes
const{connectDB,getDb}=require("./database.js");
const cors = require('cors');



const app=express();

connectDB().then(()=>{
   
app.listen(8080,()=>{
   console.log(" server started...");
})
})
app.use(express.json());
app.use(cors());
app.use(menuroute);
app.use(movroute);
app.use(bookroute);


// create new user to our application

app.use(userRoute);

// insert recipes and save it into corresponding user
app.post("/create/:username",(req,res)=>{

async function create(req,res){
   const data=req.body;
  try{
   console.log(data)
   const p=await getDb().collection("recipie").insertOne(data);
   console.log(p);
   const id= p.insertedId;
   
   const user=req.params.username;
   console.log(typeof user);
   const ok=await getDb().collection("user").updateOne({username:user},{$push:{recipie:id}})


   console.log("recipie inserted");
   res.status(200).send("recipie inserted");
  }
  catch(err){

   console.log(err);
   res.status(404).send("recipie not inserted");
  }

}
create(req,res);



}
)

   



