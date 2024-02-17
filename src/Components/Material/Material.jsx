import React from "react";
import Navbar from "../Navbar/Navbar";

function Material() {
  return (
    <>
      <Navbar title={"Material"} />

      <div className="material">
        <div className="row mx-0 g-3">
          <div className="col-md-4">
            <div className="item">
              <figure className="m-0">
                <img
                  src={require("../../Assets/Images/Material/Polynomials-Class-10.jpg")}
                  className="w-100"
                  alt=""
                />
              </figure>
              <div className="title">
                <h4>Mathematics Chapter 2 </h4>
                <i className="fa-solid fa-download"></i>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="item">
              <figure className="m-0">
                <img
                  src={require("../../Assets/Images/Material/Polynomials-Class-10.jpg")}
                  className="w-100"
                  alt=""
                />
              </figure>
              <div className="title">
                <h4>Mathematics Chapter 2 </h4>
                <i className="fa-solid fa-download"></i>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="item">
              <figure className="m-0">
                <img
                  src={require("../../Assets/Images/Material/Polynomials-Class-10.jpg")}
                  className="w-100"
                  alt=""
                />
              </figure>
              <div className="title">
                <h4>Mathematics Chapter 2 </h4>
                <i className="fa-solid fa-download"></i>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="item">
              <figure className="m-0">
                <img
                  src={require("../../Assets/Images/Material/Polynomials-Class-10.jpg")}
                  className="w-100"
                  alt=""
                />
              </figure>
              <div className="title">
                <h4>Mathematics Chapter 2 </h4>
                <i className="fa-solid fa-download"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Material;
