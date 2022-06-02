import React, { useEffect, useState } from "react";
import useForm from "../../hooks/form";
import ThumbnailUI from "../../shared/ThumbnailUI";
import VideoUi from "../../shared/VideoUi";
import "./style.less";
function index(props) {
  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [thumbnailImage2, setThumbnailImage2] = useState(null);
  const [uploadType, setUploadType] = useState("image");
  const [uploadType2, setUploadType2] = useState("image");
  const [videoURL, setVideoURL] = useState("");
  const [videoURL2, setVideoURL2] = useState("");

  useEffect(() => {
    handelImage({ thumbnailImage, thumbnailImage2, videoURL, videoURL2 });
  }, [thumbnailImage, thumbnailImage2, videoURL, videoURL2]);
  // submit form function
  function submitForm(values) {
    console.log("forms values ->", values);
  }

  function handleChangeInputType(e) {
    if (e.target.name === "topMediaType") {
      setUploadType(e.target.value);
    }
    if (e.target.name === "mainMediaType") {
      setUploadType2(e.target.value);
    }
    handleChange(e);
  }
  // use hooks to make our life easier

  const { handleChange, handleSubmit, handelImage } = useForm(submitForm);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Page Details</h1>
        <div className="layOutContainer">
          <div className="row">
            <div className="col-md-3">
              <label className="lable">Top Media Type</label>
            </div>
            <div className="col-md-9">
              <input
                className="checkBox"
                type="radio"
                name="topMediaType"
                value="image"
                defaultChecked
                onChange={handleChangeInputType}
              />
              <label className="lable">Image</label>
              <input
                className="checkBox"
                type="radio"
                name="topMediaType"
                value="video"
                onChange={handleChangeInputType}
              />
              <label className="lable">Video</label>
            </div>
          </div>
          {uploadType == "image" ? (
            <ThumbnailUI
              index={1}
              recommended={"Recommended: 1200 x 675"}
              thumbnailImage={thumbnailImage}
              setThumbnailImage={setThumbnailImage}
              imageTag={"Top Image"}
              classList={"horizontal-rectangle thumbnail1"}
            />
          ) : (
            <>
              <VideoUi
                handleChange={handleChange}
                setVideoURL={setVideoURL}
                videoURL={videoURL}
                index={1}
              />
            </>
          )}
          <div className="row">
            <div className="col-md-3">
              <label className="lable">Enable Full Screen</label>
            </div>
            <div className="col-md-9">
              <input
                type="checkBox"
                className="checkBox"
                name="enableFullScreen"
                id="enableFullScreen"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <label className="lable">Title</label>
            </div>
            <div className="col-md-9">
              <input
                maxLength={80}
                className="form-control fullWidth"
                type="text"
                name="title"
                placeholder="Title"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <label className="lable">Subtitle</label>
            </div>
            <div className="col-md-9">
              <input
                className="form-control fullWidth"
                type="text"
                name="subtitle"
                placeholder="Subtitle"
                maxLength={100}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <label className="lable">Body Content</label>
            </div>
            <div className="col-md-9">
              <textarea
                maxLength={250}
                placeholder="Body Content"
                className="form-control bodyContent"
                name="bodyContent"
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <label className="lable">Main Media Type</label>
            </div>
            <div className="col-md-9">
              <input
                className="checkBox"
                type="radio"
                name="mainMediaType"
                value="image"
                defaultChecked
                onChange={handleChangeInputType}
              />
              <label className="lable">Image</label>
              <input
                className="checkBox"
                type="radio"
                name="mainMediaType"
                value="video"
                onChange={handleChangeInputType}
              />
              <label className="lable">Video</label>
            </div>
          </div>
          {uploadType2 == "image" ? (
            <ThumbnailUI
              index={2}
              recommended={"Recommended: 1200 x 1200"}
              thumbnailImage={thumbnailImage2}
              setThumbnailImage={setThumbnailImage2}
              imageTag={"Main Image"}
              classList={"thumbnail2 sequare"}
            />
          ) : (
            <>
              <VideoUi
                handleChange={handleChange}
                setVideoURL={setVideoURL2}
                videoURL={videoURL2}
                index={2}
              />
            </>
          )}
          <div className="row">
            <div className="col-md-3">
              <label className="lable">Enable Full Screen</label>
            </div>
            <div className="col-md-9">
              <input
                type="checkBox"
                className="checkBox"
                name="enableMainFullScreen"
                id="enableMainFullScreen"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row  margin-bottom">
            <div className="col-md-3">
              <label className="lable">Show Info Ribbon</label>
            </div>
            <div className="col-md-9">
              <div class="button-switch">
                <input
                  onChange={handleChange}
                  className="checkBox"
                  name="showInfoRibbon"
                  id="showInfoRibbon"
                  type="checkbox"
                  value="true"
                />
                <label for="showInfoRibbon" class="label-success"></label>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-actions">
          <button
            type="button"
            onClick={() => props.setActiveComponent("external1")}
            className="btn btn-default"
            id="layoutBackBtn"
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-success" id="layoutSaveBtn">
            Save
          </button>
        </div>
      </form>
    </>
  );
}

export default index;
