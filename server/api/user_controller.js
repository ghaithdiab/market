import {logIn, getAllUsers} from "./user_service.js";

const getTableUsers=(req,res)=>{
  getAllUsers((error,results)=>{
    if(error) {
      console.log(error)
      return res.status(400).json({
        success:0,
        message:error
      })
    }
    return res.status(200).json({
      success:1,
      message:results
    })
  })
}

const signIn=(req,res)=>{
  console.log(req.body.userName)
  logIn(req.body.userName,(error,result)=>{
    if(error){
      return res.status(401).json({
        message:'faild to login',
        isLogedIn:false
      })
    }
    console.log(result)
    if(result.length>0){
      const user=result[0];
      if(req.body.password===user.user_password && req.body.userName===user.user_name){
        return res.status(200).json({
          message: 'login successfully',
          isLogedIn:true
        })
      }else{
        return res.status(200).json({
          message:'faild  to login',
          isLogedIn:false
        })
      }
    }else{
      return res.status(200).json({
        message:'faild to Login no data found in data base',
        isLogedIn:false
      })
    }
  })
}

export {signIn,getTableUsers}