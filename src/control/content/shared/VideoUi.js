import React from "react";

function VideoUi(props) {
  function uploadVideoFunc(e) {
    if (e.target.name != "videoURL-Input") {
        let progressPercentage = document.getElementById(`progressPercentage${props.index}`);
        let progressContainer = document.getElementById(`progress${props.index}`);

      buildfire.services.publicFiles.showDialog(
        { filter: ["video/mp4"], allowMultipleFilesUpload: true },
        (onProgress) => {
          progressContainer.style.display = "block";

          progressPercentage.innerText = `${onProgress.file.percentage}%`;
          progressPercentage.style.width = `${onProgress.file.percentage}%`;
        },
        (onComplete) => {
          progressPercentage.style.background = "var(--bf-theme-success)";
          progressPercentage.innerText = "Uploaded Sucessfully";
          setTimeout(() => {
            progressContainer.style.display = "none";
          }, 4000);
        },
        (err, files) => {
          if (err) return console.error(err);
          props.setVideoURL(files[0].url);

          let urlContainer = document.getElementById(`videoURL${props.index}`);
          urlContainer.value = files[0].url;
        }
      );
    } else {
        props.setVideoURL(e.target.value);
    }
  }

  return (
    <>
      <div className="row">
        <div className="col-md-3">
          <label className="lable">Main Video</label>
        </div>
        <div className="col-md-9">
          <button
            type="button"
            onClick={uploadVideoFunc}
            className="uploadVideo-btn btn btn-success"
          >
            + Upload Video
          </button>
          <div id={`progress${props.index}`} className="progress">
            <div
              className="progress-bar"
              id={`progressPercentage${props.index}`}
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              25%
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <label className="lable">Video URL</label>
        </div>
        <div className="col-md-9">
          <input
            defaultValue={props.videoURL}
            placeholder="Video URL"
            onChange={uploadVideoFunc}
            id={`videoURL${props.index}`}
            name="videoURL-Input"
            className="form-control fullWidth"
          ></input>
        </div>
      </div>
      <div className="row">
          <div className="col-md-3">
            <label className="lable">Enable Autoplay</label>
          </div>
          <div className="col-md-9">
            <input
              onChange={props.handleChange}
              className="checkBox" type="checkBox"
              name={`enableAutoPlay${props.index}`}
              id={`enableAutoPlay${props.index}`}
            />
          </div>
        </div>
    </>
  );
}

export default VideoUi;
