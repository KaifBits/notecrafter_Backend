const {getDb}=require("../database");
const { ObjectId } = require('mongodb');




    

            async function menuget(req,res){
            
            try{
            
            const arr=[];
            const user=req.params.username;
            console.log(typeof user);
            const da=await getDb().collection("user").findOne({username:user});
            const data=da.recipie;
            console.log(data);
            for(let i=0;i<data.length;i++){
                
                    console.log(data[i]);
                    const obj=await getDb().collection("recipie").findOne({_id:data[i]})
                    console.log(obj);
                    arr.push(obj);
                
                
            
                
            }
            if(arr.length===data.length){
                res.status(200).send(arr);
            }
        
            
                
            
            
            
            }
            catch(err){
            
            console.log(err);
            res.status(404).send("not found");
            }
            
            }
            async function getbyid(req,res){
            
                try{
                
                
                const id=new ObjectId(req.params.id);
                console.log(typeof id);
               
              
                    
                        
                        const obj=await getDb().collection("recipie").findOne({_id:id})
                        console.log(obj);
                       
                    
                
                    
                
                
                    res.status(200).send(obj);
                
            
                
                    
                
                
                
                }
                catch(err){
                
                console.log(err);
                res.status(404).send("not found");
                }
                
                }
            
        
        
  module.exports={menuget,getbyid}  ;    
        
        





