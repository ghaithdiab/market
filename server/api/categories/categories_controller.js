import { addCategories } from "./categories_service.js";


const addCategoriesController=(req,res)=>{
  addCategories(req.body,(error,result)=>{
    if(error){
      console.error(error);
      res.status(500).json({
        status: 'error',
        message: error,
      });
    }else {
      // Return the newly created categorie as a response
      res.status(201).json({
        status: 'success',
        data: {
          product: result,
        },
      });
    }
  })
}

export {addCategoriesController}