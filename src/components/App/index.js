import { useEffect, useState } from 'react';
import { useSelector, connect } from 'react-redux';
import './App.css';
import Login from './../Login/';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './../../assets/logo.svg';
import Movies from '../Movies';
import { getMoviesRequest } from '../../actions';
import axios from 'axios';

function App(props) {
  const [isAuth, setIsAuth] = useState(false);
  // props.getMoviesRequest();

  const movies = useSelector((state) => state);
  const fetchData = async () => {
    const result = await fetch(
      'https://api.themoviedb.org/3/trending/all/day?api_key=e11274943e564338428e48ffc1fa3059',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        return responseData;
      })
      .catch((err) => {
        console.log(err.message);
      });
    return result;
  };

  useEffect(() => {
    fetchData();
    props.getMoviesRequest();
  }, []);

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

const mapStateToProps = (state) => {
  debugger;
  return {
    movies: state.movies,
  };
};

export default connect(mapStateToProps)(App);

// export default App;
