import pool from "../config/database.js";


const logIn=async(userName,callBack)=>{
  console.log(userName)
  pool.query(`
    select * from users where user_name=?`,
    [userName],(error,results)=>{
      if(error){
        return callBack(error)
      }else{
        return callBack(null,results)
      }
    })
}

const getAllUsers=async(callBack)=>{
  pool.query(`select * from users`,[],(error,results)=>{
    if(error) return callBack(error)
    return callBack (null,results)
  })
}


export {logIn,getAllUsers};