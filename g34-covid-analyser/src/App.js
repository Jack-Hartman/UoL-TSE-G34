import logo from './logo.svg';
import './App.css';
import { Label } from './Components/Label';
import { Card } from './Components/Card/Card';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className='container'>
        <div className='row'>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
