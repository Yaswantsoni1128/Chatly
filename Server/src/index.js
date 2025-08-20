import dotenv from "dotenv";
dotenv.config();
import { app } from "./app.js";
import { connectDB } from "./db/index.js";

connectDB()
    .then(()=>{
      app.on("error",(err)=>{
        console.log("Mongodb connection failed!!",err);
      })
      app.listen(process.env.PORT, ()=>{
        console.log(`Server started at PORT ${process.env.PORT}`)
      })
    })
    .catch((err)=>{
      console.error("Failed to connect database. ",err);
      process.exit(1);
    })