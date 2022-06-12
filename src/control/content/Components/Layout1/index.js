import React, { useEffect, useState } from "react";
import useForm from "../../hooks/form";
import VideoUi from "../../shared/VideoUi";
import ThumbnailUI from "../../shared/ThumbnailUI";
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

  const { handleChange, handleSubmit, handelImage, getOldData } = useForm(submitForm);
  useEffect(() => {
    if(props.data){
    getOldData(props.data);
    setThumbnailImage(props.data.thumbnailImage)
    setVideoURL(props.data.videoURL || "");
    setUploadType(props.data.BackgroundmediaType);
    }
  },[props])

  function handleChangeInputType(e) {
    setUploadType(e.target.value);
    handleChange(e);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Page Details</h1>
      <div className="layOutContainer slide-in">
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Background Media Type</label>
          </div>
          <div className="col-md-9">
            <input
              onChange={handleChangeInputType}
              className="checkBox"
              type="radio"
              name="BackgroundmediaType"
              value="image"
              defaultChecked={props.data.BackgroundmediaType==="video"?false:true}
            />
            <label className="lable">Image</label>
            <input
              onChange={handleChangeInputType}
              className="checkBox"
              type="radio"
              name="BackgroundmediaType"
              value="video"
              defaultChecked={props.data.BackgroundmediaType=="video"?true:false}
            />
            <label className="lable">Video</label>
          </div>
        </div>

        {uploadType !== "video" ? (
          <>
            <ThumbnailUI
              index={1}
              recommended={"Recommended: 675 x 1200"}
              thumbnailImage={thumbnailImage}
              setThumbnailImage={setThumbnailImage}
              imageTag={"Background Image"}
              classList={"vertical-rectangle thumbnail"}
              aspectRatio={"9x16"}
            />
          </>
        ) : (
          <>
            <VideoUi
              setVideoURL={setVideoURL}
              videoURL={videoURL}
              index={1}
              handleChange={handleChange}
            />
          </>
        )}

        <div className="row">
          <div className="col-md-3">
            <label className="lable">Enable Full Screen</label>
          </div>
          <div className="col-md-9">
            <input
              onChange={handleChange}
              className="checkBox"
              type="checkBox"
              name="enableFullScreen"
              id="enableFullScreen"
              defaultChecked={props.data.enableFullScreen?true:false}
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
              onChange={handleChange}
              className="form-control fullWidth"
              type="text"
              name="title"
              placeholder="Title"
              defaultValue={props.data.title || "Title"}

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
              type="input"
              name="subtitle"
              placeholder="Subtitle"
              maxLength={100}
              onChange={handleChange}
              defaultValue={props.data.subtitle || "Subtitle"}

            />
          </div>
        </div>
        <div className="row ">
          <div className="col-md-3">
            <label className="lable">Body Content</label>
          </div>
          <div className="col-md-9">
            <textarea
              maxLength={350}
              onChange={handleChange}
              name="bodyContent"
              className="form-control bodyContent"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massaa tempor"
              defaultValue={props.data.bodyContent || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massaa tempor"}

            ></textarea>
          </div>
        </div>
        <div className="row  margin-bottom">
          <div className="col-md-3">
            <label className="lable">Show Info Ribbon</label>
          </div>
          <div className="col-md-9">
            <div className="button-switch">
              <input defaultChecked={props.data.showInfoRibbon?true:false} onChange={handleChange} className="checkBox" name="showInfoRibbon" id="showInfoRibbon" type="checkbox" value="true" />
              <label htmlFor="showInfoRibbon" className="label-success"></label>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-actions">
        <button
          type="button"
          onClick={() => props.setConetnt("main")}
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
  );
}

export default index;
