import  express  from "express";
import "dotenv/config.js";
import userRouter from "./api/user_Router.js";
import cors from 'cors'

const app=express();
app.use(cors());
app.use(express.json());
app.use('/',userRouter);

app.listen(process.env.APP_PORT,()=>{
  console.log('server contected with port ',process.env.APP_PORT)
})