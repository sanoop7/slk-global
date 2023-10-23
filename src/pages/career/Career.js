import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import BannerBg from "../../Assets/banner/about.jpeg";
import Loader from "../../components/loader/Loader";
import ScrollAnimation from "react-animate-on-scroll";
import "./Career.css";

function Career() {
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
        <>
          <Parallax strength={300} bgImage={BannerBg}>
            <div className="banner-container">
              <ScrollAnimation
                animateIn="bounceInRight"
                animateOut="bounceOutLeft"
              >
                <div className="text-banner">
                  <h1 className="banner-head">CAREER</h1>
                </div>
              </ScrollAnimation>
            </div>
          </Parallax>
        </>
      )}
    </>
  );
}

export default Career;
