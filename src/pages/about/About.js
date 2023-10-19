import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import BannerBg from "../../Assets/banner/about.jpeg";
import contentBG from "../../Assets/banner/slide-1.jpg";
import aboutImg_1 from "../../Assets/images/about-1.jpg";
import aboutImg_2 from "../../Assets/images/about-2.jpg";
import approachBG from "../../Assets/banner/approach-1.jpg";
import Loader from "../../components/loader/Loader";
import ScrollAnimation from "react-animate-on-scroll";

import "./About.css";

function About() {
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
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="about-container">
          <Parallax strength={300} bgImage={BannerBg}>
            <div className="banner-container">
              <div className="text-content">Normal Parallax</div>
            </div>
          </Parallax>
          <Parallax
            strength={300}
            blur={{ min: -5, max: 15 }}
            bgImage={contentBG}
          >
            <div className="content-container">
              <div className="content-section">
                <div className="section-text-cont">
                  <ScrollAnimation
                    animateIn="bounceInRight"
                    animateOut="bounceOutLeft"
                  >
                    <div className="section-text">
                      SLK Global is a company that specialises in integrated
                      supply chain management solutions for the government, oil
                      and gas majors, and commercial clients globally. In order
                      to integrate and accelerate supply chains in challenging
                      conditions across numerous geographies, our core business
                      is concentrated on developing progressive resources,
                      capabilities, and technology. By choosing the best
                      products from the best suppliers and delivering them at
                      the correct time, we assist our clients in achieving their
                      business goals. As a major player in the consumer goods,
                      automotive, construction, and perishable industries, we
                      have extensive knowledge of these sectors. With offices in
                      the United Arab Emirates, the United States, Poland,
                      Singapore, Qatar, Iraq, India, Spain, and Romania, we
                      serve demographics all over the world, including those in
                      the USA, Europe, Africa, the Middle East, and Asia.
                    </div>
                  </ScrollAnimation>
                </div>
                <div className="section-img">
                  <img src={aboutImg_1} className="img" alt="aboutImage" />
                </div>
              </div>

              <div className="content-section content-section_2">
                <div className="section-img">
                  <img src={aboutImg_2} className="img" alt="aboutImage" />
                </div>
                <div className="section-text-cont">
                  <ScrollAnimation
                    animateIn="bounceInLeft"
                    animateOut="bounceOutRight"
                  >
                    <div className="section-text">
                      We immerse our specialists in the client's business and
                      use the best talent to fully comprehend their needs. This
                      makes it possible for us to create a unique and cohesive
                      buying strategy with various suppliers, carry out
                      effective sourcing initiatives, and quickly spread
                      shipping knowledge to various clients.
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
              <ScrollAnimation animateIn="flipInX">
                <div className="section-vision">
                  <div className="vision-cont">
                    <div className="section-icon"></div>
                    <h1 className="section-head">Our Vision</h1>
                    <div className="section-desc">
                      With a vision to be the best and most sought-after
                      procurement, logistics, and subcontracting firm in the
                      industry, we assist clients in creating and maximising
                      lasting competitive advantages. We work to raise industry
                      standards, especially those relating to partner and client
                      interaction, and foster better operations that integrate
                      best practices into a single framework.
                    </div>
                  </div>

                  <div className="mission-cont">
                    <div className="section-icon"></div>
                    <h1 className="section-head">Our Mission</h1>
                    <div className="section-desc">
                      Our mission is to be recognised as the leading
                      procurement, logistics, and subcontracting firm in the
                      industry by consistently delivering exceptional service
                      and value to our clients. Through our expertise and
                      commitment to excellence, we strive to empower our clients
                      to achieve sustainable competitive advantage. We work to
                      raise industry standards, especially those relating to
                      partner and client interaction, and foster better
                      operations that integrate best practices into a single
                      framework.
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </Parallax>
          <Parallax
            strength={300}
            blur={{ min: -5, max: 15 }}
            bgImage={BannerBg}
          >
            <div
              className="our-approach"
              style={{ backgroundImage: `url(${approachBG})` }}
            >
              <div className="our-approach-content">
                <h1 className="section-head approach-content-head">
                  Our Approach
                </h1>
                <div className="section-desc approach-content-desc">
                  Our expert teams work closely with clients to analyse data and
                  understand their business needs. We provide insights that
                  uncover hidden value because of our broad commercial and
                  market expertise. Because of our commitment to operational
                  excellence, we are able to ensure that all of our clients’
                  fulfilment facilities will constantly provide excellent
                  services. We produce quicker, fresher, and more substantial
                  outcomes by utilising our sector experience. We offer:
                  Customised analyses using quick or conventional methods.
                  Immersive and constructive challenges that help reevaluate the
                  existing situation. Ability to quickly implement ideas into
                  action and capitalise on them.
                </div>
              </div>
            </div>
          </Parallax>
        </div>
      )}
    </>
  );
}

export default About;
