import React from 'react';
import { useRef,useState,useEffect } from 'react';
import api from '../../api/requests.js';
import useAuth from '../../hooks/useAuth';
import {useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import LoginIcon from '@mui/icons-material/Login';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
// import Alert from '@mui/material/Alert';
// import MuiAlert, { AlertProps } from '@mui/material/Alert';
import './SignInForm.css';
import { makeStyles } from '@material-ui/styles';

// const Alert = React.forwardRef<HTMLDivElement,AlertProps>(function Alert(){

// })
const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiInputLabel-root': {
      fontWeight:'bold',
      fontSize:'20px'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#ccc', // customize the color of the underline
    },
  },
}));


export const SignInForm = () => {
  const classes=useStyles();
  const {setAuth}=useAuth();
  const navigate=useNavigate();
  // const location=useLocation();
//  const userRef = useRef();
//  const errRef = useRef();
 const [user, setUser] = useState('');
 const [pwd, setPwd] = useState('');
 const [error, setError] = useState(false);

  useEffect(()=>{
    // userRef.current.focus();
  },[])
  useEffect(()=>{
    setError(false);
  },[user,pwd])

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setError(false);
  };
  const handelSubmit=async(e)=>{
    e.preventDefault();
    try{
      const response=await api.post('/login',{userName:user,password:pwd}
      ) 
      console.log(response?.data)
      if(response?.data.isLogedIn){
        setAuth({user,pwd})
        navigate('/admin', {replace:true})
      }else{
        setError(true)
      }
    }catch(err){
      if(!err?.response){
        setError(true)
      }else if(err.response?.status){
        setError(true)
      }
    }
  }
  return (
    <>
      <section>
      <div className='logo'></div>
      <form onSubmit={handelSubmit} className='form'>
        <div className=''>
        <TextField
          variant="standard"
          id="outlined-basic"
          label="اسم المستخدم :"
          className={classes.root}
          value={user}
          onChange={(e)=>setUser(e.target.value)}
          autoComplete='off'
        />
        </div>
        <div>
        <TextField
          variant="standard"
          id="outlined-basic"
          label="كلمة المرور :"
          className={classes.root}
          value={pwd}
          onChange={(e)=>setPwd(e.target.value)}
          autoComplete='off'
        />
        </div>
        <Stack direction="row"  spacing={2}>
          <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            المعلومات غير صحيحة يرجى إعادة المحاولة
          </Alert>
          </Snackbar>
        </Stack>
      </form>
      <Button variant='contained' startIcon={<LoginIcon/>}
            onClick={handelSubmit}
            className='btn'
          >
             تسجيل الدخول 
          </Button>
    </section>
    </>
  )
}
