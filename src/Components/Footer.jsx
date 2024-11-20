

const Footer = () =>{
    return(
        <>

        <footer className="bg-success text-light py-4">
  <div className="container">
    <div class="row">
      {/* <!-- About Section --> */}
      <div className="col-md-4">
        <h5 className="text-uppercase">About Us</h5>
        <p>We are your go-to app for unforgettable adventures. Explore new destinations, enjoy tailored travel plans, and make memories that last a lifetime.</p>
      </div>

      {/* <!-- Links Section --> */}
      <div className="col-md-4">
        <h5 className="text-uppercase">Quick Links</h5>
        <ul className="list-unstyled">
          <li><a href="#" class="text-light">Home</a></li>
          <li><a href="#" class="text-light">Destinations</a></li>
          <li><a href="#" class="text-light">Adventures</a></li>
          <li><a href="#" class="text-light">Contact Us</a></li>
        </ul>
      </div>

      {/* <!-- Contact Info --> */}
      <div className="col-md-4">
        <h5 className="text-uppercase">Contact Us</h5>
        <p><i className="fas fa-phone"></i> +123 456 7890</p>
        <p><i className="fas fa-envelope"></i> info@adventureapp.com</p>
        <div>
          <a href="#" class="text-light me-3"><i class="fab fa-facebook fa-lg"></i></a>
          <a href="#" class="text-light me-3"><i class="fab fa-twitter fa-lg"></i></a>
          <a href="#" class="text-light"><i class="fab fa-instagram fa-lg"></i></a>
        </div>
      </div>
    </div>

    {/* <!-- Footer Bottom --> */}
    <div className="row mt-4">
      <div className="col text-center">
        <p className="mb-0">&copy; 2024 Adventure App. All Rights Reserved.</p>
      </div>
    </div>
  </div>
</footer>

        </>
    )
};
export default Footer;