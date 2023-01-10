import { FaLinkedin, FaGithubSquare, FaTwitterSquare, FcContacts, AiOutlineArrowRight } from "react-icons/all";
import { useForm } from "react-hook-form";


export default function Contact() {

  const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="contact">

     <div className="leftcontact">
       <div className="phone">
       <FcContacts/>

       <h1>Contact Details</h1>
       </div>

      <p>Phone: +2348165838701</p>
      <p>
        Email: 
        <a href="mailto:holuwakoladey@gmail.com"> holuwakoladey@gmail.com</a>
      </p>

      <p>Address: 1, ilupeju, Lagos</p>

     </div>
     <div className="rightcontact">
      <div className="contact_form">
        <h1>Get In Touch</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <label htmlFor="name">Name
          </label>
            <input type="text" name="name" id="name" placeholder="Your Name" />
          <label htmlFor="email">Email
          </label>
          <input type="email" name="email" id="email" placeholder="Your Email" />
          <label htmlFor="message">Message
          </label>
          <textarea name="message" id="message" cols="30" rows="10" placeholder="Your Message"></textarea>
          <button type="submit">Send Message <AiOutlineArrowRight/></button>


         
          </form>

</div>
          


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
