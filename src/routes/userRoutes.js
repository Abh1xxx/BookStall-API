const { rootbookstall, getAllBooks, addBooks, getBookByTile, deleteBookByTitle } = require("../controllers/userController")
const { validateBook } = require("../middlewares/userMiddlewares")
const userRouter=require("express").Router()

userRouter.get("/",rootbookstall)//bookstall message
userRouter.get("/getAllBooks",getAllBooks)
userRouter.post("/addbook",validateBook,addBooks)
userRouter.get("/getBookByTile/:title",getBookByTile)
userRouter.delete("/deleteBookByTitle/:title",deleteBookByTitle)



module.exports=userRouter