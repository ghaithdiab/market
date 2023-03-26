import  express  from "express";
import "dotenv/config.js";
import userRouter from "./api/user_Router.js";

const app=express();
app.use(express.json());
app.use('/',userRouter);

app.listen(process.env.APP_PORT,()=>{
  console.log('server contected with port ',process.env.APP_PORT)
})