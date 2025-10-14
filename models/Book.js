const mongoose=require("mongoose");

const bookSchema=new mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    inStock:{
        type: Boolean,
        default: true
    }
}, {timestamps: true});

const Book= mongoose.model("Book", bookSchema);
module.exports=Book;