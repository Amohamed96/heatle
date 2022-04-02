import "./App.css";
import Keyboard from "./components/Keyboard";
import Board from "./components/Board";

function App() {
  return (
    <div className="App">
      <nav>
        <h1>Picto</h1>
      </nav>
      <Board />
      <Keyboard />
    </div>
  );
}

export default App;
