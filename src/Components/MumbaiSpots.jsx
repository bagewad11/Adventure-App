import Home from "./Navigation";
import Images from "../img";


const MumbaiSpots = () => {
  return (
    <>
      {/* <Home /> */}
      {/* spot Carosual part start */}

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
              src={Images.First}
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
              src={Images.agra}
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

      <div class="container">
        <h4 className="Sportheading">
          Akshardham <span style={{ color: "Blue" }}>Delhi</span>
        </h4>
        <h4 className="text-center">
          Akshardham Temple of Delhi is one of the prime attractions in Delh.
          where one can witness exclusive architectural charm with more than 234
          beautifully carved pillars, 9 elaborate domes, 20 quadrangle spires
          and 20000 sculptures of spiritual personalities from India.
        </h4>
      </div>

      {/* <!-- Second Container --> */}
      <div className="container-image py-5">
        {/* <marque>Collect Moments-Not-Things</marque> */}
        <h2 className="text-center"></h2>
        <div className="row text-center">
          <div className="col-md-4">
            <img
              src={Images.Five}
              alt="Team Member 1"
              width="450"
              height="400"
            />
            <h4>Temple Boat Ride</h4>
          </div>
          <div className="col-md-4">
            <img
              src={Images.Six}
              alt="Team Member 2"
              width="450"
              height="400"
            />
            <h4>Musical Fountain Show</h4>
          </div>
          <div className="col-md-4">
            <img
              src={Images.Seven}
              alt="Team Member 3"
              width="450"
              height="400"
            />
            <h4>Swaminarayan Statue</h4>
          </div>
        </div>
      </div>
      {/* spot About  us end */}

      {/* Related Spots start*/}
      <div className="container">
        <h1 className="Sportheading">
          Find Your <span style={{ color: "green" }}>Spots</span>
        </h1>

        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div class="card">
                <img src={Images.mumbaispot} class="card-img-top" alt="..." />
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
                <img src={Images.mumbaispot} class="card-img-top" alt="..." />
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
                <img src={Images.mumbaispot} class="card-img-top" alt="..." />
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
              <div class="card">
                <img src={Images.mumbaispot} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text-spot">
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
              <div class="card">
                <img src={Images.mumbaispot} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text-spot">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>

                  <button className="btn btn-success mb-3">Visit Now</button>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div class="card">
                <img src={Images.mumbaispot} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text-spot">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button className="btn btn-success mb-3">Visit Now</button>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div class="card">
                <img src={Images.mumbaispot} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text-spot">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button className="btn btn-success mb-3">Visit Now</button>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div class="card">
                <img src={Images.mumbaispot} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text-spot">
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

      {/* Related Spots End */}
    </>
  );
};
export default MumbaiSpots;
