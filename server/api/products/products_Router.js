import express from 'express';
import { AddProduct,getProducts,getProductByIdController,UpdateProductController, deleteProductController } from './products_controller.js';


const productsRouter=express.Router();

productsRouter.post('/new',AddProduct);
productsRouter.get('/getproducts',getProducts);
productsRouter.get('/:id',getProductByIdController);
productsRouter.put('/:id',UpdateProductController);
productsRouter.delete('/:id',deleteProductController);
export default productsRouter;