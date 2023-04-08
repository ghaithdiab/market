import pool from "../../config/database.js";



export const addsubcategories=async(subcategoriesInfo,callBack)=>{
  try{
    // Get the subcategories details from subcategoriesInfo
    const {
       subcategory_name,
        category_id,
        description,
        image_filename,
        created_at,
        updated_at} = subcategoriesInfo;
    // Insert the new subcategories into the database
    pool.query(`INSERT INTO subcategories
    (subcategory_name, category_id,description,image_filename,created_at,updated_at) 
    VALUES (?,?,?,?,?,?)`,
      [subcategory_name,category_id,description,image_filename,created_at,updated_at]
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



