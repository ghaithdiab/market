import { addProduct,getAllProduct ,getProductById,updateProduct,deleteProduct} from "./products_service.js";


const AddProduct=(req,res)=>{
  addProduct(req.body,(error,result)=>{
    if(error){
      console.error(error);
      res.status(500).json({
        status: 'error',
        message: error,
      });
    }else {
      // Return the newly created product as a response
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
 * 
 */
const getProducts=(req,res)=>{
  getAllProduct((error,result)=>{
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

/**
 * get product By id 
 * @param {*} req 
 * @param {*} res 
 */
const getProductByIdController=(req,res)=>{
  getProductById(req.params.id,(error,result)=>{
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


const UpdateProductController=(req,res)=>{
  if(req.params.id && req.body){
    updateProduct(req.params.id,req.body,(error,results)=>{
      if(error){
        res.status(400).json({
          status:'faild to update',
          message:error
        })
      }else{
        res.status(200).json({
          status:'product updated successfully',
          message:results
        })
      }
    })
  }else{
    res.status(400).json({
      status:'faild',
      message:'id or info not exist for the prosuct'
    })
  }
}

const deleteProductController=(req,res)=>{
  if(req.params.id){
    deleteProduct(req.params.id,(error,results)=>{
      if(error){
        res.status(400).json({
          satus:'faild to delete',
          message:error
        })
      }else{
        res.status(200).json({
          status:'product deleted',
          message:results
        })
      }
    })
  }else{
    res.status(400).json({
      status:'faild',
      message:'no id found'
    })
  }
}

export {AddProduct,getProducts,getProductByIdController,UpdateProductController,deleteProductController}