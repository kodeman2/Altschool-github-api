import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { GitHubProvider } from "./components/GITHUBCONTEXT";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

import Navbar from "./components/Navbar";
import RepoDetails from "./components/RepoDetails";
import Repositories from "./components/Repositories";
import Error404 from "./components/Error404";

import "./App.css";

export default function App() {
  return (
    <GitHubProvider>
      <div className="App">
        <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="repositories" element={<Repositories />} />
        <Route path="repositories/:repoName" element={<RepoDetails />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>



      </div>

      </GitHubProvider>
  );
}


