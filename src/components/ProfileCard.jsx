import { useState, useEffect } from "react"

export default function ProfileCard() {
  const [items, setItems] = useState([]);

  const singleUser = "kodeman2";

  useEffect(() => {
    fetch(`https://api.github.com/users/${singleUser}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, [singleUser]);

  console.log(items);

  return (
    <div>
      <h1>GitHub User Profile</h1>
      <div className="profile-card">
        <img src={items.avatar_url} alt="avatar" />
        <h2>{items.name}</h2>
        <p>{items.bio}</p>
        <p>{items.location}</p>
        <p>{items.blog}</p>
        <p>{items.company}</p>

        <div className="profile-card__stats">
          <div className="profile-card__stat">
            <p>Followers</p>
            <p>{items.followers}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
