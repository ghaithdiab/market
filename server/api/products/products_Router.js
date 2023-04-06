import express from 'express';
import { AddProduct,getProducts,getProductByIdController,UpdateProductController } from './products_controller.js';


const productsRouter=express.Router();

productsRouter.post('/new',AddProduct);
productsRouter.get('/getproducts',getProducts);
productsRouter.get('/:id',getProductByIdController);
productsRouter.put('/:id',UpdateProductController);
export default productsRouter;