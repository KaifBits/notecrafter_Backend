const {getDb}=require("../database");
const { ObjectId } = require('mongodb');




    //first find userdetails by username
    // then search related receive menu array of that user

            async function menuget(req,res){
            
            try{
            
            const arr=[];
           const id = req.user.userId;
            console.log(typeof user);
const currentUser = await getDb()
    .collection("user")
    .findOne({
        _id: new ObjectId(id)
    });
                const data= currentUser.recipie;
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
            //all details of a particular recipie
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
        
        





