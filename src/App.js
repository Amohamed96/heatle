import Main from "./components/pages/Main";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Main />
      <Link to="/">
        <button>HOME</button>
      </Link>
      <div>
        <Link to="/unlimited">
          <button>UNLIMITED</button>
        </Link>
      </div>
      <div>
        <Link to="/challenge">
          <button>CHALLENGE</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
