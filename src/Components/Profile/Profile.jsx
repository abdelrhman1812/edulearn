import React from "react";
import Navbar from "../Navbar/Navbar";

function Profile() {
  return (
    <>
      <Navbar title={"Profile"} />
      <div className="profile">
        <div className="Profile-title">
          <h3 className="text-center text-md-start">User Information</h3>
          <div className="row mx-0 g-3">
            <div className="col-md-8 order-3 order-md-1 ">
              <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" />
                <label htmlFor="id">ID</label>
                <input type="text" id="id" />
                <div className="information">
                  <div className="item">
                    <label htmlFor="level">Level</label>
                    <input type="text" id="level" />
                  </div>
                  <div className="item">
                    <label htmlFor="department">Department</label>
                    <input type="text" id="department" />
                  </div>
                  <div className="item">
                    <label htmlFor="gpa">GPA</label>
                    <input type="text" id="gpa" />
                  </div>
                </div>
              </form>
            </div>

            {/* Image */}
            <div className="col-md-4 order-2 order-md-1 ">
              <div className="image">
                <img
                  src={require("../../Assets/Images/Library/282931_1_ftc.jpg")}
                  alt=""
                />
                <button>Change Image</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
