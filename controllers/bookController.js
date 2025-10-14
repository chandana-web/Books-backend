const Book=require("../models/Book");


//Creating book
const createBook=async(req,res)=>{
    const {title,author,genre,price,inStock}=req.body;
    const user_id=req.user._id
    try{
        const book= await Book.create({title,author,genre,price,inStock, user_id});
        res.status(201).json(book);
    }
    catch(err){
        res.status(400).json({error: err.message})
}
}


//Getting all books data in order
const getAllBooks=async(req,res)=>{
    try{
        const booksData=await Book.find().sort({createdAt:-1}); //to keep date top which is added latest
        res.status(200).json(booksData);
    }
    catch(err){
        res.status(400).json({error: err.message})  //destructuring to get only message
}
}

//Getting single book data by ID
const getBook=async(req,res)=>{
    try{
        const bookData= await Book.findById(req.params.id);
        res.status(200).json(bookData);
    }
    catch(err){
        res.status(400).json({error: err.message})
}
}

//Editing book
const editBook=async(req,res)=>{
    try{
        
        const bookData=await Book.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.status(200).json(bookData);
    }
    catch(err){
        res.status(400).json({error: err.message})
}
}

//Deleting Book
const deleteBook=async(req,res)=>{
    try{
        const bookData=await Book.findByIdAndDelete(req.params.id);
        res.status(200).json(bookData);
    }
    catch(err){
         res.status(400).json({error: err.message})
    }
}

module.exports={
    createBook,
    getAllBooks,
    getBook,
    editBook,
    deleteBook,
}