const express=require("express");
const {
    createBook,
    getAllBooks,
    getBook,
    editBook,
    deleteBook,
}=require("../controllers/bookController");

const authMiddleware=require("../middleware/authMiddleware")
const router=express.Router();

//Public routes
router.get("/", getAllBooks);
router.get("/:id", getBook);

//Protected routes
router.post("/", authMiddleware ,createBook);
router.put("/:id",authMiddleware, editBook);
router.delete("/:id",authMiddleware, deleteBook);

module.exports=router;
