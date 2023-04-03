import express from 'express';
import { AddProduct } from './products_controller.js';


const productsRouter=express.Router();

productsRouter.post('/new',AddProduct);


export default productsRouter;