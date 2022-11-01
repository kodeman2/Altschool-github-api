import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGithubRepos }  from "./GITHUBCONTEXT";






export default function RepoDetails() {


 const { gitHubRepos } = useGithubRepos();
const [currentRepo, setCurrentRepo] = useState([]);
const params = useParams();

useEffect(() => {
  const res = gitHubRepos?.find((repo) => {
   if (repo?.name.toLowerCase() === params?.repoName.toLowerCase()) {
    setCurrentRepo(repo);
   }
  });
  return res;
  
 }, [params?.repoName, gitHubRepos]);

 

 return (
  <div className="repo-details">
   {currentRepo ?  (
    <div className="repo-details__container">
   <h1>{currentRepo?.name}</h1>

   
   <p>{currentRepo?.description}</p>
   <p>{currentRepo?.language}</p>
   <p>{currentRepo?.stargazers_count}</p>
</div>
   ) : ("loading.....")}
  </div>


 );

}

   




