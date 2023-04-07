import express from 'express';
import { addCategoriesController, getAllCategoriesController, getCategoryByIdController } from './categories_controller.js';

const categoriesRouter=express.Router();


categoriesRouter.post('/new',addCategoriesController);
categoriesRouter.get('/getcategories',getAllCategoriesController);
categoriesRouter.get('/:id',getCategoryByIdController);
// productsRouter.put('/:id');
// productsRouter.delete('/:id');



export default categoriesRouter