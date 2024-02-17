import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";

function Assignment() {
  const [dragging, setDragging] = useState(false);
  const [droppedFiles, setDroppedFiles] = useState([]);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    const files = Array.from(e.dataTransfer.files);
    setDroppedFiles([...droppedFiles, ...files]);
  };

  return (
    <>
      <Navbar title={"Assignment"} />
      <div className={`assignment ${dragging ? "dragging" : ""}`}>
        <div className="row mx-0 info">
          <h4>Assignment Activity</h4>
          <p>Write a short description of your assignment.</p>
        </div>

        <div className="row mx-0">
          <div className="col-lg-4">
            <div className="upload-assignment">
              <p>File submissions</p>
            </div>
          </div>

          <div className="col-lg-8">
            <div
              className="container-upload"
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <p>Maximum File size 1 MB, Maximum number of files 10</p>
              <div className="input-upload">
                <label htmlFor="file">
                  <i className="fa-regular fa-file"></i>
                </label>
                <input type="file" id="file" />
                <label htmlFor="folder">
                  <i className="fa-solid fa-folder"></i>
                </label>
                <input type="file" id="folder" />
              </div>
              <div className="drag">
                <i className="fa-solid fa-arrow-down"></i>
                <p>You can drag and drop files here to add them.</p>
              </div>
              {droppedFiles.length > 0 && (
                <div className="dropped-files">
                  <p>Dropped Files:</p>
                  <ul>
                    {droppedFiles.map((file, index) => (
                      <li key={index}>{file.name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="row btns">
              <button onClick={() => console.log("Save Changes")}>
                Save Changes
              </button>
              <button onClick={() => console.log("Cancel")}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Assignment;
