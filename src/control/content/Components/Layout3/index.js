import React, { useEffect, useState } from "react";
import useForm from "../../hooks/form";
import ThumbnailUI from "../../shared/ThumbnailUI";
import VideoUi from "../../shared/VideoUi";
import "./style.less";
function index(props) {
  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [uploadType, setUploadType] = useState("image");
  const [videoURL, setVideoURL] = useState("");

  useEffect(() => {
    handelImage({ thumbnailImage, videoURL });
  }, [thumbnailImage, videoURL]);
  // submit form function
  function submitForm(values) {
    console.log("forms values ->", values);
  }

  function handleChangeInputType(e) {
    setUploadType(e.target.value);
    handleChange(e);
  }
  const { handleChange, handleSubmit, handelImage } = useForm(submitForm);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Page Details</h1>
        <div className="layOutContainer slide-in">
          <div className="row">
            <div className="col-md-3">
              <label className="lable">Main Media Type</label>
            </div>
            <div className="col-md-9">
              <input
                className="checkBox"
                type="radio"
                name="mediaType"
                value="image"
                defaultChecked
                onChange={handleChangeInputType}
              />
              <label className="lable">Image</label>
              <input
                className="checkBox"
                type="radio"
                name="mediaType"
                value="video"
                onChange={handleChangeInputType}
              />
              <label className="lable">Video</label>
            </div>
          </div>

          {uploadType == "image" ? (
            <ThumbnailUI
              index={1}
              recommended={"Recommended: 675 x 1200"}
              thumbnailImage={thumbnailImage}
              setThumbnailImage={setThumbnailImage}
              imageTag={"Main Image"}
              classList={"vertical-rectangle thumbnail"}
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
          <div className="row margin-bottom">
            <div className="col-md-3">
              <label className="lable">Show Info Ribbon</label>
            </div>
            <div className="col-md-9">
              <div className="button-switch">
                <input
                  onChange={handleChange}
                  className="checkBox"
                  name="showInfoRibbon"
                  id="showInfoRibbon"
                  type="checkbox"
                  value="true"
                />
                <label htmlFor="showInfoRibbon" className="label-success"></label>
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
