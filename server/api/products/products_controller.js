import { addProduct } from "./products_service.js";


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


export {AddProduct}