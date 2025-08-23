import './Contact.css'
import Walmart from "../../assets/walmart.png";
import Adobe from "../../assets/adobe.png";
import Microsoft from "../../assets/microsoft.png";
import Facebook from "../../assets/facebook.png";

import facebookIcon from "../../assets/facebook-icon.png";
import twitterIcon from "../../assets/twitter.png";
import youtubeIcon from "../../assets/youtube.png";
import instagramIcon from "../../assets/instagram.png";
const Contact = () => {
    return (
      <>
        <section id="contactPage">
          <div id="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <span className="clientDesc">
              I have had the opportunity to work with a diverse group of
              companies. Some of the notable companies I have worked with
              includes
            </span>
            <div className="clientImgs">
              <img src={Walmart} alt="clientImg" className="clientImg" />
              <img src={Adobe} alt="clientImg" className="clientImg" />
              <img src={Microsoft} alt="clientImg" className="clientImg" />
              <img src={Facebook} alt="clientImg" className="clientImg" />
            </div>
          </div>
          <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">
              Please fill out the form below to discuss any work opportunities.
            </span>
            <form action="" className="contactForm">
              <input
                type="text"
                className="name"
                placeholder="Your Name"
                name="from_name"
              />
              <input
                type="text"
                className="email"
                placeholder="Your Email"
                name="from_email"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                className="msg"
              ></textarea>
              <button type="submit" value="Send" className="submitBtn">
                Submit
              </button>
              <div className="links">
                <img src={facebookIcon} alt="Facebook" className="link" />
                <img src={twitterIcon} alt="Twitter" className="link" />
                <img src={youtubeIcon} alt="YouTube" className="link" />
                <img src={instagramIcon} alt="Instagram" className="link" />
              </div>
            </form>
          </div>
        </section>
      </>
    );
}

export default Contact;