import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import useForm from "../../hooks/form";
import "./style.less";
import "../../../../../../../styles/control/bf-base.css";
import ThumbnailUI from "../../shared/ThumbnailUI";
import VideoUi from "../../shared/VideoUi";

function index(props) {
  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [thumbnailImage2, setThumbnailImage2] = useState(null);
  const [thumbnailImage3, setThumbnailImage3] = useState(null);
  const [uploadType, setUploadType] = useState("image");
  const [videoURL, setVideoURL] = useState("");

  useEffect(() => {
    handelImage({ thumbnailImage, thumbnailImage2, thumbnailImage3, videoURL });
  }, [thumbnailImage, thumbnailImage2, thumbnailImage3, videoURL]);

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
      setThumbnailImage2(props.data.thumbnailImage2)
      setThumbnailImage3(props.data.thumbnailImage3)
      setVideoURL(props.data.videoURL);
      setUploadType(props.data.mediaType);
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
        <>
          <ThumbnailUI
            index={1}
            recommended={"Recommended: 675 x 940"}
            thumbnailImage={thumbnailImage}
            setThumbnailImage={setThumbnailImage}
            imageTag={"Background Image"}
            classList={"vertical-rectangle thumbnail"}
            aspectRatio={"16x9"}
          />
        </>
        <div className="row">
          <div className="col-md-3">
            <label className="lable"></label>
          </div>
          <div className="col-md-9">
            <div className=""></div>
          </div>
        </div>
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
            <label className="lable">Top Media Type</label>
          </div>
          <div className="col-md-9">
            <input
              onChange={handleChangeInputType}
              className="checkBox"
              type="radio"
              name="mediaType"
              value="image"
              defaultChecked={props.data.mediaType != "video"?true:false}
            />
            <label className="lable">Image</label>
            <input
              onChange={handleChangeInputType}
              className="checkBox"
              type="radio"
              name="mediaType"
              value="video"
              defaultChecked={props.data.mediaType == "video"?true:false}
            />
            <label className="lable">Video</label>
          </div>
        </div>
        {uploadType  !== "video" ? (
          <>
            <ThumbnailUI
              index={2}
              recommended={"Recommended: 1200 x 380"}
              thumbnailImage={thumbnailImage2}
              setThumbnailImage={setThumbnailImage2}
              imageTag={"Top Image"}
              classList={"thumbnail2 horizontal-rectangle"}
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
              onChange={handleChange}
              className="checkBox"
              type="checkBox"
              name="enableFullScreen2"
              id="enableFullScreen2"
              defaultChecked={props.data.enableFullScreen2?true:false}
            />
          </div>
        </div>

        <>
          <ThumbnailUI
            index={3}
            recommended={"Recommended: 1200 x 675"}
            thumbnailImage={thumbnailImage3}
            setThumbnailImage={setThumbnailImage3}
            imageTag={"Main Image"}
            classList={"thumbnail3 horizontal-rectangle"}
          />
        </>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Enable Full Screen</label>
          </div>
          <div className="col-md-9">
            <input
              onChange={handleChange}
              className="checkBox"
              type="checkBox"
              name="enableFullScreen3"
              id="enableFullScreen3"
              defaultChecked={props.data.enableFullScreen3?true:false}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Title</label>
          </div>
          <div className="col-md-9">
            <input
              name="title"
              maxLength={80}
              placeholder="Title"
              onChange={handleChange}
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
              name="subTitle"
              maxLength={100}
              placeholder="Subtitle"
              onChange={handleChange}
              className="form-control fullWidth"
              defaultValue={props.data.subTitle || "Subtitle"}
              ></input>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-3">
            <label className="lable">Body content </label>
          </div>
          <div className="col-md-9">
            <textarea
              name="bodyContent"
              maxLength={140}
              placeholder= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massaa tempor."
              onChange={handleChange}
              className="form-control bodyContent"
              defaultValue={props.data.bodyContent || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massaa tempor."}
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
  );
}

export default hot(index);
