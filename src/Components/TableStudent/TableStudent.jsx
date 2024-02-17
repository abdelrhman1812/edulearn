import React from "react";
import Navbar from "../Navbar/Navbar";

function TableStudent() {
  return (
    <>
      <Navbar title={"Table"} />
      <div className="attendance table-student">
        <div className="title-table">
          <h3> November 2024</h3>
          <div className="date">
            <p className="active">Weekly</p>
            <p>Midterm</p>
            <p>Final</p>
          </div>
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
            <div className="body-item  brd-botton"></div>
          </div>
          <div className="item">
            <div className="day-name">
              <h6>Sunday</h6>
            </div>
            <div className="body-item"></div>
            <div className="body-item"></div>
            <div className="body-item"></div>
            <div className="body-item sec-color-2 ">
              <span>11.30:12.5</span>
              <p>Sec English S4</p>
            </div>
            <div className="body-item sec-color-2  brd-botton">
              <span>11.30:12.5</span>
              <p>Sec English S4</p>
            </div>
          </div>
          <div className="item">
            <div className="day-name">
              <h6>Monday</h6>
            </div>
            <div className="body-item"></div>
            <div className="body-item"></div>
            <div className="body-item">
              <span>11.30:12.5</span>
              <p>Sec English S4</p>
            </div>
            <div className="body-item sec-color-2 ">
              <span>11.30:12.5</span>
              <p>Sec English S4</p>
            </div>
            <div className="body-item sec-color-3  brd-botton">
              <span>11.30:12.5</span>
              <p>Sec English S4</p>
            </div>
          </div>
          <div className="item">
            <div className="day-name">
              <h6>Tuesday</h6>
            </div>
            <div className="body-item"></div>
            <div className="body-item"></div>
            <div className="body-item sec-color-1">
              <span>11.30:12.5</span>
              <p>Sec English S4</p>
            </div>
            <div className="body-item sec-color-4 ">
              <span>11.30:12.5</span>
              <p>Sec English S4</p>
            </div>
            <div className="body-item sec-color-1  brd-botton">
              <span>11.30:12.5</span>
              <p>Sec English S4</p>
            </div>
          </div>
          <div className="item">
            <div className="day-name">
              <h6>Wenesday</h6>
            </div>
            <div className="body-item"></div>
            <div className="body-item"></div>
            <div className="body-item sec-color-3">
              <span>11.30:12.5</span>
              <p>Sec English S4</p>
            </div>
            <div className="body-item sec-color-3 ">
              <span>11.30:12.5</span>
              <p>Sec English S4</p>
            </div>
            <div className="body-item sec-color-2  brd-botton">
              <span>11.30:12.5</span>
              <p>Sec English S4</p>
            </div>
          </div>
          <div className="item">
            <div className="day-name">
              <h6>Thursday</h6>
            </div>
            <div className="body-item"></div>
            <div className="body-item"></div>
            <div className="body-item sec-color-2">
              <span>11.30:12.5</span>
              <p>Sec English S4</p>
            </div>
            <div className="body-item sec-color-2 ">
              <span>11.30:12.5</span>
              <p>Sec English S4</p>
            </div>
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

export default TableStudent;
