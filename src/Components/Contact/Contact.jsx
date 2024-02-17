import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Contact() {
  return (
    <>
      <Navbar />

      <div className="contact">
        <div className="row ">
          <h2 className="section-title">Contact</h2>
        </div>

        <h3 className="">Have You Any Question ?</h3>

        {/* Itme */}
        <div className="row g-3">
          <div className="contact-info-item col-md-6 col-lg-4">
            <div className="contact-info-item">
              <div className="icon">
                <i className="fa fa-phone"></i>
                <h4>Call Me</h4>
                <p> 01008034761</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="contact-info-item">
              <div className="icon">
                <i className="fa fa-map-marker-alt"></i>
                <h4>Location</h4>
                <p>
                  Mansoura
                </p>
              </div>
            </div>
          </div>

          <div className=" col-md-6 col-lg-4">
            <div className="contact-info-item">
              <div className="icon">
                <i className="fa fa-envelope"></i>
                <h4>Email</h4>
                <p>
                  <Link
                    to="mailto:abdelrhmanali1812@gmail.com"
                    className="text-black"
                    target="_blank"
                  >
                    abdelrhmanali1812@gmail.com
                  </Link>
                </p>
              </div>
            </div>
          </div>


        </div>

        <h3 className="contact-title">Send Me An Email</h3>
        <h4 className="contact-sub-title">I`m Very Responsive To Messages</h4>

        {/* Form */}
        <form>
          <div className="row">
            <div className="contact-form">
              <div className="form-item ">
                <div className="form-group">
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
              </div>

              <div className="form-item ">
                <div className="form-group">
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
              </div>
            </div>

            <div className="form-item ">
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>

            <div className="form-item ">
              <div className="form-group">
                <button type="submit">Send Message</button>
              </div>
            </div>
          </div>
        </form>


      </div>
    </>
  );
}

export default Contact;
