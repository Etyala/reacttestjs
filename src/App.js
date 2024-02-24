import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Click on Below link to know about
        </p>
        <a
          className="App-link"
          href="https://about.me/deekshithetyala"
          target="_blank"
          rel="noopener noreferrer"
        >
          Amazing Developer
        </a>
      </header>
    </div>
  );
}

export default App;
