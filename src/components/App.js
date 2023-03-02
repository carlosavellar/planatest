import './App.css';
import Login from './Login';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './../assets/logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} alt="The Movies API" />
      </header>
      <div className="App-body">
        {' '}
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
            <Col></Col>
            <Col>
              <Login />
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
