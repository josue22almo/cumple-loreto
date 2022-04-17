import React from 'react';
import CardFrom from './From.svg';
import Back from './Back.svg';
import './App.css';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Carousel variant="dark">
          <Carousel.Item interval={1000}>
            <img src={CardFrom} className="App-logo" alt="logo" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Back} className="App-logo" alt="logo" />
          </Carousel.Item>
        </Carousel>
      </header>
      
    </div>
  );
}

export default App;
