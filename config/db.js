const mongoose=require("mongoose");
const connectDB=async()=>{
    try{
    await mongoose.connect("mongodb://localhost:27017/Backend-Module");
    console.log("Connection is established");
    }
    catch(err){
    console.log(`Error is ${err}`);
    }
}

module.exports=connectDB;

