import React from "react";
import Navbar from "../Navbar/Navbar";

function Library() {
  return (
    <>
      <Navbar title={"Library"} />

      <div className="library ">
        <div className="row">
          <h2 className="section-title ">Library</h2>
        </div>
        <div className="row mt-3 mx-0 g-3">
          <div className="col-md-4 col-lg-3">
            <div className="item">
              <figure className="m-0">
                <img
                  src={require("../../Assets/Images/Library/282931_1_ftc.jpg")}
                  className="w-100"
                  alt=""
                />
              </figure>
              <div className="title">
                <h4>Chemistry </h4>
                <i className="fa-solid fa-download"></i>
              </div>
            </div>
          </div>


          <div className="col-md-4 col-lg-3">
            <div className="item">
              <figure className="m-0">
                <img
                  src={require("../../Assets/Images/Library/282931_1_ftc.jpg")}
                  className="w-100"
                  alt=""
                />
              </figure>
              <div className="title">
                <h4>Chemistry </h4>
                <i className="fa-solid fa-download"></i>
              </div>
            </div>
          </div>


          <div className="col-md-4 col-lg-3">
            <div className="item">
              <figure className="m-0">
                <img
                  src={require("../../Assets/Images/Library/282931_1_ftc.jpg")}
                  className="w-100"
                  alt=""
                />
              </figure>
              <div className="title">
                <h4>Chemistry </h4>
                <i className="fa-solid fa-download"></i>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-lg-3">
            <div className="item">
              <figure className="m-0">
                <img
                  src={require("../../Assets/Images/Library/282931_1_ftc.jpg")}
                  className="w-100"
                  alt=""
                />
              </figure>
              <div className="title">
                <h4>Chemistry </h4>
                <i className="fa-solid fa-download"></i>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-lg-3">
            <div className="item">
              <figure className="m-0">
                <img
                  src={require("../../Assets/Images/Library/282931_1_ftc.jpg")}
                  className="w-100"
                  alt=""
                />
              </figure>
              <div className="title">
                <h4>Chemistry </h4>
                <i className="fa-solid fa-download"></i>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-lg-3">
            <div className="item">
              <figure className="m-0">
                <img
                  src={require("../../Assets/Images/Library/282931_1_ftc.jpg")}
                  className="w-100"
                  alt=""
                />
              </figure>
              <div className="title">
                <h4>Chemistry </h4>
                <i className="fa-solid fa-download"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Library;
