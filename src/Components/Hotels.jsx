import React from 'react'
import Images from '../img'
import { useNavigate } from 'react-router-dom'

const Hotels = () => {

  const navigate = useNavigate()
  const handlebooking = () =>{
    navigate('/hotelbooking')
  }
  return (
    <>

<div className="container mb-3">
        <h1 className="Sportheading">
        Luxury Stays, Unforgettable Experiences <span style={{ color: "green" }}> Experiences</span>
        </h1>

        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div class="card">
                <img src={Images.hotel1} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text-spot">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button className="btn btn-success mb-3" onClick={handlebooking}>Book Now</button>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
            <div class="card">
                <img src={Images.hotel2} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text-spot">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button className="btn btn-success mb-3" onClick={handlebooking}>Book Now</button>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
            <div class="card">
                <img src={Images.hotel3} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text-spot">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button className="btn btn-success mb-3" onClick={handlebooking}>Book Now</button>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
            <div class="card">
                <img src={Images.hotel4} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text-spot">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button className="btn btn-success mb-3" onClick={handlebooking}>Book Now</button>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-3">
              <div class="card">
                <img src={Images.hotel5} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text-spot">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button className="btn btn-success mb-3" onClick={handlebooking}>Book Now</button>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
            <div class="card">
                <img src={Images.hotel6} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text-spot">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button className="btn btn-success mb-3"onClick={handlebooking}>Book Now</button>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
            <div class="card">
                <img src={Images.hotel7} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text-spot">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button className="btn btn-success mb-3"onClick={handlebooking}>Book Now</button>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
            <div class="card">
                <img src={Images.hotel8} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text-spot">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button className="btn btn-success mb-3"onClick={handlebooking}>Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Hotels
