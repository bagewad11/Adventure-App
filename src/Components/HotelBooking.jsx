import Images from "../img";

const HotelBooking = () => {
    return(
<>
{/* <!-- Hotel Booking Section --> */}
<section className="hotel-booking">
  <div className="container bg-green">
    {/* <h2 className="text-center mb-5">Book Your Hotel</h2> */}
    <h1 className="Sportheading">
          Book Your
          <span style={{ color: "green" }}> Hotel</span>
        </h1>
    <div className="row">
      {/* <!-- Hotel Search Form --> */}
      <div className="col-md-4">
        <div className="card p-4">
          <h4 className="mb-4">Search Hotels</h4>
          <form>
            <div className="form-group">
              <label for="destination">Destination</label>
              <input type="text" id="destination" className="form-control" placeholder="Enter your destination"/>
            </div>
            <div className="form-group">
              <label for="checkin">Check-In Date</label>
              <input type="date" id="checkin" className="form-control"/>
            </div>
            <div className="form-group">
              <label for="checkout">Check-Out Date</label>
              <input type="date" id="checkout" className="form-control"/>
            </div>
            <div className="form-group">
              <label for="guests">Guests</label>
              <input type="number" id="guests" className="form-control"/>
            </div>
            <div class="container mt-5">
          <div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" id="acRoomToggle"/>
      <label class="form-check-label" for="acRoomToggle">AC Room</label>
      {/* <label class="form-check-label" for="acRoomToggle">Non AC Room</label> */}

    </div>
  </div>
            <button type="submit" className="btn btn-primary btn-block">Search</button>
          </form>
        </div>
      </div>

      {/* <!-- Available Hotels --> */}
      <div className="col-md-8">
        <h4 className="mb-4">Available Hotels</h4>
        {/* <!-- Hotel 1 --> */}
        <div className="card mb-4">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={Images.hotel6} className="card-img" alt="Hotel 1"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Hotel Sunshine</h5>
                <p className="card-text hoteldescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac egestas nisi, vel blandit eros.</p>
                <p className="card-text"><small className="text-muted">Price per night: $120</small></p>
                <a href="#" className="btn btn-outline-primary">Book Now</a>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Hotel 2 --> */}
        <div className="card mb-4">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={Images.hotel6} className="card-img" alt="Hotel 2"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Ocean View Resort</h5>
                <p className="card-text hoteldescription">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                <p className="card-text"><small className="text-muted">Price per night: $180</small></p>
                <a href="#" className="btn btn-outline-primary">Book Now</a>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Hotel 3 --> */}
        <div className="card mb-4">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={Images.hotel6} className="card-img" alt="Hotel 3"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Mountain Escape Hotel</h5>
                <p className="card-text hoteldescription">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                <p className="card-text"><small className="text-muted">Price per night: $150</small></p>
                <a href="#" className="btn btn-outline-primary">Book Now</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
</>
 )
};
export default HotelBooking;