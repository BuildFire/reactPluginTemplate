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
  const { handleChange, handleSubmit, handelImage, getOldData } = useForm(submitForm);
  useEffect(() => {
    if(props.data){
    getOldData(props.data);
    setThumbnailImage(props.data.thumbnailImage)
    setThumbnailImage2(props.data.thumbnailImage2)
    setVideoURL(props.data.videoURL);
    setVideoURL2(props.data.videoURL2);
    setUploadType(props.data.topMediaType);
    setUploadType2(props.data.mainMediaType);
    }
  },[props])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Page Details</h1>
        <div className="layOutContainer slide-in">
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
                onChange={handleChangeInputType}
                defaultChecked={props.data.topMediaType!="video"?true:false}
              />
              <label className="lable">Image</label>
              <input
                className="checkBox"
                type="radio"
                name="topMediaType"
                value="video"
                onChange={handleChangeInputType}
                defaultChecked={props.data.topMediaType=="video"?true:false}
              />
              <label className="lable">Video</label>
            </div>
          </div>
          {uploadType  !== "video" ? (
            <ThumbnailUI
              index={1}
              recommended={"Recommended: 1200 x 675"}
              thumbnailImage={thumbnailImage}
              setThumbnailImage={setThumbnailImage}
              imageTag={"Top Image"}
              classList={"horizontal-rectangle thumbnail2"}
              aspectRatio={"16x9"}
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
                defaultChecked={props.data.enableFullScreen?true:false}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <label className="lable">Top Title</label>
            </div>
            <div className="col-md-9">
              <input
                maxLength={80}
                className="form-control fullWidth"
                type="text"
                name="title"
                placeholder="Title"
                onChange={handleChange}
                defaultValue={props.data.title}

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
                defaultValue={props.data.subtitle}

              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <label className="lable">Top Body Content</label>
            </div>
            <div className="col-md-9">
              <textarea
                maxLength={250}
                placeholder="Body Content"
                className="form-control bodyContent"
                name="bodyContent"
                onChange={handleChange}
                defaultValue={props.data.bodyContent}

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
                onChange={handleChangeInputType}
                defaultValue={props.data.mainMediaType!="video"?true:false}
              />
              <label className="lable">Image</label>
              <input
                className="checkBox"
                type="radio"
                name="mainMediaType"
                value="video"
                onChange={handleChangeInputType}
                defaultValue={props.data.mainMediaType=="video"?true:false}

              />
              <label className="lable">Video</label>
            </div>
          </div>
          {uploadType2  !== "video" ? (
            <ThumbnailUI
              index={2}
              recommended={"Recommended: 1200 x 675"}
              thumbnailImage={thumbnailImage2}
              setThumbnailImage={setThumbnailImage2}
              imageTag={"Main Image"}
              classList={"horizontal-rectangle thumbnail3"}
              aspectRatio={"16x9"}
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
                defaultValue={props.data.enableMainFullScreen?true:false}

              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <label className="lable">Main Body Content</label>
            </div>
            <div className="col-md-9">
              <textarea
                maxLength={200}
                placeholder="Main Body Content"
                className="form-control bodyContent"
                name="mainBodyContent"
                onChange={handleChange}
                defaultValue={props.data.mainBodyContent}
              ></textarea>
            </div>
          </div>
          <div className="row  margin-bottom">
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
                  defaultChecked={props.data.showInfoRibbon?true:false}
                />
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
    </>
  );
}

export default index;
