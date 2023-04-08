// import pool from "../../config/database.js";


// const addCustomer=async(customerInfo,callBack)=>{
//   try{
//     // Get the customer details from customerinof
//     const {full_name,
//        email,
//         password,
//         phone,
//         address,
//         city,
//         state,
//         zip_code,
//         country,
//         created_at,
//         updated_at} = customerInfo;
//     // Insert the new categories into the database
//     pool.query(`INSERT INTO customers
//     (category_name, parent_category_id,description,image_filename,created_at,updated_at) 
//     VALUES (?,?,?,?,?,?)`,
//       [category_name,parent_category_id,description,image_filename,created_at,updated_at]
//       ,(error,results)=>{
//         if(error){
//           return callBack(error)
//         }else{
//           return callBack(null,results)
//         }
//       });
//   }catch(err){
//     return callBack(error)
//   }
// }