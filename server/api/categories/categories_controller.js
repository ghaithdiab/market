import { addCategories, getAllCategories, getCategoriesById } from "./categories_service.js";


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

/**
 * get All categories
 * @param {*} req 
 * @param {*} res 
 */
const getAllCategoriesController=(req,res)=>{
  getAllCategories((error,result)=>{
    if(error){
      res.status(400).json({
        status:'faild to get categories',
        message:error
      })
    }else{
      res.status(200).json({
        status:'success',
        data:result
      })
    }
  })
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getCategoryByIdController=(req,res)=>{
  getCategoriesById(req.params.id,(error,result)=>{
    if(error){
      res.status(400).json({
        status:'faild',
        message:error
      })
    }else{
      res.status(200).json({
        status:'success',
        data:result
      })
    }
  })
}

export {addCategoriesController,getAllCategoriesController,getCategoryByIdController}