const User=require("../models/User");



const signupUser=async(req,res)=>{
    const {name, email, password}=req.body;
    try{
        const user= await User.signup(name, email, password);
        res.status(201).json({user});

    }catch(err){
        res.status(400).json({error: err.message})
    }
}


const loginUser=async(req,res)=>{
    const {email, password}=req.body;
    try{
        const {user, token}= await User.login(email, password);
        res.status(200).json({user, token});
    }catch(err){
        res.status(400).json({error: err.message})
    }
}




module.exports={
    signupUser,
    loginUser,
}