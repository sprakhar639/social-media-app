const mongoose =require('mongoose')

async function connectDB(){
    await mongoose.connect("mongodb+srv://yt:1234q5678@comback.elxacof.mongodb.net/Project1")
    console.log("connect to DB")
}


module.exports=connectDB;