import  express  from "express";
import "dotenv/config.js";

const app=express();
app.use(express.json());


app.listen(process.env.APP_PORT,()=>{
  console.log('server contected')
})