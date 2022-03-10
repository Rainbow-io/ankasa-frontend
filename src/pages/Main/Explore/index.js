// import internal modules
import React, { Fragment } from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

// import external modules
import './explore.css';

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
      <div className="landing-first">
        <div className="landing-first-upper">
          <div className="d-flex justify-content-between p-5 upper-wrapper">
            <div className="banner-text">
              <div className="fw-bold fs-1">Find Your <span className="text-primary">Flight</span></div>
              <div className="text-muted">Find your Flight and explore the world with us</div>
            </div>
            <div className="img-banner-right">
              <img src={require("../../../assets/japan-banner-right-explorepage.png")} alt="" />
            </div>
          </div>
        </div>
        <div className="landing-first-lower">
          <img src={require("../../../assets/japan-banner-explorepage.png")} alt="" />
        </div>
      </div>
      <div className="landing-second">
        <div className="landing-second-wrapper my-5 p-5">
          <div className="trending-upper">
            <div className="text-primary">Trending</div>
            <div className="d-flex justify-content-between trending-destination mt-1 mb-5">
              <div className="fw-bold">Trending Destinations</div>
              <div className="text-primary">View All</div>
            </div>
          </div>
          <div className="d-flex justify-content-center trending-lower">
            <div className="box-destination bg-white">
              <div className="photo p-3">
                <img src={require("../../../assets/jakarta.jpg")} height={150} width={150} className="rounded" alt="" />
              </div>
              <div className="city mx-3 mb-2">
                <div>Monas,</div>
                <div className="d-flex justify-content-between country-lower">
                  <div className="fw-bold fs-5">Jakarta</div>
                  <img src={require("../../../assets/icons/btn-more-explorepage.svg").default} alt="" />
                </div>
              </div>
            </div>
            <div className="box-destination bg-white ms-5">
              <div className="photo p-3">
                <img src={require("../../../assets/prambanan.jpg")} height={150} width={150} className="rounded" alt="" />
              </div>
              <div className="city mx-3 mb-2">
                <div>Candi Prambanan,</div>
                <div className="d-flex justify-content-between country-lower">
                  <div className="fw-bold fs-5">Jogjakarta</div>
                  <img src={require("../../../assets/icons/btn-more-explorepage.svg").default} alt="" />
                </div>
              </div>
            </div>
            <div className="box-destination bg-white ms-5">
              <div className="photo p-3">
                <img src={require("../../../assets/km-0.jpg")} height={150} width={150} className="rounded" alt="" />
              </div>
              <div className="city mx-3 mb-3">
                <div>KM 0,</div>
                <div className="d-flex justify-content-between country-lower">
                  <div className="fw-bold fs-5">Papua</div>
                  <img src={require("../../../assets/icons/btn-more-explorepage.svg").default} alt="" />
                </div>
              </div>
            </div>
            <div className="box-destination bg-white ms-5">
              <div className="photo p-3">
                <img src={require("../../../assets/pantai-kuta.JPG")} height={150} width={150} className="rounded" alt="" />
              </div>
              <div className="city mx-3 mb-3">
                <div>Pantai Kuta,</div>
                <div className="d-flex justify-content-between country-lower">
                  <div className="fw-bold fs-5">NTB</div>
                  <img src={require("../../../assets/icons/btn-more-explorepage.svg").default} alt="" />
                </div>
              </div>
            </div>
            <div className="box-destination bg-white ms-5">
              <div className="photo p-3">
                <img src={require("../../../assets/gedung-sate.jpg")} height={150} width={150} className="rounded" alt="" />
              </div>
              <div className="city mx-3 mb-3">
                <div>Gedung Sate,</div>
                <div className="d-flex justify-content-between country-lower">
                  <div className="fw-bold fs-5">Jawa Barat</div>
                  <img src={require("../../../assets/icons/btn-more-explorepage.svg").default} alt="" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="landing-third">
        <div className="landing-third-wrapper p-5">
          <div className="carousel-box-blue">
            <div className="inner-content-blue">
              <div className="blue-upper text-center py-5">
                <div className="text-white">Top 10</div>
                <div className="text-white fw-bold">Top 10 Destinations</div>
              </div>
              <div className="text-center">

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
                    <img className="border rounded-pill" width={150} height={150} src={require("../../../assets/surabaya.jpg")} alt="" />
                    <div className="text-white fw-bold my-5">Surabaya</div>
                  </div>
                  <div>
                    <img className="border rounded-pill" width={150} height={150} src={require("../../../assets/jogjakarta.jpg")} alt="" />
                    <div className="text-white fw-bold my-5">Jogjakarta</div>
                  </div>
                  <div>
                    <img className="border rounded-pill" width={150} height={150} src={require("../../../assets/bali.jpg")} alt="" />
                    <div className="text-white fw-bold my-5">Bali</div>
                  </div>
                  <div>
                    <img className="border rounded-pill" width={150} height={150} src={require("../../../assets/mandalika.jpg")} alt="" />
                    <div className="text-white fw-bold my-5">Mandalika</div>
                  </div>
                  <div>
                    <img className="border rounded-pill" width={150} height={150} src={require("../../../assets/nusantara.jpg")} alt="" />
                    <div className="text-white fw-bold my-5">IKN Nusantara</div>
                  </div>
                  <div>
                    <img className="border rounded-pill" width={150} height={150} src={require("../../../assets/jakarta.jpg")} alt="" />
                    <div className="text-white fw-bold my-5">Jakarta</div>
                  </div>
                  <div>
                    <img className="border rounded-pill" width={150} height={150} src={require("../../../assets/medan.JPG")} alt="" />
                    <div className="text-white fw-bold my-5">Medan</div>
                  </div>
                  <div>
                    <img className="border rounded-pill" width={150} height={150} src={require("../../../assets/makassar.jpg")} alt="" />
                    <div className="text-white fw-bold my-5">Makassar</div>
                  </div>
                  <div>
                    <img className="border rounded-pill" width={150} height={150} src={require("../../../assets/jayapura.jpg")} alt="" />
                    <div className="text-white fw-bold my-5">Jayapura</div>
                  </div>
                  <div>
                    <img className="border rounded-pill" width={150} height={150} src={require("../../../assets/balikpapan.jpg")} alt="" />
                    <div className="text-white fw-bold my-5">Balikpapan</div>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Explore