import React from "react";
import Navbar from "../Navbar/Navbar";

function Attendance() {
  return (
    <>
      <Navbar />
      <div className="attendance">
        <div className="title">
          <h3> November 2024</h3>
          <p>Weekly</p>
        </div>

        <div className="table-attendance">
          <div className="item">
            <div className="day-name">
              <h6>Saterday</h6>
            </div>
            <div className="body-item"></div>
            <div className="body-item"></div>
            <div className="body-item"></div>
            <div className="body-item "></div>
            <div className="body-item   brd-botton"></div>
          </div>
          <div className="item">
            <div className="day-name">
              <h6>Sunday</h6>
            </div>
            <div className="body-item"></div>
            <div className="body-item">
              <p className="day-attendance-present">Present</p>
            </div>
            <div className="body-item"></div>
            <div className="body-item"></div>
            <div className="body-item  brd-botton"></div>
          </div>
          <div className="item">
            <div className="day-name">
              <h6>Monday</h6>
            </div>
            <div className="body-item"></div>
            <div className="body-item"></div>
            <div className="body-item"></div>
            <div className="body-item ">
              <p className="day-attendance-absant">Absant</p>
            </div>
            <div className="body-item  brd-botton"></div>
          </div>
          <div className="item">
            <div className="day-name">
              <h6>Tuesday</h6>
            </div>
            <div className="body-item">
              <p className="day-attendance-present">present</p>
            </div>
            <div className="body-item">
              <p className="day-attendance-sick-Leave">Sic leave</p>
            </div>
            <div className="body-item"></div>
            <div className="body-item"></div>
            <div className="body-item  brd-botton"></div>
          </div>
          <div className="item">
            <div className="day-name">
              <h6>Wenesday</h6>
            </div>
            <div className="body-item">
              <p className="day-attendance-present">present</p>
            </div>
            <div className="body-item">
              <p className="day-attendance-sick-Leave">Sic leave</p>
            </div>
            <div className="body-item">
              <p className="day-attendance-present">present</p>
            </div>
            <div className="body-item">
              <p className="day-attendance-present">present</p>
            </div>
            <div className="body-item  brd-botton"></div>
          </div>
          <div className="item">
            <div className="day-name">
              <h6>Thursday</h6>
            </div>
            <div className="body-item">
              <p className="day-attendance-present">present</p>
            </div>
            <div className="body-item">
              <p className="day-attendance-present">present</p>
            </div>
            <div className="body-item">
              <p className="day-attendance-present">present</p>
            </div>
            <div className="body-item"></div>
            <div className="body-item  brd-botton"></div>
          </div>
          <div className="item">
            <div className="day-name friday">
              <h6>Friday</h6>
            </div>
            <div className="body-item friday"></div>
            <div className="body-item friday"></div>
            <div className="body-item friday"></div>
            <div className="body-item friday"></div>
            <div className="body-item friday  brd-botton"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Attendance;
