import express from 'express';
import { addCategoriesController, deleteCategoryController, getAllCategoriesController, getCategoryByIdController, updateCategoryController } from './categories_controller.js';

const categoriesRouter=express.Router();


categoriesRouter.post('/new',addCategoriesController);
categoriesRouter.get('/getcategories',getAllCategoriesController);
categoriesRouter.get('/:id',getCategoryByIdController);
categoriesRouter.put('/:id',updateCategoryController);
categoriesRouter.delete('/:id',deleteCategoryController);



export default categoriesRouter