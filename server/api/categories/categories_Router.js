import express from 'express';
import { addCategoriesController } from './categories_controller.js';

const categoriesRouter=express.Router();


categoriesRouter.post('/new',addCategoriesController);
// productsRouter.get('/getproducts');
// productsRouter.get('/:id');
// productsRouter.put('/:id');
// productsRouter.delete('/:id');



export default categoriesRouter