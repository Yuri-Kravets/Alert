import logo from './logo.svg';
import './App.css';
import Alert from "./components/Alert";

function App() {
  return (
    <div className="App">
      <Alert type="warning" text="what is love?" />
    </div>
  );
}

export default App;
