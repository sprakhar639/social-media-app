const ImageKit=require('@imagekit/nodejs')


const imagekit = new ImageKit({

    privateKey:"private_EjOTXiOM21i1+KrOYIx5nz/gMZM="
})



async function uploadFile(buffer){
    const result=await imagekit.client.upload({
        file:buffer,
        fileName:req.file.originalname
    })

    return result;
}


module.exports=uploadFile;