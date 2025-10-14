require("dotenv").config();
const express=require("express");
const connectDB=require("./config/db")


const app=express();
const port= process.env.PORT ||4000

connectDB(); //connecting to db

app.use(express.json()); //middlewares

//Routes
const bookRoutes=require("./routes/bookRoutes");
const userRoutes=require("./routes/userRoutes");

app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes);


app.listen(port,()=>{
    console.log(`Server is running at port: ${port}`)
})