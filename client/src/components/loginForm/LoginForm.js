import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './LoginForm.css';
export const LoginForm = () => {
    // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);

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
  };
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
