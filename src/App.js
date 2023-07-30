import logo from "./logo.svg";
import "./App.css";
import Welcome from "./Welcome";
import About from "./About";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome />
        <About />
        Hola amigo.
      </header>
    </div>
  );
}

export default App;
