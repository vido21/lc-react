import logo from './logo.svg';
import Another from './Another';
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function decrement() {
    setCount(prevCount => prevCount - 1);
  }

  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  const someStyle = {
    background: 'blue',
    color: 'white',
    fontSize: '28px',
    fontW: 'blue',
  }

  return (
    <div className="App">
      <header className="App-header">
        <Another name="Test"></Another>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p style={someStyle}>{count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
