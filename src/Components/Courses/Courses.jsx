import React from "react";
import Navbar from "../Navbar/Navbar";

function Courses() {
  return (
    <>
      <Navbar title={"Courses"} />
      <div className="courses">
        <div className="row mx-0">
          <div className="row">
            <h3 className="section-title">
              All Courses <span>(6)</span>
            </h3>
          </div>
        </div>
        <div className="row mt-3  mx-0 g-3">


          <div className="col-md-4 col-lg-3">
            <div className="item">
              <figure className="m-0">
                <img
                  src={require("../../Assets/Images/Courses/download.jpg")}
                  className="w-100"
                  alt=""
                />
              </figure>
              <div className="title">
                <h4>Chemistry </h4>
                <button>Open</button>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-lg-3">
            <div className="item">
              <figure className="m-0">
                <img
                  src={require("../../Assets/Images/Courses/download.jpg")}
                  className="w-100"
                  alt=""
                />
              </figure>
              <div className="title">
                <h4>Chemistry </h4>
                <button>Open</button>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-lg-3">
            <div className="item">
              <figure className="m-0">
                <img
                  src={require("../../Assets/Images/Courses/download.jpg")}
                  className="w-100"
                  alt=""
                />
              </figure>
              <div className="title">
                <h4>Chemistry </h4>
                <button>Open</button>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-lg-3">
            <div className="item">
              <figure className="m-0">
                <img
                  src={require("../../Assets/Images/Courses/download.jpg")}
                  className="w-100"
                  alt=""
                />
              </figure>
              <div className="title">
                <h4>Chemistry </h4>
                <button>Open</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
