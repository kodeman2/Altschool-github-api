import { useState, useEffect } from "react"
import Loadingspinner from "./Loadingspinner"


export default function Home() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const userName = "kodeman2";

  useEffect(() => {
   setLoading(true);
    fetch(`https://api.github.com/users/${userName}`)
      .then((res) => res.json())
      .then((data) => {

        setTimeout(() => {

        setItems(data);
        setLoading(false);
        }, 1000);
      });
  }, [userName]);

  console.log(items);

  return (
    <div className="Homepage">

     <div className="left_home">
      <div className="content">
       
      <h2> hello i'm {items?.name}</h2>
      <h2> hello i'm {items?.name}</h2>
      </div>
      <img src="./src/assets/contact-img.svg" alt="contact-img" />
     </div>
     <div className="right_home">
     <h1>{userName}'s Github Profile</h1>
      {loading ? (
        <Loadingspinner />) : (
      <div className="profile-card">
        <img src={items.avatar_url} alt="avatar" />
        <h2>{items.name}</h2>
        <p>{items.bio}</p>
        <p>{}</p>
        <p>{items.location}</p>
        <p>{items.blog}</p>
        <p>{items.company}</p>
        <p>Total Repositories {items.public_repos}</p>

        <div className="profile-card__stats">
          <div className="profile-card__stat">
            <p>Followers</p>
            <p>{items.followers}</p>
          </div>
        </div>
      </div>)}
    
     </div>
      
    </div>
  );
}