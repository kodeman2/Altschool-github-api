import { FaLinkedin, FaGithubSquare, FaTwitterSquare, FcContacts, AiOutlineArrowRight } from "react-icons/all";


export default function Contact() {
  return (
    <div className="contact">

     <div className="leftcontact">
       <div className="phone">
       <FcContacts/>

       <h1>Contact</h1>
       </div>

      <p>Phone: +2348165838701</p>
      <p>
        Email: 
        <a href="mailto:holuwakoladey@gmail.com"> holuwakoladey@gmail.com</a>
      </p>

      <p>Address: 1, ilupeju, Lagos</p>

     </div>
     <div className="rightcontact">


      <div className="about_social">
       <h2>Follow Me:</h2>
        <a href="https://www.linkedin.com/in/olagunju-oluwakolade-13b5239a/">
          <FaLinkedin />
        </a>

        <a href="https://github.com/kodeman2">
          <FaGithubSquare />
        </a>
        <a href="https://twitter.com/Kodeman_">
          <FaTwitterSquare />
        </a>
      </div>

      </div>
      





    </div>
  );
}
