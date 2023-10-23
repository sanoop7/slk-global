import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import BannerBg from "../../Assets/banner/about.jpeg";
import aboutImg_1 from "../../Assets/images/about-1.jpg";
import Loader from "../../components/loader/Loader";
import ScrollAnimation from "react-animate-on-scroll";
import "./Contact.css";
import { FaMapMarkedAlt } from "react-icons/fa";
import {
  BiSolidPhoneCall,
  BiLogoGmail,
  BiLogoLinkedinSquare,
} from "react-icons/bi";

function Contact() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup the timer to prevent memory leaks
    return () => {
      clearTimeout(timer);
    };
  }, [loading]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    sub: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here, e.g., send data to a server.
    // For now, we'll just log the form data to the console.
    console.log(formData);
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Parallax strength={300} bgImage={BannerBg}>
            <div className="banner-container">
              <ScrollAnimation
                animateIn="bounceInRight"
                animateOut="bounceOutLeft"
              >
                <div className="text-banner">
                  <h1 className="banner-head">CONTACT US</h1>
                </div>
              </ScrollAnimation>
            </div>
          </Parallax>
          <Parallax
            strength={300}
            blur={{ min: -5, max: 15 }}
            bgImage={BannerBg}
          >
            <div className="contact-cont">
              <div className="contact-sec-1">
                <div className="form-image">
                  <img src={aboutImg_1} className="img" alt="aboutImage" />
                </div>
                <div className="contact-form">
                  <h2 className="contact-form-head">
                    Drop Your Message Here :)
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div className="input-sec">
                      <h3 className="input-label">Name:</h3>
                      <input
                        className="input-text"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="input-sec">
                      <h3 className="input-label">Email:</h3>
                      <input
                        type="email"
                        name="email"
                        className="input-text"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="input-sec">
                      <h3 className="input-label">Subject:</h3>
                      <input
                        className="input-text"
                        type="text"
                        name="Subject"
                        value={formData.sub}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="input-sec">
                      <h3 className="input-label">Message:</h3>
                      <textarea
                        className="input-text text-area"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <button className="submit-btn" type="submit">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
              <div className="contact-sec-2">
                <div className="headquart-sec">
                  <h1>HEADQUARTERS</h1>
                  <div className="headquart">
                    <div className="icon-cont">
                      <FaMapMarkedAlt />
                    </div>
                    <h5>
                      OFFICE NO : 305, 3RD FLOOR, DAYTONA HOUSE, MOTOR CITY,
                      DUBAI
                    </h5>
                  </div>
                  <div className="headquart">
                    <div className="icon-cont">
                      <FaMapMarkedAlt />
                    </div>
                    <h5>
                      BUSINESS & INNOVATION PARK, BUILDING 1, STREET 504, ZONE
                      49, RAS BUFONTAS FREE ZONE, QATAR
                    </h5>
                  </div>
                  <h1>CONTACT</h1>
                  <div className="headquart">
                    <div className="icon-cont">
                      <BiSolidPhoneCall />
                    </div>
                    <h5>+971 4589 7975</h5>
                  </div>
                  <div className="headquart">
                    <div className="icon-cont">
                      <BiLogoGmail />
                    </div>
                    <h5>info@slkglobal.co</h5>
                  </div>
                  <div className="headquart">
                    <div className="icon-cont">
                      <BiLogoLinkedinSquare />
                    </div>
                    <h5>linkedin.com/slkglobal</h5>
                  </div>
                </div>

                <div className="branch-sec"></div>
              </div>
            </div>
          </Parallax>
        </>
      )}
    </>
  );
}

export default Contact;
