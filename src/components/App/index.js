import { useEffect, useState } from 'react';
import './App.css';
import Login from './../Login/';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './../../assets/logo.svg';
import Movies from '../Movies';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    console.log(isAuth, 'app');
    console.log(isAuth ? 'authenticado' : 'Ainda nao');
  }, [isAuth]);

  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} alt="The Movies API" />
      </header>
      <div className="App-body">
        {' '}
        <Container>
          <Row>
            <Col></Col>
            <Col>{!isAuth ? <Login setIsAuth={setIsAuth} /> : <Movies />}</Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
