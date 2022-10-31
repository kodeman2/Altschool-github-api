import { useState, useEffect } from "react";
import axios from "axios";

export default function Repo() {
  const [repos, setRepos] = useState([]);

  const singleUser = "kodeman2";

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${singleUser}/repos`)
      .then((res) => {
        setRepos(res.data);
      });
  }, [singleUser]);

  console.log(repos);

  return (
    <div>
      <h1>GitHub Repositories</h1>
      

      <div className="repo-card">
        <div className="repo-card__stats">
          <div className="repo-card__stat">
            <p>Repositories</p>
            <p>
              {repos.map((repo) => (
                <div  className="single" key={repo.id}>
                  <p>{repo.name}</p>
                  <p>{repo.description}</p>
                  <p>{repo.language}</p>
                  <p>{repo.stargazers_count}</p>
                  <a href={repo.html_url}>link</a>
                  
                  <p>{repo.created_at}</p>
                
                  <p>{repo.default_branch}</p>
                  <p>{repo.owner.login}</p>
                  
                  
              </div>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
