import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import {ErrorBoundary} from 'react-error-boundary'
import { GitHubProvider } from "./components/GITHUBCONTEXT";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

import Navbar from "./components/Navbar";
import RepoDetails from "./components/RepoDetails";
import Repositories from "./components/Repositories";
import Error404 from "./components/Error404";
import ErrorPage from "./components/ErrorPage";

import "./App.css";
import ErrorTest from "./components/ErrorTest";


export default function App() {
  return (
    <GitHubProvider>
      <div className="App">
        <Router>
          <ErrorBoundary >
      <Navbar />
      </ErrorBoundary>
        <ErrorBoundary>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="repositories" element={<Repositories />} />
        <Route path="repositories/:repoName" element={<RepoDetails />} />
        <Route path="*" element={<Error404 />} />
        <Route path="errortest" element={<ErrorTest />} />
        <Route path="errorpage" element={<ErrorPage />} />


      </Routes>
    </ErrorBoundary>
    </Router>


      </div>

      </GitHubProvider>
  );
}


