const mongoose=require("mongoose");
const connectDB=async()=>{
    try{
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connection is established");
    }
    catch(err){
    console.log(`Error is ${err}`);
    }
}

module.exports=connectDB;

