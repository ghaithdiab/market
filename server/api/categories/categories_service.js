import pool from "../../config/database.js";


/**
 * add new category 
 * @param {*} categoriesInfo 
 * @param {*} callBack 
 * @returns category added 
 */

const addCategories=async(categoriesInfo,callBack)=>{
  try{
    // Get the category details from categoriesInfo
    const {category_name,
       parent_category_id,
        description,
        image_filename,
        created_at,
        updated_at} = categoriesInfo;
    // Insert the new categories into the database
    pool.query(`INSERT INTO categories
    (category_name, parent_category_id,description,image_filename,created_at,updated_at) 
    VALUES (?,?,?,?,?,?)`,
      [category_name,parent_category_id,description,image_filename,created_at,updated_at]
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
 * get all categories
 * @param {*} callBack 
 */
const getAllCategories=async(callBack)=>{
  pool.query(`select * from categories`,(error,results)=>{
    if(error){
      return callBack(error)
    }else{
      return callBack(null,results);
    }
  })
}

/**
 * get category By id 
 * @param {*} id  id of category 
 * @param {*} callBack 
 */
const getCategoriesById=async(id,callBack)=>{
  const categoryId=id;
  pool.query(`select * from categories where category_id=${categoryId}`,(error,results)=>{
    if(error){
      return callBack(error)
    }else{
      return callBack(null,results)
    }
  })
}

const updateCategory=async(id,categoryInfo,callBack)=>{
  const categoryId=id;
  const {category_name,
    parent_category_id,
    description,
    image_filename,
    created_at,
    updated_at,} = categoryInfo;
  pool.query(`update categories set 
  category_name='${category_name}',
  parent_category_id=${parent_category_id},
  description='${description}',
  image_filename='${image_filename}',
  created_at=${created_at},
  updated_at=${updated_at}
  where category_id=${categoryId}
  `,(error,results)=>{
    if(error){
      return callBack(error)
    }else{
      return callBack(null,results)
    }
  })

}


export {addCategories,getAllCategories,getCategoriesById,updateCategory}