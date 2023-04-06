import express from 'express';
import { AddProduct,getProducts,getProductByIdController } from './products_controller.js';


const productsRouter=express.Router();

productsRouter.post('/new',AddProduct);
productsRouter.get('/getproducts',getProducts);
productsRouter.get('/:id',getProductByIdController);
export default productsRouter;