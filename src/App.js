import { useState } from "react";
import "./App.css";
import Authentication from "./components/Authentication";
import Greeting from "./components/Greeting";

function App() {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);

  const isLoggedIn = !!token;

  return (
    <div className="App">
      {!isLoggedIn && <Authentication setToken={setToken} />}
      {isLoggedIn && <Greeting setToken={setToken} />}
    </div>
  );
}

export default App;
