import React from 'react'
import Images from "../img";

const Herobanner = () => {
  return (
    <>
    <div className="container-fluid position-relative">
        <div className="row justify-content-center">
          
          <div className="col-8 col-md-6 col-lg-4 position-absolute search-box">
          <h1 className="heading-bar">Explore Behind <span className="heading-bar2">The Horizon</span> </h1>
            <form className="d-flex searchwidth" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search for cities, sports, activities"
                aria-label="Search"
              />
              <button className="btn btn-success" type="submit">
                Search 
              </button>
            </form>
          </div>
        </div>

        <div
          id="carouselExampleRide"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Images.imaged} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Images.image2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Images.image3} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Images.image4} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleRide"
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
            data-bs-target="#carouselExampleRide"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      
    </>
  )
}

export default Herobanner
