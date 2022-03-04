// import internal modules
import React, { Fragment } from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

const Explore = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <Fragment>
      <div className="landing-first">Landing first</div>
      <div className="landing-second">Landing second</div>
      <div className="landing-third">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div>
            <img src={require("../../../assets/icons/pariss.svg").default} alt="" />
          </div>
          <div>
          <img src={require("../../../assets/icons/balie.svg").default} alt="" />
          </div>
          <div>
          <img src={require("../../../assets/icons/singapoh.svg").default} alt="" />
          </div>
          <div>
          <img src={require("../../../assets/icons/agra.svg").default} alt="" />
          </div>
          <div>
          <img src={require("../../../assets/icons/sydney.svg").default} alt="" />
          </div>
        </Carousel>;
      </div>
    </Fragment>
  )
}

export default Explore