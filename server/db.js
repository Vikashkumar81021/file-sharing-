import mongoose from "mongoose";


const DBconnection=async()=>{
    const MongoURL="mongodb://localhost:27017/fileShare"
    try {
       await mongoose.connect(MongoURL,
            {useNewUrlParser:true})
            console.log("database connection succesfully");
        
    } catch (error) {
       console.log("Error while connecting database",error.message) 
    }
}

export default DBconnection