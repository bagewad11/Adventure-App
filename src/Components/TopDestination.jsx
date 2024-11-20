import React from "react";
import Images from "../img";
import { useNavigate } from "react-router-dom";

const TopDestination = () => {

  const navigate = useNavigate()
  const handletopdestination = () =>{
    navigate('/morecities')
  }
  return (
    <>
      <div className="container-fluid mb-5">
        <div className="image-container">
          <img src={Images.destination1} className="topdestination" alt="..." />
          <h1 className="destheading">Top Destinations</h1>
          <p className="destheadingp">"Find Your Perfect Escape"</p>
          <button className="btn btn-success btn-top" onClick={handletopdestination}>Explore More</button>
        </div>
      </div>
    </>
  );
};

export default TopDestination;
