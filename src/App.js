import React from 'react';
import './App.css';
import NavBar from './NavBar/NavBar.js';
import Title from './Title.js';
{/* (Use this if you use 'extends Component' for state manipulation... import { render } from '@testing-library/react'; */}


function App() {
  return (
    <div className="App">
      <Title className ="Title"/>
      <header className="App-header">
        <p>
          Click the link to find out what you can do for the movement {/* <code>src/App.js</code> and save to reload.*/}
        </p>
        <a
          className="App-link"
          href="https://blacklivesmatter.carrd.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Black Lives Matter
        </a>
      </header>
    </div>
  );
}

export default App;
