import React from "react";

function Navbar({ title }) {
  return (
    <>
      <header>
        <div className="row m-0"></div>
        <div className="row g-3 m-0">
          <div className="col-lg-6 ">
            <h2> {title} </h2>
            <div className="data">
              <div className="search">
                <input type="text" placeholder="Search" />
              </div>
              <div className="icons">
                <i className="fa-regular fa-envelope"></i>
                <i className="fa-regular fa-bell"></i>
              </div>
            </div>
          </div>

          <div className="col-lg-6  ">
            <div className="image">
              <img
                src={require("../../Assets/Images/٢٠٠٠٠١٠١٠٠٠١٠٠_IMG_0119.JPG")}
                alt=""
              />
              <div className="stars">
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <i className="fa-solid fa-angle-down"></i>
                <p className="fw-bold">Abdelrhman</p>
                <span>Student</span>
              </div>
            </div>
          </div>

        </div>
      </header>
    </>
  );
}

export default Navbar;
