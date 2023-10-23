import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import BannerBg from "../../Assets/banner/about.jpeg";
import contentBG from "../../Assets/banner/slide-1.jpg";
import Carroussel from "../../components/Carousel/Carousel";
import { v4 as uuidv4 } from "uuid";
import { Parallax } from "react-parallax";
import "./whatWeDo.css";
import aboutImg_1 from "../../Assets/images/about-1.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import SimpleAccordion from "../../components/accordion/Accordion";
import Loader from "../../components/loader/Loader";

function WhatWeDo() {
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
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card
          title="Procurement"
          desc=""
          imagen={BannerBg}
          link="Procurement"
          //   scrollInTo={scrollInTo()}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card title="Logistics" desc="" imagen={BannerBg} link="Logistics" />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          title="Subcontracts"
          desc=""
          imagen={BannerBg}
          link="Subcontracts"
        />
      ),
    },
  ];
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="what_container">
          <Parallax strength={300} bgImage={BannerBg}>
            <div className="banner-container banner_2">
              <Carroussel
                cards={cards}
                width="100%"
                offset={200}
                showArrows={false}
              />
            </div>
          </Parallax>
          <Parallax
            strength={300}
            blur={{ min: -5, max: 15 }}
            bgImage={contentBG}
          >
            <div className="section-container" id="Procurement">
              <div className="section-desc-cont">
                <ScrollAnimation
                  animateIn="bounceInLeft"
                  animateOut="bounceOutRight"
                >
                  <div className="section-desc">
                    <h1 className="section-desc-tittle">Procurement</h1>
                    SLK Global offers its vast expertise and services as a
                    premier supplier of a broad range of materials to the
                    heavyweights of the defense sector. Using our extensive
                    network of international vendors and our systematic
                    methodology, we are able to supply products and equipment on
                    schedule at the most affordable prices without sacrificing
                    quality. Having met clients’ complex quality expectations
                    and demands for years, our skilled team has extensive
                    experience. Our deep understanding of sectors such as
                    consumer goods, automotive, construction, and perishables
                    gives us a distinct advantage over our competitors. With a
                    supplier network built on years of study, expertise, and
                    customer input, we ensure you receive the best procurement
                    and supply solutions.
                  </div>
                </ScrollAnimation>
              </div>
              <div className="section-desc-img">
                <img src={aboutImg_1} className="img" alt="aboutImage" />
              </div>
            </div>
          </Parallax>
          <Parallax
            strength={300}
            blur={{ min: -5, max: 15 }}
            bgImage={contentBG}
          >
            <div className="section-container" id="Logistics">
              <div className="section-desc-img">
                <img src={aboutImg_1} className="img" alt="aboutImage" />
              </div>
              <div className="section-desc-cont">
                <ScrollAnimation
                  animateIn="bounceInRight"
                  animateOut="bounceOutLeft"
                >
                  <div className="section-desc">
                    <h1 className="section-desc-tittle">Logistics</h1>
                    The SLK Global Logistical division provides a full range of
                    logistics and freight-forwarding services to its clients all
                    over the world with an assurance of cost savings, system
                    efficiency, and a customer-driven mindset. We offer you the
                    power of an all-in-one source for comprehensive logistics
                    services through our extensive network of offices in
                    strategic locations and a global chain of reliable partners.
                    We manage and orchestrate all the items in transit to
                    produce an effective, integrated, and secure supply chain,
                    irrespective of the distance and the location the goods are
                    being transported from.
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </Parallax>
          <Parallax
            strength={300}
            blur={{ min: -5, max: 15 }}
            bgImage={contentBG}
          >
            <div className="section-container" id="Subcontracts">
              <div className="section-desc-cont">
                <ScrollAnimation
                  animateIn="bounceInLeft"
                  animateOut="bounceOutRight"
                >
                  <div className="section-desc">
                    <h1 className="section-desc-tittle">Subcontracts</h1>
                    SLK Global offers comprehensive subcontracting services in
                    areas such as kitchen equipment and generator leasing,
                    construction work, fuel testing, and lift station pump
                    repair. We are strongly backed by global vendors offering
                    very reliable services as well as a team of staff
                    well-versed in operations and maintenance. Our fuel testing
                    services (Mogas & Diesel) are designed to evaluate the
                    client’s requirements and offer rapid and effective
                    analytical solutions while ensuring adequate compatibility
                    with fuel injection systems and reducing operational
                    expenses. SLK Global has been sourcing and providing
                    generators of various brands to its international clients.
                    We are also one of the largest providers of Combi Ovens to
                    the defense forces. With substantial expertise in the
                    inspection, repair, and maintenance of lift station pumps
                    inside the military facility, SLK Global can find the most
                    appropriate wastewater solutions for its customers.
                  </div>
                </ScrollAnimation>
              </div>
              <div className="section-desc-img">
                <img src={aboutImg_1} className="img" alt="aboutImage" />
              </div>
            </div>
          </Parallax>
          <Parallax
            strength={300}
            blur={{ min: -5, max: 15 }}
            bgImage={contentBG}
          >
            <div className="section-container">
              <SimpleAccordion />
            </div>
          </Parallax>
        </div>
      )}
    </>
  );
}

export default WhatWeDo;
