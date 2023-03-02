import React from 'react';
import './Login.css';
import useInput from './../../hooks/use-input';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailInputError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.trim() !== '');

  let isFormValid = false;
  if (emailIsValid) {
    isFormValid = true;
  } else {
    isFormValid = false;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!emailIsValid) {
      return;
    }

    resetEmail();
  };

  const emailInputClassname = !emailIsValid ? 'mb-3 Login-invalid' : 'mb-3';

  return (
    <Form className="Login-body" onSubmit={submitHandler}>
      <Form.Group className={emailInputClassname} controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter enteredEmail"
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        <Form.Text className="text-muted">{emailInputError && 'Email is invalid'} </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="enteredPassword" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Keep me logged in" />
      </Form.Group>
      <Button disabled={!isFormValid} className="Login-btn" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;
