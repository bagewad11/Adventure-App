import React from "react";
import Images from "../img";
import { useNavigate } from "react-router-dom";

const FamouseCitys = () => {

  const navigate = useNavigate()
  const handleCities = () =>{
    navigate("/citydetail")
  }

  const handlemoreCities = () =>{
    navigate('/morecities')
  }
  
  return (
    <>
    <h1 className="cityheading">
    Explore our popular  <span style={{ color: "green" }}>Adventures</span>
        </h1>
    <div className="container-fluid bgimg">
      <div className="container">
        
        <div className="row">
          <div className="col-lg-3 cardbox">
            <div class="citycard">
              <img src={Images.mumbai} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">Mumbai</p>
                <p className="carddis">Mumbai, a city of vibrant contrasts, offers rich history, bustling markets, and a dynamic cultural experience.</p>
                <button className="btn btn-success mt-4" onClick={handleCities}>Visit Now</button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 cardbox">
            <div class="citycard">
              <img src={Images.delhi} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">New Delhi</p>
                <p className="carddis">New Delhi: India's capital city, rich in history and monuments, blends Mughal heritage with modern government landmarks.</p>
                <button className="btn btn-success mb-3" onClick={handleCities}>Visit Now</button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 cardbox">
            <div class="citycard">
              <img src={Images.jaipur} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">Jaipur</p>
                <p className="carddis">Jaipur: Known as the Pink City, Jaipur offers royal palaces, vibrant bazaars, and stunning forts.</p>
                <button className="btn btn-success mt-4" onClick={handleCities}>Visit Now</button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 cardbox">
            <div class="citycard">
              <img src={Images.agra} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">Agra</p>
                
                <p className="carddis">Agra: Home to the iconic Taj Mahal, Agra is a city of architectural marvels and Mughal history.
</p>
<button className="btn btn-success mt-4" onClick={handleCities}>Visit Now</button>
              </div>
            </div>
          </div>
        </div>

    {/* Second row Start  */}
        <div className="row mt-5">
          <div className="col-lg-3 cardbox">
            <div class="citycard">
              <img src={Images.udyapur} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">Udaypur</p>
                <p className="carddis">Udaipur: Famous for its picturesque lakes and palaces, Udaipur is a romantic oasis with a regal charm.
</p>
<button className="btn btn-success mt-4" onClick={handleCities}>Visit Now</button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 cardbox">
            <div class="citycard">
              <img src={Images.varanasi} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">Varanasi</p>
                <p className="carddis">Varanasi: One of the world's oldest cities, Varanasi is a spiritual hub along the sacred Ganges River.
</p>
<button className="btn btn-success mt-4" onClick={handleCities}>Visit Now</button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 cardbox">
            <div class="citycard">
              <img src={Images.kolkata} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">Kolkatta</p>
                <p className="carddis">Kolkata: Known for its colonial architecture and literary heritage, Kolkata is a cultural epicenter with a vibrant arts scene.
                </p>
                <button className="btn btn-success mt-2 mb-2" onClick={handleCities}>Visit Now</button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 cardbox">
            <div class="citycard">
              <img src={Images.chennai} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">Chennai</p>
                <p className="carddis">Chennai: A coastal city with rich Tamil culture, Chennai is known for its temples, music, and beautiful Marina Beach.</p>
                <button className="btn btn-success mt-1 mb-2" onClick={handleCities}>Visit Now</button>
              </div>
            </div>
          </div>
          
        </div>
        <button className="btn btn-success cardbutton" onClick={handlemoreCities}>Explore More</button>
      </div>
      </div>
    </>
  );
};

export default FamouseCitys;
