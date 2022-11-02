import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGithubRepos } from "./GITHUBCONTEXT";
import Loadingspinner from "./Loadingspinner";
import { useNavigate} from 'react-router-dom';


export default function RepoDetails() {
  const { gitHubRepos } = useGithubRepos();
  const [currentRepo, setCurrentRepo] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const res = gitHubRepos?.find((repo) => {
      if (repo?.name.toLowerCase() === params?.repoName.toLowerCase()) {
        setCurrentRepo(repo);
      }
    });
    return res;
  }, [params?.repoName, gitHubRepos]);

  console.log(currentRepo);

  return (
    <div className="repo-details">
      <button onClick={() => navigate(-1)}>Back</button>
      {currentRepo ? (
        <div className="repo-details__container">
          <div className="repohead">
            <img
              className="repodetails_img"
              src={currentRepo?.owner?.avatar_url}
              alt="avatar"
            />
            <h3>{currentRepo?.name}</h3>
          </div>

          <div className="repobody">
            <p>Description: {currentRepo?.description}</p>
            <h4>{currentRepo?.language}</h4>
            <h5>size: {currentRepo?.size}</h5>
          </div>

          <div className="repofooter">
            <a href={currentRepo?.html_url} target="_blank" rel="noreferrer">
              <button>View on GitHub</button>
            </a>

            <p>{currentRepo?.visibility}</p>
          </div>
         
        </div>
      ) : (
        <Loadingspinner />
      )}
    </div>
  );
}
