import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import BannerBg from "../../Assets/banner/about.jpeg";
import contentBG from "../../Assets/banner/slide-2.jpg";
import Loader from "../../components/loader/Loader";

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
              <div className="text-content">Blur</div>
            </div>
          </Parallax>
        </div>
      )}
    </>
  );
}

export default About;
