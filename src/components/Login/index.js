import React, { useState, useEffect } from 'react';
import validator from 'validator';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Login.css';
import useInput from './../../hooks/use-input';
import { passValidator } from './../../utils/validator';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login(props) {
  const [isLogged, setIslooged] = useState(false);
  const { setIsAuth } = props;
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailInputError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => validator.isEmail(value));

  const {
    value: enteredPass,
    isValid: passIsValid,
    hasError: passInputError,
    valueChangeHandler: passChangedHandler,
    inputBlurHandler: passBlurHandler,
    reset: resetPass,
  } = useInput((value) => passValidator(value, [6, 0, 0, 0]));

  let isFormValid = false;
  if (emailIsValid && passIsValid) {
    isFormValid = true;
  } else {
    isFormValid = false;
  }

  useEffect(() => {
    console.log(isLogged, 'is logged effect');
    setIsAuth(isLogged);
  }, [isLogged, setIsAuth]);

  const submitHandler = (event) => {
    event.preventDefault();

    if (!emailIsValid) {
      return;
    }

    if (enteredEmail === 'planatest@planatest.com' && enteredPass === '123456') {
      props.setIsAuth(true);
      setIslooged(true);
    }

    resetEmail();
    resetPass();
  };

  const emailInputClassname = !emailInputError ? 'mb-3' : 'mb-3 Login-invalid';
  const passInputClassname = !passInputError ? 'mb-3' : 'mb-3 Login-invalid';

  const loggedInHandler = (event) => {
    console.log(event.target.checked);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>
            Login
            {/* <code>src/App.js</code> and save to reload. */}
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form className="Login-body" onSubmit={submitHandler}>
            <Form.Group className={emailInputClassname} controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter enteredEmail"
                onChange={emailChangedHandler}
                onBlur={emailBlurHandler}
                value={enteredEmail}
                autoComplete="username"
              />
              <Form.Text className="text-muted">{emailInputError && 'Email is invalid'} </Form.Text>
            </Form.Group>

            <Form.Group className={passInputClassname} controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={passChangedHandler}
                onBlur={passBlurHandler}
                value={enteredPass}
                autoComplete="current-password"
              />
              <Form.Text className="text-muted">{passInputError && 'Choose a stringer password'} </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Keep me logged in" onChange={loggedInHandler} />
            </Form.Group>
            <Button disabled={!isFormValid} className="Login-btn" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
