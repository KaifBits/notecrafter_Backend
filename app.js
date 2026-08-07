require("dotenv").config();
const express=require("express");
const recipieRoute=require("./Routes/reciperoute.js");
const menuroute=require("./Routes/menutable.js");
const movroute=require("./Routes/movieslist.js");
const bookroute=require("./Routes/booklist.js");
const userRoute = require("./Routes/userroute"); // Import user routes
const{connectDB,getDb}=require("./database.js");
const cors = require('cors');



const app=express();
console.log(process.env.JWT_SECRET);
app.use(cors({ origin: '*' }));

connectDB().then(()=>{
   
app.listen(8080,()=>{
   console.log(" server started...");
})
})
app.use(express.json());

app.use(menuroute);
app.use(movroute);
app.use(bookroute);


// create new user to our application

app.use(userRoute);

// insert recipes and save it into corresponding user


   



