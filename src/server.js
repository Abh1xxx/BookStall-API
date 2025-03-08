const express=require('express');
const userRouter = require('./routes/userRoutes');

const app=express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Welcome to the Bookstall API. Your gateway to exploring and managing books is up and running!");
    console.log("Root route accessed --> Bookstall API responded successfully.");
})

app.use('/bookstall',userRouter)

const PORT=4677
app.listen(PORT,()=>{
    console.log("--------------------------------------------------");
    console.log(`🚀 Server is running --> http://localhost:${PORT}`);
    console.log("--------------------------------------------------");
})