import mongoose from "mongoose";


export const connectDB = ()=> { 
    mongoose.connect(process.env.MONGO_URI,{
    dbName: "backendapi",
})
.then(()=> console.log("MONGOdb Database Connected ;)"))
.catch((e)=>console.log(e));
};