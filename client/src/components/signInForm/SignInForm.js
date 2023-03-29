import React from 'react'
import { useRef,useState,useEffect } from 'react';
import api from '../../api/requests.js';
import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Link,useNavigate,useLocation } from 'react-router-dom';

export const SignInForm = () => {
  const {setAuth}=useAuth();
  const navigate=useNavigate();
  const location=useLocation();
  const from= location.state?.from?.pathname ||"/"
 const userRef = useRef();
 const errRef = useRef();
 const [user, setUser] = useState('');
 const [pwd, setPwd] = useState('');
 const [errMsg, setErrMsg] = useState('');
 const [success, setSuccess] = useState(false);
  useEffect(()=>{
    userRef.current.focus();
  },[])
  useEffect(()=>{
    setErrMsg('');
  },[user,pwd])

  const handelSubmit=async(e)=>{
    e.preventDefault();
    try{
      const response=await api.post('/login',{userName:user,password:pwd}
      ) 
      console.log(response?.data)
      if(response?.data.isLogedIn){
        setAuth({user,pwd})
        navigate('/admin', {replace:true})
      }
    }catch(err){
      if(!err?.response){
        setErrMsg('No server response')
      }else if(err.response?.status){
        setErrMsg('')
      }
    }
  }
  return (
    <>
    {success ? (
      <section>
        <h1>Tou are loged in </h1>
      </section>
    ): (
      <section>
      <p ref={errRef} className={errMsg ? "errmsg":"offscreen"}>{errMsg}</p>
      <form onSubmit={handelSubmit}>
        <label htmlFor='username'>UserName: </label>
        <input type="text"
        id='username'
        ref={userRef}
        autoComplete="off"
        onChange={(e)=>setUser(e.target.value)}
        value={user}
        required/>
        <label htmlFor='password'>password: </label>
        <input type="password"
        id='password'
        autoComplete="off"
        onChange={(e)=>setPwd(e.target.value)}
        value={pwd}
        required/>
        <button>Sign In</button>
      </form>
    </section>
    )}
    </>
  )
}
