import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import ProfileCard from "./components/ProfileCard";
import Repo from "./components/Repo";

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar">
          
          <Link className="navchild" to="/">Profile</Link>
          <Link className="navchild" to="/repo">Repositories</Link>
        </nav>
        <Routes>
          
          <Route path="/repo" element={<Repo />} />

          <Route path="/" element={<ProfileCard />} />
        </Routes>
      </Router>

     
    </div>
  );
}

export default App;
