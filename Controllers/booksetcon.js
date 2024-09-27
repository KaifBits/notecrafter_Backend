const {getDb}=require("../database");
const { ObjectId } = require('mongodb');




    

            async function bookset(req,res){
            
            try{
            
            const arr=[];
            const user=req.params.username;
            console.log( user);
            const p=await getDb().collection("booklist").insertOne(req.body);
            const id= p.insertedId;
   
          
            console.log(typeof user);
            const ok=await getDb().collection("user").updateOne({username:user},{$push:{books:id}})
            console.log("done ",ok);
        
            
                
            res.status(200).send("book inserted");
            
            
            }
            catch(err){
            
            console.log(err);
            res.status(500).send("book not inserted");
            }
            
            }
            async function bookget(req,res){
            
                try{
                const arr=[]
                 const name=req.params.username;
                 const userdata=await getDb().collection("user").findOne({username:name});
                 console.log(userdata)
                 if(userdata){
                 for (const val of userdata.books) {
                    async function n(val) {
                      const movie = await getDb().collection("booklist").findOne({ _id: val });
                      console.log(movie);
                      arr.push(movie);
                    }
                    await n(val); 
                  }
                console.log(arr);
                res.status(200).send(arr);
                
                }
                else{
                    res.status(200).send([]);
                }
            }
           
                catch(err){
                
                console.log(err);
                res.status(500).send(null);
                }
                
                }
                
        
        
  module.exports={bookset,bookget}  ;    
        
        





