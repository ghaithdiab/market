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
  logIn(req.body.data,(error,result)=>{
    if(error){
      return res.status(401).json({
        message:'faild to login',
        isLogedIn:false
      })
    }
    if(result.length>0){
      const user=result[0];
      if(req.body.data.password===user.user_password && req.body.data.user_name===user.user_name){
        return res.status(200).json({
          message: 'login successfully',
          isLogedIn:true
        })
      }else{
        return res.status(400).json({
          message:'faild  to login',
          isLogedIn:false
        })
      }
    }else{
      return res.status(400).json({
        message:'faild to Login',
        isLogedIn:false
      })
    }
  })
}

export {signIn,getTableUsers}