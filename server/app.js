import  express  from "express";
import "dotenv/config.js";
import userRouter from "./api/users/user_Router.js";
import cors from 'cors'
import productsRouter from "./api/products/products_Router.js";
import bodyParser from "body-parser";
import categoriesRouter from "./api/categories/categories_Router.js";
const app=express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/',userRouter);
app.use('/products',productsRouter);
app.use('/categories',categoriesRouter);

app.listen(process.env.APP_PORT,()=>{
  console.log('server contected with port ',process.env.APP_PORT)
})