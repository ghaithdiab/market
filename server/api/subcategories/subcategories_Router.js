import express from 'express';
import { addSubcategoriesController } from './subcategories_controller.js';

const subcategoriesRouter=express.Router();


subcategoriesRouter.post('/new',addSubcategoriesController);
// cutomersRouter.get('/getcategories');
// cutomersRouter.get('/:id');
// cutomersRouter.put('/:id');
// cutomersRouter.delete('/:id');


export {subcategoriesRouter};