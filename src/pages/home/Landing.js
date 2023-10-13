import React, { useState, useEffect } from "react";
import "./Landing.css";
import slide1 from "../../Assets/banner/slide-1.jpg";
import slide2 from "../../Assets/banner/slide-2.jpg";
import slide3 from "../../Assets/banner/slide-3.jpg";
import Button from "../../components/button/Button";
import Loader from "../../components/loader/Loader";

function Landing() {
  const [activeSlide, setactiveSlide] = useState(1);
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
        <div className="Landing_cont">
          <div
            style={{ backgroundImage: `url(${slide1})` }}
            className={`Landing_slide_1 ${activeSlide === 1 && "activeslide"}`}
            onMouseEnter={() => setactiveSlide(1)}
          >
            <div
              className={`slider_head ${activeSlide === 1 && "active_head"}`}
            >
              <h1>Military & Defense</h1>
              <span className="slider_sub">
                Arming Our Military for a Safer Tomorrow.
              </span>
              <div className="slide_desc">
                <span>
                  Dedicated to national security, we empower our military
                  through advanced procurement, ensuring a safer future for our
                  nation.
                </span>
                <div className="Learn_more">
                  <Button name={"Learn more"} />
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${slide2})` }}
            className={`Landing_slide_2 ${activeSlide === 2 && "activeslide"}`}
            onMouseEnter={() => setactiveSlide(2)}
          >
            <div
              className={`slider_head ${activeSlide === 2 && "active_head"}`}
            >
              <h1>Oil & Gas</h1>
              <span className="slider_sub">
                Sourcing Solutions for the Energy Sector.
              </span>
              <div className="slide_desc">
                <span>
                  Strategically procuring solutions to drive progress in the
                  energy sector, fostering sustainability and innovation for a
                  brighter future.
                </span>
                <div className="Learn_more">
                  <Button name={"Learn more"} />
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${slide3})` }}
            className={`Landing_slide_3 ${activeSlide === 3 && "activeslide"}`}
            onMouseEnter={() => setactiveSlide(3)}
          >
            <div
              className={`slider_head ${activeSlide === 3 && "active_head"}`}
            >
              <h1>About Us</h1>
              <span className="slider_sub">
                Your Trusted Partner in Procurement Excellence.
              </span>
              <div className="slide_desc">
                <span>
                  Your trusted source for procurement and logistics solutions,
                  streamlining your supply chain for operational efficiency and
                  success.
                </span>
                <div className="Learn_more">
                  <Button name={"Learn more"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Landing;
