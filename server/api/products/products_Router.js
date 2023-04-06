import express from 'express';
import { AddProduct,getProducts } from './products_controller.js';


const productsRouter=express.Router();

productsRouter.post('/new',AddProduct);
productsRouter.get('/getproducts',getProducts);

export default productsRouter;