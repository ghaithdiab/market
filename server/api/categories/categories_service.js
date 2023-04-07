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




export {addCategories}