const {getDb}=require("../database");
const { ObjectId } = require('mongodb');




    

            async function movieset(req,res){
            
            try{
            
            const arr=[];
            const user=req.params.username;
            console.log( user);
            const p=await getDb().collection("movieslist").insertOne(req.body);
            const id= p.insertedId;
   
          
            console.log(typeof user);
            const ok=await getDb().collection("user").updateOne({username:user},{$push:{movies:id}})
            console.log("done ",ok);
        
            
                
            res.status(200).send("movie inserted");
            
            
            }
            catch(err){
            
            console.log(err);
            res.status(500).send("not inserted");
            }
            
            }
            async function movieget(req,res){
            
                try{
                const arr=[]
                 const name=req.params.username;
                 const userdata=await getDb().collection("user").findOne({username:name});
                 console.log(userdata)
                 if(userdata){
                 for (const val of userdata.movies) {
                    async function n(val) {
                      const movie = await getDb().collection("movieslist").findOne({ _id: val });
                      console.log(movie);
                      arr.push(movie);
                    }
                    await n(val); // Use `await` here to ensure each function execution completes before moving to the next
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
                async function mstatus(req,res){
            
                  try{
                  id=req.params.id;
                 
             
                        const movie = await getDb().collection("movieslist").updateOne({_id:new ObjectId(id)},{$set:{watched:true}});
                        console.log(movie);
                        if(movie){
                          console.log(movie);
                  res.status(200).send(movie);
                  
                        }
                        else{
                          res.status(500).send(null);
                        }
                      
                    
                    
                  
                  
                  }
             
                  catch(err){
                  
                  console.log(err);
                  res.status(500).send(null);
                  }
                  
                }  
                async function plans(req,res){
            
                  try{
                  const name=req.params.username;
                 
             
                        const movie = await getDb().collection("user").updateOne({username:name},{$set:{plans:req.body}});
                        console.log(movie);
                        if(movie){
                          console.log(movie);
                  res.status(200).send(movie);
                  
                        }
                        else{
                          res.status(500).send(null);
                        }
                      
                    
                    
                  
                  
                  }
             
                  catch(err){
                  
                  console.log(err);
                  res.status(500).send(null);
                  }
                  
                }
                async function getplans(req,res){
            
                  try{
                  const name=req.params.username;
                 
             
                        const ok = await getDb().collection("user").findOne({username:name});
                        console.log(ok);
                        if(ok){
                          console.log(ok);
                  res.status(200).send(ok);
                  
                        }
                        else{
                          res.status(500).send(null);
                        }
                      
                    
                    
                  
                  
                  }
             
                  catch(err){
                  
                  console.log(err);
                  res.status(500).send(null);
                  }
                  
                } 
           
           
        
        
  module.exports={movieset,movieget,mstatus,plans,getplans}  ;    
        
        





