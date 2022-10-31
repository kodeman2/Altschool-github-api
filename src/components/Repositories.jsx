import { Link } from "react-router-dom";
import { useState } from "react";
import { useGithubRepos } from "./GITHUBCONTEXT";

export default function Repositories() {
  const { gitHubRepos } = useGithubRepos();

  const [userName] = useState('kodeman2');

  return (
    <div className="repositories">
      <h1>{userName}'s Repositories</h1>
      <div className="repositories__container">
        {gitHubRepos?.map(({ name, id, created_at, topics }) => (
         
          <Link to={`/repositories/${name}`} key={id} className="rep_name">
            <div className="rep_name__container">
              <h2>{name}</h2>
              <p>{created_at}</p>
              <p>{topics}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
