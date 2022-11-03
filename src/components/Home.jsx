import { useState, useEffect } from "react";
import Loadingspinner from "./Loadingspinner";
import { BiBadgeCheck, GoLocation, AiOutlineArrowRight } from "react-icons/all";
import { Backdrop } from "@mui/material";

export default function Home() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const userName = "kodeman2";

  useEffect(() => {
    
    setLoading(true);
    fetch(`https://api.github.com/users/${userName}`)
      .then((res) => res.json())
      .then((data) => {
                setItems(data);
        setLoading(false);
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
        <img src="../assets/contact-img.svg" alt="contact-img" />
      </div>
      <div className="right_home">
        <h1>{userName}'s Github Profile</h1>
        {loading ? (
          <Loadingspinner />
        ) : (
          <div className="profile-card">
            <img src={items.avatar_url} alt="avatar" />
            <div className="pro_card_head">
              <h3>{items.name}</h3>
              <span>
                <BiBadgeCheck />
              </span>
            </div>
            <p>{items.bio}</p>
            <div className="cardlocation">
              <GoLocation /> <p>{items.location}</p>
            </div>

            <div className="card-repo">
              <p>Total Repositories </p>
              <div className="arrow">
                <AiOutlineArrowRight />
              </div>
              {items.public_repos}
            </div>

            <div className="profile-card__stats">
              <div className="profile-card__stat">
                <p>Followers</p>
                <p>{items.followers}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
