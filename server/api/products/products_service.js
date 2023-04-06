import pool from "../../config/database.js";


const addProduct=async(productInfo,callBack)=>{
  try{
    console.log(productInfo)
    // Get the product details from productInfo
    const {product_name, description,brandName,categoryId,subcategoryId, unit_price,unit_quantity,quantity_in_stock,reorder_level,image_filename,date_added,date_modified} = productInfo;
    // Insert the new product into the database
    pool.query(`INSERT INTO products (product_name, description,brand_name,category_id,subcategory_id,unit_price,unit_quantity,quantity_in_stock,reorder_level,image_filename,date_added,date_modified) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`,
      [product_name,description,brandName,categoryId,subcategoryId,unit_price,unit_quantity,quantity_in_stock,reorder_level,image_filename,date_added,date_modified]
      ,(error,results)=>{
        if(error){
          return callBack(error)
        }else{
          return callBack(null,results)
        }
      });
  }catch(err){
    return callBack(error)
  }
}

/**
 * function for get All products
 * @param {*} callBack 
 */
const getAllProduct=async(callBack)=>{
  pool.query(`select * from products`,(error,results)=>{
    if(error){
      return callBack(error)
    }else{
      return callBack(null,results);
    }
  })
}

const getProductById=async(id,callBack)=>{
  const productId=id;
  pool.query(`select * from products where product_id=${productId}`,(error,results)=>{
    if(error){
      return callBack(error)
    }else{
      return callBack(null,results)
    }
  })
}


export{addProduct,getAllProduct,getProductById}