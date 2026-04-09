import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";

dotenv.config({ path: "./.env" });

const app = express();

connectDB()
  .then(() => {
    const PORT = process.env.PORT || 8000;

    app.listen(PORT, () => {
      console.log(`Server is running at port: ${PORT}`);
    });

    app.on("error", (error) => {
      console.error("Server Error:", error);
      throw error;
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed !!!", err);
  });


// import express from "express"
// const app = express()

// (async()=> {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/{NAME_DB}`)
//         app.on("error",(error)=> {
//             console.log("ERR:",error);
//             throw error
//         })

//         app.listen(process.env.PORT, ()=> {
//             console.log(`APP is listening on port ${process.env.PORT}`);

//         })
    
//     } catch (error){
//  console.error("ERROR:", error)
//  throw err
//     }
// })( )