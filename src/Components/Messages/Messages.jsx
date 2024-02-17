import React from "react";
import Navbar from "../Navbar/Navbar";

function Messages() {
  return (
    <>
      <Navbar title={"Messages"} />
      <div className="messages">
        <div className="container">
          <div className="row mx-0">
            <div className="chat">
              <div className="row head-chat">
                <div className="col-6">
                  <div className="title-chat">
                    <h4>Abdelrhman</h4>
                    <p className="online">Online</p>
                    <p className="Last seen d-none">Last seen</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="icons">
                    <i className="fa-solid fa-phone"></i>
                    <i className="fa-solid fa-video"></i>
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mx-0 image">
              <div className="item">
                <div className="img">
                  <img
                    src={require("../../Assets/Images/Chat/IMG-20211220-WA0009.jpg")}
                    alt=""
                  />
                </div>

                <div className="img">
                  <img
                    src={require("../../Assets/Images/Chat/320641880_1260227558168754_6703588213753904060_n.jpg")}
                    alt=""
                  />
                </div>

                <div className="img">
                  <img
                    src={require("../../Assets/Images/Chat/IMG_xuns6s.jpg")}
                    alt=""
                  />
                </div>

                <div className="img">
                  <img
                    src={require("../../Assets/Images/Chat/IMG-20211220-WA0009.jpg")}
                    alt=""
                  />
                </div>


                <div className="img">
                  <img
                    src={require("../../Assets/Images/Chat/320641880_1260227558168754_6703588213753904060_n.jpg")}
                    alt=""
                  />
                </div>

                <div className="img">
                  <img
                    src={require("../../Assets/Images/Chat/IMG_xuns6s.jpg")}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="row mx-0 body-chat">
              <div className="col-12">
                <div className="sender">
                  <p>Hello</p>
                </div>
              </div>
              <div className="col-12 mt-5 d-flex justify-content-end">
                <div className="owner">Helle!</div>
              </div>
              <div className="col-12">
                <div className="sender">
                  <p>How are you</p>
                </div>
              </div>
              <div className="col-12 mt-5 d-flex justify-content-end">
                <div className="owner"> i am fine are you ?</div>
              </div>
              <div className="col-12">
                <div className="sender">
                  <p>Good</p>
                </div>
              </div>
              <div className="col-12 mt-5 d-flex justify-content-end">
                <div className="owner">hav you submitted YOUR assignments</div>
              </div>
              <div className="col-12">
                <div className="sender">
                  <p>yeo</p>
                </div>
              </div>
              <div className="col-12 mt-5 d-flex justify-content-end">
                <div className="owner">ok</div>
              </div>
            </div>
            {/* Footer Chat */}
            <div className="row mx-0 footer-chat">
              <div className=" col-10 col-md-10">
                <textarea placeholder="Message" />
              </div>
              <div className="col-2 col-md-2 d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-paper-plane"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Messages;
