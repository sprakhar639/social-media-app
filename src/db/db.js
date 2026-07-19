const mongoose=require("mongoose");

async function connectDB(){
    await mongoose.connect("mongodb+srv://yt:1234q5678@comback.elxacof.mongodb.net/social-media")
     console.log("connected to db")
}


module.exports=connectDB;