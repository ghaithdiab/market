import { addsubcategories } from "./subcategories_service.js";




export const addSubcategoriesController=(req,res)=>{
  addsubcategories(req.body,(error,result)=>{
    if(error){
      console.error(error);
      res.status(500).json({
        status: 'error',
        message: error,
      });
    }else {
      // Return the newly created subcategories as a response
      res.status(201).json({
        status: 'success',
        data: {
          product: result,
        },
      });
    }
  })
}
