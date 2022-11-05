import { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";
import Loadingspinner from "./Loadingspinner";

// Create a context for the data
export const GithubContext = createContext();

// Create a provider for the data
export const GitHubProvider = ({ children }) => {

  
  // Create a state for the data
  const [userName] = useState("kodeman2");
  const [gitHubRepos, setGitHubRepos] = useState([]);
  const [Loading, setLoading] = useState(false);

  let baseUrl = `https://api.github.com/users/${userName}/repos?per_page=100`; // base url for github api

  // Fetch data from github api
  useEffect(() => {
    setLoading(true);
    axios.get(baseUrl).then((response) => {
      const myRepos = response.data;

      setLoading(false);
      // Set the data to the state
      const filteredRepos = myRepos?.filter((repo) => repo);
      setGitHubRepos(filteredRepos);
    });
  }, [userName]);

  // Return the data and loading state
  return (
    // Pass the data and loading state to the children
    <GithubContext.Provider value={{ gitHubRepos }}>
      {Loading ? <Loadingspinner /> : children}
    </GithubContext.Provider>
  );
};

// Create a custom hook to use the data
export function useGithubRepos() {
  const context = useContext(GithubContext);
  if (!context) {
    throw new Error("useGithubRepos must be used within a GithubProvider");
  }

  // Return the data and loading state
  return context;
}
