import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './LoginForm.css';
import api from './../../util/requests.js';
import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';
export const LoginForm = () => {
  const [userData,setUserData]=useState({})
  const [validated, setValidated] = useState(false);
  const { auth } = useAuth();

  // function handleLogin(event) {
  //   event.preventDefault();
  //   // TODO: Handle login logic
  // }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    setUserData({
      userName:event.target[0].value,
      password:event.target[1].value
    })
    const res= serverValidation(userData);
    if(res.isLogedIn){
      auth.user=true
      return <Navigate to='/admin'/>
    }
    event.preventDefault();
  
  };
  const serverValidation= async(userData)=>{
    console.log(userData)
    const response= await api.get('/login',{
      method:'POST',
      body:JSON.stringify(userData)
      
    })
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
