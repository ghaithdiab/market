import { addProduct,getAllProduct ,getProductById} from "./products_service.js";


const AddProduct=(req,res)=>{
  console.log(typeof req.body)
  addProduct(req.body,(error,result)=>{
    if(error){
      console.error(error);
      res.status(500).json({
        status: 'error',
        message: 'Unable to create product',
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

export {AddProduct,getProducts,getProductByIdController}