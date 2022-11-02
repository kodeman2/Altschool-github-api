import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar">
     <div className="left_cont">
      <img src="./src/assets/download.svg" alt="logo" />

     </div>
     <div className="right_cont">

      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="repositories">Repositories</Link>
      <Link to="contact">Contact</Link>
     </div>
    </nav>


    

  )
}
