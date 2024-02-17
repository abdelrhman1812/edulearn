import React from "react";
import Navbar from "../Navbar/Navbar";

function Content() {
  return (
    <>
      <Navbar title={"Dashbord"} />

      <div className="dashboard">
        <div className="row mx-0 g-3">
          {/*Announcement  */}
          <div className="col-lg-8">
            <div className="announcement shadow rounded-2 p-3" >
              <div className="item">
                <h4>Announcement</h4>
              </div>
              <div className="item">
              </div>
              <div className="item">
              </div>
            </div>
            <div className="degree shadow p-3">
              <h3>Degree Exams Midterm</h3>
              <div className="item">
                <div className="title">
                  <i className="fa fa-dot-circle"></i>
                  <div className="information">
                    <p>Midterm</p>
                    <span>Mathematics</span>
                  </div>
                </div>
                <button>Download</button>
              </div>
            </div>

            <div className="attendance shadow p-3">
              <h3>Degree Exams Midterm</h3>
              <div className="data">
                <div className="item">
                  <p>31</p>
                  <span>total no of student</span>
                </div>
                <div className="item">
                  <p>20</p>
                  <span>Absent</span>
                </div>
                <div className="item">
                  <p>11</p>
                  <span>present</span>
                </div>
              </div>
            </div>
          </div>
          {/*Assignments  */}

          <div className="col-lg-4 shadow rounded-2">
            <div className="assignments">
              <h3>Assignments</h3>
              <div className="item">
                <div className="title">
                  <i className="fa fa-dot-circle"></i>
                  <div className="information">
                    <p>Daliy Task</p>
                    <span>Chemistry</span>
                  </div>
                </div>
                <div className="time">
                  <span className="d-block">11.00 Am</span>
                  <small>Deadline</small>
                </div>
              </div>

              <div className="item">
                <div className="title">
                  <i className="fa fa-dot-circle"></i>
                  <div className="information">
                    <p>Daliy Task</p>
                    <span>Chemistry</span>
                  </div>
                </div>
                <div className="time">
                  <span className="d-block">11.00 Am</span>
                  <small>Deadline</small>
                </div>
              </div>
            </div>
            <div className="course-progress">
              <h3>Course Progress</h3>
              <div className="item">
                <div className="course-progress-title">
                  <p>oraganic Chemistry</p>
                  <span>Chapter 10</span>
                </div>
                <span className="deadline">Completed</span>
              </div>
              <div className="item">
                <div className="course-progress-title">
                  <p>oraganic Chemistry</p>
                  <span>Chapter 10</span>
                </div>
                <span className="deadline">Completed</span>
              </div>
              <div className="item">
                <div className="course-progress-title">
                  <p>oraganic Chemistry</p>
                  <span>Chapter 10</span>
                </div>
                <span className="deadline">Completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
