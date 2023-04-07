import express from 'express';
import { addCategoriesController, getAllCategoriesController, getCategoryByIdController, updateCategoryController } from './categories_controller.js';

const categoriesRouter=express.Router();


categoriesRouter.post('/new',addCategoriesController);
categoriesRouter.get('/getcategories',getAllCategoriesController);
categoriesRouter.get('/:id',getCategoryByIdController);
categoriesRouter.put('/:id',updateCategoryController);
// productsRouter.delete('/:id');



export default categoriesRouter