const mongoose=require("mongoose");
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")


const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required: true
    }
})

//Register new user
userSchema.statics.signup=async(name, email, password)=>{
    const exists=await User.findOne({email});
    if(exists){
        throw Error("Email already exist!");
    }
    const salt= await bcrypt.genSalt(10);
    const hash= await bcrypt.hash(password, salt);

    const user=await User.create({name, email, password:hash})
    return user;
}


//Login user
userSchema.statics.login=async(email,password)=>{
    const user=await User.findOne({email});
    if(!user){
        throw Error("Incorrect email");
    }
    const match=await bcrypt.compare(password, user.password);
    if(!match){
        throw Error("Incorrect password")
    }
    
    const token= jwt.sign({_id: user._id, email: user.email}, process.env.JWT_SECRET, {
        expiresIn:"3d"
    })

    return {user, token};
}


const User= mongoose.model("User", userSchema);
module.exports=User;