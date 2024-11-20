import React from 'react'
import Images from "../img";
import Home from './Navigation';

const MoreActivities = () => {
  return (
    <>
    <Home/>
    <div className="container">
        <h1 className="Sportheading">
          Explore More Activities in
          <span style={{ color: "green" }}> Every Spot</span>
        </h1>
        <div className="row">
        <div className="col-lg-3 mb-5">
          <img className="activityimg" src={Images.hiking} alt="" />
         <a className="activityheading"href=""> <h4 >Hiking</h4></a>
        </div>
        <div className="col-lg-3">
          <img className="activityimg" src={Images.surfing} alt="" />
          <a className="activityheading" href=""> <h4 >Surfing</h4></a>
        </div>
        <div className="col-lg-3">
          <img className="activityimg" src={Images.skiing} alt="" />
          <a className="activityheading" href=""> <h4 >Skiing</h4></a>
        </div>
        <div className="col-lg-3">
          <img className="activityimg" src={Images.safari} alt="" />
          <a className="activityheading" href=""> <h4>Safari</h4></a>
        </div>
        </div>

        <div className="row">
        <div className="col-lg-3 mb-5">
          <img className="activityimg" src={Images.hiking} alt="" />
         <a className="activityheading"href=""> <h4 >Hiking</h4></a>
        </div>
        <div className="col-lg-3">
          <img className="activityimg" src={Images.surfing} alt="" />
          <a className="activityheading" href=""> <h4 >Surfing</h4></a>
        </div>
        <div className="col-lg-3">
          <img className="activityimg" src={Images.skiing} alt="" />
          <a className="activityheading" href=""> <h4 >Skiing</h4></a>
        </div>
        <div className="col-lg-3">
          <img className="activityimg" src={Images.safari} alt="" />
          <a className="activityheading" href=""> <h4>Safari</h4></a>
        </div>
        </div>

        <div className="row">
        <div className="col-lg-3 mb-5">
          <img className="activityimg" src={Images.hiking} alt="" />
         <a className="activityheading"href=""> <h4 >Hiking</h4></a>
        </div>
        <div className="col-lg-3">
          <img className="activityimg" src={Images.surfing} alt="" />
          <a className="activityheading" href=""> <h4 >Surfing</h4></a>
        </div>
        <div className="col-lg-3">
          <img className="activityimg" src={Images.skiing} alt="" />
          <a className="activityheading" href=""> <h4 >Skiing</h4></a>
        </div>
        <div className="col-lg-3">
          <img className="activityimg" src={Images.safari} alt="" />
          <a className="activityheading" href=""> <h4>Safari</h4></a>
        </div>
        </div>
      </div>
      
    </>
  )
}

export default MoreActivities
