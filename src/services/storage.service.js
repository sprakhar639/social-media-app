const Imagekit=require("@imagekit/nodejs")


const imagekit=new Imagekit({

 privateKey:"private_EjOTXiOM21i1+KrOYIx5nz/gMZM="
})


async function uploadFile(buffer){
    const result=await ImageTrackList.client.upload({
        file:buffer.toString("base64"),
        fileName:"image.jpg"
    })
    

    return result;
}


module.exports=uploadFile;