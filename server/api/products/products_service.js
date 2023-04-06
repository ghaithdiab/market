import pool from "../../config/database.js";


const addProduct=async(productInfo,callBack)=>{
  try{
    // Get the product details from productInfo
    const {product_name,
       description,
       brandName,
       categoryId,
       subcategoryId,
        unit_price,
        unit_quantity,
        quantity_in_stock,
        reorder_level,
        image_filename,
        date_added,
        date_modified} = productInfo;
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


/**
 * fonction for update product
 * @param {*} id  id product
 * @param {*} productInfo info product 
 * @param {*} callBack 
 * @returns error or results
 */
const updateProduct=async(id,productInfo,callBack)=>{
  const product_id=id;
  const {product_name,
     description,
     brand_name,
     category_id,
     subcategory_id,
      unit_price,
      unit_quantity,
      quantity_in_stock,
      reorder_level,
      image_filename,
      date_added,
      date_modified} = productInfo;
  pool.query(`update products set 
  product_name='${product_name}',
  description='${description}',
  brand_name='${brand_name}',
  category_id=${category_id},
  subcategory_id=${subcategory_id},
  unit_price=${unit_price},
  unit_quantity='${unit_quantity}',
  quantity_in_stock=${quantity_in_stock},
  reorder_level=${reorder_level},
  image_filename='${image_filename}',
  date_added=${date_added},
  date_modified=${date_modified}
  where product_id=${product_id}
  `,(error,results)=>{
    if(error){
      return callBack(error)
    }else{
      return callBack(null,results)
    }
  })

}

const deleteProduct=async(id,callBack)=>{
  console.log(id)
  pool.query(`delete from products where product_id=${id}`,(error,results)=>{
    if(error){
      return callBack(error)
    }else{
      return callBack(results)
    }
  })
}

export{addProduct,getAllProduct,getProductById,updateProduct,deleteProduct}