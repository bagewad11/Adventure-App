import Home from "./Home";
import Images from "../img";

const SpotDetail = () => {
  return (
    <>
      {/* Spot Carosual part start  */}

      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src={Images.agra}
              height="700px"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Gateway Of India Mumbai</h5>
              <p>
                The Gateway of India is located on the waterfront at Apollo
                Bunder area at the end of Chhatrapati Shivaji Marg in South
                Mumbai and overlooks the Arabian Sea.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src={Images.First}
              height="700px"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={Images.delhi}
              height="700px"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Spot Carosual part ends  */}
      {/*  Spot About us start*/}
      <div className="container">
        <h4 className="Sportheading">
          Taj Mahal <span style={{ color: "Blue" }}>Agra</span>
        </h4>

        <h4 className="text-center">
          The Taj Mahal is an ivory-white marble mausoleum on the south bank of
          the Yamuna river in the Indian city of Agra. It was commissioned in
          1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to
          house the tomb of his favourite wife, Mumtaz Mahal.
        </h4>
      </div>

      {/* <!-- Second Container --> */}
      <div className="container-img py-5">
        {/* <marque>Collect Moments-Not-Things</marque> */}
        <h2 className="text-center"></h2>
        <div className="row text-center">
          <div className="col-md-4">
            <img
              src={Images.agra}
              alt="Team Member 1"
              width="450"
              height="400"
            />
            <h4>Temple Boat Ride</h4>
          </div>
          <div className="col-md-4">
            <img
              src={Images.delhi}
              alt="Team Member 2"
              width="450"
              height="400"
            />
            <h4>Musical Fountain Show</h4>
          </div>
          <div className="col-md-4">
            <img
              src={Images.varanasi}
              alt="Team Member 3"
              width="450"
              height="400"
            />
            <h4>Swaminarayan Statue</h4>
          </div>
        </div>
      </div>
      {/* spot About  us end */}

      {/* Activities start */}
      <div className="container">
        <h1 className="Sportheading">
          Explore Activities in
          <span style={{ color: "green" }}> Every Spot</span>
        </h1>
        <h3>
          <marquee>
            Say yes to new <span style={{ color: "green" }}>Adventures</span>
            Say yes to new <span style={{ color: "green" }}>Adventures</span>
          </marquee>
        </h3>

        <div className="row">
          <div className="col-lg-3 mb-5">
            <img className="activityimg" src={Images.hiking} alt="" />
            <a className="activityheading" href="">
              {" "}
              <h4>Hiking</h4>
            </a>
            <button className="btn btn-success mb-3">Visit Now</button>
          </div>
          <div className="col-lg-3">
            <img className="activityimg" src={Images.surfing} alt="" />
            <a className="activityheading" href="">
              {" "}
              <h4>Surfing</h4>
            </a>
            <button className="btn btn-success mb-3">Visit Now</button>
          </div>
          <div className="col-lg-3">
            <img className="activityimg" src={Images.skiing} alt="" />
            <a className="activityheading" href="">
              {" "}
              <h4>Skiing</h4>
            </a>
            <button className="btn btn-success mb-3">Visit Now</button>
          </div>
          <div className="col-lg-3">
            <img className="activityimg" src={Images.safari} alt="" />
            <a className="activityheading" href="">
              {" "}
              <h4>Safari</h4>
            </a>
            <button className="btn btn-success mb-3">Visit Now</button>
          </div>
        </div>
      </div>
      <div className="container">
        {/* <h1 className="Sportheading">
          Explore Activities in
          <span style={{ color: "green" }}> Every Spot</span>
        </h1> */}
        <div className="row">
          <div className="col-lg-3 mb-5">
            <img className="activityimg" src={Images.hiking} alt="" />
            <a className="activityheading" href="">
              {" "}
              <h4>Boating</h4>
            </a>
            <button className="btn btn-success mb-3">Visit Now</button>
          </div>
          <div className="col-lg-3">
            <img className="activityimg" src={Images.surfing} alt="" />
            <a className="activityheading" href="">
              {" "}
              <h4>Caving</h4>
            </a>
            <button className="btn btn-success mb-3">Visit Now</button>
          </div>
          <div className="col-lg-3">
            <img className="activityimg" src={Images.skiing} alt="" />
            <a className="activityheading" href="">
              {" "}
              <h4>Horse Riding</h4>
            </a>
            <button className="btn btn-success mb-3">Visit Now</button>
          </div>
          <div className="col-lg-3">
            <img className="activityimg" src={Images.safari} alt="" />
            <a className="activityheading" href="">
              {" "}
              <h4>Zip Lining</h4>
            </a>
            <button className="btn btn-success mb-3">Visit Now</button>
          </div>
        </div>
      </div>
      {/* Activities end */}
      {/* hotels start */}
      <div className="container bg-blue">
        <h1 className="Sportheading">
          Luxury Stays, Unforgettable Experiences{" "}
          <span style={{ color: "green" }}> Experiences</span>
        </h1>

        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="card">
                <img src={Images.hotel1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text-spot">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button className="btn btn-success mb-3">Visit Now</button>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <img src={Images.hotel2} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text-spot">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button className="btn btn-success mb-3">Visit Now</button>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <img src={Images.hotel3} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text-spot">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button className="btn btn-success mb-3">Visit Now</button>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <img src={Images.hotel4} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text-spot">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button className="btn btn-success mb-3">Visit Now</button>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-3">
              <div className="card">
                <img src={Images.hotel5} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text-spot">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button className="btn btn-success mb-3">Visit Now</button>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <img src={Images.hotel6} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text-spot">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button className="btn btn-success mb-3">Visit Now</button>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <img src={Images.hotel7} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text-spot">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button className="btn btn-success mb-3">Visit Now</button>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <img src={Images.hotel8} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text-spot">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button className="btn btn-success mb-3">Visit Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* hotels end */}
    </>
  );
};
export default SpotDetail;
