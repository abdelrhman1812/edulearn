import React from "react";
import Navbar from "../Navbar/Navbar";

function Videos() {
  function showRecording() {
    let sideBarRecording = document.querySelector(".sidebar-records");
    console.log(sideBarRecording);
    sideBarRecording.classList.toggle("active");
  }
  return (
    <>
      <Navbar title={"Videos"} />

      <div className="btn-switch-videos">
        <button>Lectures</button>
        <button>Sections</button>
        <i className="fa-solid fa-bars" onClick={showRecording}></i>
      </div>


      <div className="row mx-0 g-3 row-videos">
        <div className="col-md-12 col-lg-9 order-md-1">
          <div className="title-video">
            <h3>Math Chapter 2</h3>
          </div>
          {/* Video */}
          <div className="Videos">
            <img
              src={require("../../Assets/Images/Videos/WBBSE-Solutions-For-Class-9-Maths-Chapter-2-Laws-Of-Indices-Q2-6.webp")}
              className="w-100"
              alt=""
            />
          </div>
          {/* Info */}
          <div className="info-video">
            <div className="icons">
              <i class="fa-solid fa-volume-off"></i>
              <i class="fa-regular fa-circle-play"></i>
              <i class="fa-solid fa-display"></i>
            </div>
            <h3>Math Chapter 2</h3>
            <span>Probability Theors</span>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
              aspernatur temporibus magnam necessitatibus, laborum
              exercitationem!
            </p>
          </div>
        </div>
        {/* SideBar */}
        <div className=" col-md-12 col-lg-3   order-lg-1">
          <div className="sidebar-records">
            <h3>Recorded Videos</h3>
            <div className="item">
              <div className="name">
                <i class="fa-solid fa-play"></i>
                <span className="name-video"> Math Chapter 2 </span>
              </div>

              <div className="time">
                <span>1 hr 30 mins</span>
                <i class="fa-solid fa-download"></i>
              </div>
            </div>

            <div className="item">
              <div className="name">
                <i class="fa-solid fa-play"></i>
                <span className="name-video"> Math Chapter 2 </span>
              </div>

              <div className="time">
                <span>1 hr 30 mins</span>
                <i class="fa-solid fa-download"></i>
              </div>
            </div>

            <div className="item">
              <div className="name">
                <i class="fa-solid fa-play"></i>
                <span className="name-video"> Math Chapter 2 </span>
              </div>

              <div className="time">
                <span>1 hr 30 mins</span>
                <i class="fa-solid fa-download"></i>
              </div>
            </div>

            <div className="item">
              <div className="name">
                <i class="fa-solid fa-play"></i>
                <span className="name-video"> Math Chapter 2 </span>
              </div>

              <div className="time">
                <span>1 hr 30 mins</span>
                <i class="fa-solid fa-download"></i>
              </div>
            </div>

            <div className="item">
              <div className="name">
                <i class="fa-solid fa-play"></i>
                <span className="name-video"> Math Chapter 2 </span>
              </div>

              <div className="time">
                <span>1 hr 30 mins</span>
                <i class="fa-solid fa-download"></i>
              </div>
            </div>

            <div className="item">
              <div className="name">
                <i class="fa-solid fa-play"></i>
                <span className="name-video"> Math Chapter 2 </span>
              </div>

              <div className="time">
                <span>1 hr 30 mins</span>
                <i class="fa-solid fa-download"></i>
              </div>
            </div>

            <div className="item">
              <div className="name">
                <i class="fa-solid fa-play"></i>
                <span className="name-video"> Math Chapter 2 </span>
              </div>

              <div className="time">
                <span>1 hr 30 mins</span>
                <i class="fa-solid fa-download"></i>
              </div>
            </div>
            <button>Open Course Material</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Videos;
