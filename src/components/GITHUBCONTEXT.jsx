import {useContext, useState, useEffect, createContext } from 'react';

import axios from 'axios';
import Loadingspinner from './Loadingspinner';


export const GithubContext = createContext();


export const GitHubProvider = ({children}) => {
 const [userName] = useState('kodeman2');
 const [gitHubRepos, setGitHubRepos] = useState([]);
 const [Loading, setLoading] = useState(false);

 
 let baseUrl = `https://api.github.com/users/${userName}/repos?per_page=100`; // base url for github api
 
 useEffect(() => {
  setLoading(true);
  axios.get(baseUrl)
  .then(response => {
   setTimeout(() => {
    const myRepos = response.data;
    setLoading(false);
   const filteredRepos = myRepos?.filter((repo) => repo);
   setGitHubRepos(filteredRepos);
   }, 2000);
  
  })
 }, [  userName]);

 return (
  
  <GithubContext.Provider value={{gitHubRepos}}> 

   {Loading ? (<Loadingspinner />) : (children)}
  
  </GithubContext.Provider>
 )
}

export function useGithubRepos() {

const context = useContext(GithubContext);
if (!context) {
 throw new Error('useGithubRepos must be used within a GithubProvider');

}
return context;
}