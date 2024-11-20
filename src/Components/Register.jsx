import React from "react";

const Register = () => {
  return (
    <>
      <div className="container">
        <h2 className="formheading">SignIn</h2>
        <div className="register">
          <form className="formdetails2">
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Name
              </label>
              <input
                type="phonenumber"
                placeholder="Enter your mobile number"
                class="form-control formbox"
                id="exampleInputEmail1"
                aria-describedby="emailHelp "
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Mobile Number
              </label>
              <input
                type="tel"
                placeholder="Enter your Mobile Number"
                class="form-control formbox "
                id="exampleInputPassword1"
              />
            </div>

            <div className="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                class="form-control formbox "
                id="exampleInputPassword1"
              />
            </div>

            <div className="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm your password"
                class="form-control formbox "
                id="exampleInputPassword1"
              />
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label check-frm" for="flexCheckDefault">
                I agree to the terms and condition
              </label>
            </div>
            <button type="submit" className="btn btn-primary submitbutton">
              SignIn
            </button>
            <button
              type="submit"
              className="btn btn-secondary submitbutton1 mt-4"
            >
              Forgot Password?
            </button>
            <hr />

            <button
              type="submit"
              className="btn btn-secondary submitbutton2 mt-4"
            >
              Signin with Apple
            </button>

            <button
              type="submit"
              className="btn btn-secondary submitbutton2 mt-4"
            >
              SignIn with Android
            </button>
            <a className="newacc" href="">
              Don't have an account? Sign up{" "}
            </a>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
