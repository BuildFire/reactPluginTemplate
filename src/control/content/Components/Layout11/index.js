import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import useForm from "../../hooks/form";
import "./style.less";
import "../../../../../../../styles/control/bf-base.css";
import VideoUi from "../../shared/VideoUi";
import ThumbnailUI from "../../shared/ThumbnailUI";

function index(props) {
  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [uploadType, setUploadType] = useState("image");
  const [videoURL, setVideoURL] = useState("");

  useEffect(() => {
    handelImage({ thumbnailImage, videoURL });
  }, [thumbnailImage, videoURL]);
  // submit form function
  function submitForm(values) {
    console.log(
      `Submit function in layout${props.selectedLayout + 1} ->`,
      values
    );
    props.saveData(values);
  }

  const { handleChange, handleSubmit, handelImage, getOldData } = useForm(submitForm);
  useEffect(() => {
    if(props.data){
    getOldData(props.data);
    setThumbnailImage(props.data.thumbnailImage)
    setVideoURL(props.data.videoURL);
    setUploadType(props.data.TopMediaType);
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
            <label className="lable">Top Media Type</label>
          </div>
          <div className="col-md-9">
            <input
              onChange={handleChangeInputType}
              className="checkBox"
              type="radio"
              name="TopMediaType"
              value="image"
              defaultChecked={props.data.TopMediaType!="video"?true:false}

            />
            <label className="lable">Image</label>
            <input
              onChange={handleChangeInputType}
              className="checkBox"
              type="radio"
              name="TopMediaType"
              value="video"
              defaultChecked={props.data.TopMediaType=="video"?true:false}
            />
            <label className="lable">Video</label>
          </div>
        </div>

        {uploadType  !== "video" ? (
          <>
            <ThumbnailUI
              index={1}
              recommended={"Recommended: 1200 x 675"}
              thumbnailImage={thumbnailImage}
              setThumbnailImage={setThumbnailImage}
              imageTag={"Top Image"}
              classList={"thumbnail horizontal-rectangle"}
              aspectRatio={"16x9"}
            />
          </>
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
              placeholder="Enable Full Screen"
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
              placeholder="Title"
              onChange={handleChange}
              maxLength="80"
              id="title"
              name="title"
              className="form-control fullWidth"
              defaultValue={props.data.title || "Title"}
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Subtitle</label>
          </div>
          <div className="col-md-9">
            <input
              placeholder="Subtitle"
              onChange={handleChange}
              maxLength="100"
              id="subTitle"
              name="subTitle"
              className="form-control fullWidth"
              defaultValue={props.data.subTitle || "Subtitle"}
              ></input>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Body content 1</label>
          </div>
          <div className="col-md-9">
            <textarea
              placeholder="Body content 1"
              onChange={handleChange}
              maxLength="200"
              name="BodyContent1"
              className="form-control bodyContent"
              defaultValue={props.data.BodyContent1 ||  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massaa tempor."}
              ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Body content 2</label>
          </div>
          <div className="col-md-9">
            <textarea
              placeholder="Body content 2"
              onChange={handleChange}
              maxLength="200"
              name="BodyContent2"
              className="form-control bodyContent"
              defaultValue={props.data.BodyContent2 || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massaa tempor."}
              ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Body content 3</label>
          </div>
          <div className="col-md-9">
            <textarea
              placeholder="Body content 3"
              onChange={handleChange}
              maxLength="200"
              name="BodyContent3"
              className="form-control bodyContent"
              defaultValue={props.data.BodyContent3 || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massaa tempor."}
              ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">External URL</label>
          </div>
          <div className="col-md-9">
            <input
              placeholder="External URL"
              onChange={handleChange}
              name="ExternalURL"
              className="form-control fullWidth"
              defaultValue={props.data.ExternalURL}
              ></input>
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
  );
}

export default hot(index);
