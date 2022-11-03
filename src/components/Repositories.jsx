// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";

// import Pagination from "./Pagination";
// import {USERS_PER_PAGE} from "../Constants";
// import { useGithubRepos } from "./GITHUBCONTEXT";

// export default function Repositories() {
//   const { gitHubRepos } = useGithubRepos();
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);

//   const [userName] = useState('kodeman2');

//   useEffect(() => {
//     setTotalPages(Math.ceil(gitHubRepos?.length / USERS_PER_PAGE));
//   }, [gitHubRepos]);

  




  
//  const handleClick = (number) => {
//     setPage(number);
//   };
//   return (
//     <div className="repositories">
//       <h1>{userName}'s Repositories</h1>
//       <Pagination 
//       totalPages={totalPages}
//       handleClick={handleClick}
//       Page={page}


      
//       />
//       <p>pages{page}</p>
//       <div className="repositories__container">
//         {gitHubRepos?.map(({ name, id, created_at, topics, forks_count, description, watchers_count }) => (
         
//           <Link to={`/repositories/${name}`} key={id} className="rep_name">
//             <div className="rep_container">
//               <h2>{name}</h2>
//               <p>{created_at}</p>
//               <p>{topics}</p>
//               <p>{forks_count}</p>
//               <p>{description}</p>
//               <p>{watchers_count}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Pagination from "./Pagination";
import {REPOS_PER_PAGE} from "../Constants";
import { useGithubRepos } from "./GITHUBCONTEXT";



export default function Repositories() {

 

  const { gitHubRepos } = useGithubRepos();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
 


  const [userName] = useState('kodeman2');

  useEffect(() => {

   
  const totalRepos = gitHubRepos?.length;
  setTotalPages(Math.ceil(totalRepos / REPOS_PER_PAGE)); 
  
  
  }, [gitHubRepos]);

  const indexOfLastRepo = page * REPOS_PER_PAGE;
  const indexOfFirstRepo = indexOfLastRepo - REPOS_PER_PAGE;
  const currentRepos = gitHubRepos?.slice(indexOfFirstRepo, indexOfLastRepo);

  const handleClick = (number) => {
    setPage(number);
  };
  console.log(currentRepos);
  return (
    <div className="repositories">
     <div className="repoleft">
     <h1>{userName}'s Repositories</h1>
      <Pagination
        totalPages={totalPages}
        handleClick={handleClick} 
        Page={page}
      />
      <p>pages - {page}</p>
      <div className="repositories__container">
        {currentRepos?.map(({ name, id, topics, watchers, description }) => (

          <Link to={`/repositories/${name}`} key={id} className="rep_name">
            <div className="rep_container">
              <h2>{name}</h2>
             
              <p>{topics}</p>
              <p className="Forks">watchers - {watchers}</p>


              <p>{description}</p>
             
            </div>
          </Link>
        ))}
      </div>  
     </div>
     <div className="reporight">
      <img  src="../assets/robo-wave.png" alt="robo-wave" />

      </div>
      
    </div>
  );
}


//   const handleClick = (number) => {
//     setPage(number);
//   };

//   return (
//     <div className="repositories">
//       <h1>{userName}'s Repositories</h1>
//       <Pagination

//       totalPages={totalPages}
//       setPage={setPage}
//       page={page}
//       handleClick={handleClick}
//       />
//       <p>pages{page}</p>
//       <div className="repositories__container">

//         {currentRepos?.map(({ name, id, created_at, topics, forks_count, description, watchers_count }) => (



//           <Link to={`/repositories/${name}`} key={id} className="rep_name">
//             <div className="rep_container">
//               <h2>{name}</h2>
//               <p>{created_at}</p>
//               <p>{topics}</p>
//               <p>{forks_count}</p>
//               <p>{description}</p>
//               <p>{watchers_count}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }


//     setTotalPages(Math.ceil(gitHubRepos?.length / REPOS_PER_PAGE));
         
//   }, [gitHubRepos]);


  

//   const handleClick = (number) => {
//     setPage(number);
//   }
//   return (


//     <div className="repositories">

//       <h1>{userName}'s Repositories</h1>
//       <Pagination
//       totalPages={totalPages}
//       handleClick={handleClick}
//       Page={page}
//       />
//       <p>pages - {page}</p>
//       <div className="repositories__container">
      
//         {gitHubRepos?.map(({ name, id, created_at, topics, forks_count, description, watchers_count }) => (

//           <Link to={`/repositories/${name}`} key={id} className="rep_name">

//             <div className="rep_container">

//               <h2>{name}</h2>
//               <p>{created_at}</p>
//               <p>{topics}</p>
//               <p>{forks_count}</p>
//               <p>{description}</p>
//               <p>{watchers_count}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }
