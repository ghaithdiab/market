import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './LoginForm.css';
import api from '../../api/requests.js';
import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';
export const LoginForm = () => {
  const [userName,setuserName]=useState("");
  const [password,setpassword]=useState("");
  const [UserData,setUserData]=useState({
    userName:"",
    password:""
  })
  const [validated, setValidated] = useState(false);
  const { auth } = useAuth();

  // function handleLogin(event) {
  //   event.preventDefault();
  //   // TODO: Handle login logic
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    console.log(UserData)
    serverValidation(UserData).then(res=>{
      if(res.isLogedIn){
        console.log(auth)
        // auth.user=true
        return <Navigate to='/admin'/>
      }
    });
    event.preventDefault();
  
  };
  const serverValidation= async(UserData)=>{
    console.log(UserData)
    const response= await api.post('/login',UserData)
    return response.data
  }
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
    <Row className="mb-3">
      <Form.Group  md="4" controlId="validationCustom01">
        <Form.Label>UserName :</Form.Label>
        <Form.Control
          required
          type="text"
          onChange={(e)=>{
            setuserName(e.target.value)
            setUserData({...UserData,userName:e.target.value})
          }}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
        </Row>
      <Row>
      <Form.Group md="4" controlId="validationCustom02">
        <Form.Label>Password :</Form.Label>
        <Form.Control
          required
          type="password"
          onChange={(e)=>{
            setpassword(e.target.value)
            setUserData({...UserData,password:e.target.value})
          }}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      </Row>
      <div className='submit-btn'>
        <Button type="submit">Log In</Button>
      </div>
  </Form>
  )
}
