import React, { useState, useEffect } from 'react';
import './Login.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
  const [enteredEmail, setEmail] = useState('');
  const [enteredPassword, setPassword] = useState('');
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredEmailInputChangeHandler = (event) => {
    setEmail(event.target.value);
    if (enteredEmail.trim() !== '') {
      setEnteredEmailIsValid(true);
    }
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
    if (enteredEmail.trim() === '') {
      setEnteredEmailIsValid(false);
    }
  };

  const passInputChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setEnteredEmailTouched(true);
    if (enteredEmail.trim() === '') {
      setEnteredEmailIsValid(false);
      return;
    }
    setEnteredEmailIsValid(true);
    setEmail('');
  };

  useEffect(() => {
    if (enteredEmailIsValid) {
      console.log(enteredEmailIsValid);
    }
  }, [enteredEmailIsValid]);

  const emailInputIsValid = !enteredEmailIsValid && enteredEmailTouched;

  const emailInputClassname = emailInputIsValid ? 'mb-3 Login-invalid' : 'mb-3';

  return (
    <Form className="Login-body" onSubmit={submitHandler}>
      <Form.Group className={emailInputClassname} controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="enteredEmail"
          placeholder="Enter enteredEmail"
          onChange={enteredEmailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        <Form.Text className="text-muted">{emailInputIsValid && 'Email is invalid'} </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="enteredPassword" placeholder="Password" onChange={passInputChangeHandler} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Keep me logged in" />
      </Form.Group>
      <Button className="Login-btn" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;
