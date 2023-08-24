import holbertonLogo from "./holbertonLogo.jpg";
import './App.css';
import { getFullYear, getFooterCopy } from "./utils";

function App() {
  let indexVal = true;
  return (
    <div className="App">
      <header className="App-header">
        <img src={holbertonLogo} className="App-logo"/>
        <h1>School dashboard</h1>
      </header>
      <main className="App-body">
        <p>Login to access the full dashboard</p>
      </main>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(indexVal)}</p>
      </footer>
    </div>
  );
}

export default App;
