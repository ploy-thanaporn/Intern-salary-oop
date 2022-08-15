import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Salarypage from "./components/Salarypage";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/salary" element={<Salarypage />} />
      </Routes>
    </div>
  );
}

export default App;
