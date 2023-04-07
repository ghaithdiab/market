import express from 'express';
import { addCategoriesController, getAllCategoriesController } from './categories_controller.js';

const categoriesRouter=express.Router();


categoriesRouter.post('/new',addCategoriesController);
categoriesRouter.get('/getcategories',getAllCategoriesController);
// productsRouter.get('/:id');
// productsRouter.put('/:id');
// productsRouter.delete('/:id');



export default categoriesRouter