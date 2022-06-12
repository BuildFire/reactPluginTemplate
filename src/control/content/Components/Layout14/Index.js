import React, { useState, useEffect } from "react";
import ThumbnailUI from "../../shared/ThumbnailUI";
import VideoUi from "../../shared/VideoUi";
import useForm from "../../hooks/form";
import "./style.less";
import WysiwygEditor from "../../shared/WysiwygEditor";
function Index(props) {
  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [thumbnailImage2, setThumbnailImage2] = useState(null);
  const [uploadType, setUploadType] = useState("image");
  const [uploadType2, setUploadType2] = useState("image");
  const [videoURL, setVideoURL] = useState("");
  const [videoURL2, setVideoURL2] = useState("");
  const [wysiwygData, setWysiwygData] = useState(null);
  const [wysiwygData2, setWysiwygData2] = useState(null);

  const { handleChange, handleSubmit, handelImage, getOldData } = useForm(submitForm);
  useEffect(() => {
    if (props.data) {
      getOldData(props.data);
      setThumbnailImage(props.data.thumbnailImage)
      setThumbnailImage2(props.data.thumbnailImage2)
      setVideoURL(props.data.videoURL);
      setVideoURL2(props.data.videoURL2);
      setUploadType(props.data.topMediaType);
      setUploadType2(props.data.bottomMediaType);
      setWysiwygData(props.data.wysiwygData);
      setWysiwygData2(props.data.wysiwygData2);
    }
  }, [props])
  // submit form function
  function submitForm(values) {
    console.log(
      `Submit function in layout${props.selectedLayout + 1} ->`,
      values
    );
    props.saveData(values);
  }
  function handleChangeInputType(e) {
    if (e.target.name === "topMediaType") {
      setUploadType(e.target.value);
    }
    if (e.target.name === "bottomMediaType") {
      setUploadType2(e.target.value);
    }
    handleChange(e);
  }
  useEffect(() => {
    handelImage({
      thumbnailImage,
      thumbnailImage2,
      videoURL,
      videoURL2,
      wysiwygData,
      wysiwygData2,
    });
  }, [
    thumbnailImage,
    thumbnailImage2,
    videoURL,
    videoURL2,
    wysiwygData,
    wysiwygData2,
  ]);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Page Details</h1>
        <div className="layOutContainer slide-in slide-in layout-14-container">
          <div className="row">
            <div className="col-md-3">
              <label className="lable">Top Media Type</label>
            </div>
            <div className="col-md-9">
              <input
                onChange={handleChangeInputType}
                className="checkBox"
                type="radio"
                name="topMediaType"
                value="image"
                defaultChecked={props.data.topMediaType != "video" ? true : false}
              />
              <label className="lable">Image</label>
              <input
                onChange={handleChangeInputType}
                className="checkBox"
                type="radio"
                name="topMediaType"
                value="video"
                defaultChecked={props.data.topMediaType == "video" ? true : false}
              />
              <label className="lable">Video</label>
            </div>
          </div>
          {uploadType  !== "video"? (
            <>
              <ThumbnailUI
                index={1}
                recommended={"Recommended: 1200 x 1200"}
                thumbnailImage={thumbnailImage}
                setThumbnailImage={setThumbnailImage}
                imageTag={"Top Image"}
                classList={"thumbnail sequare"}
                aspectRatio={"1x1"}
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
                name="enableFullScreen"
                id="enableFullScreen"
                defaultChecked={props.data.enableFullScreen ? true : false}
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

          <div className="row">
            <div className="col-md-3">
              <label className="lable">Body Contant</label>
            </div>
          </div>
          <WysiwygEditor index={1} setWysiwygData={setWysiwygData} />

          <div className="row">
            <div className="col-md-3">
              <label className="lable">Bottom Media Type</label>
            </div>
            <div className="col-md-9">
              <input
                onChange={handleChangeInputType}
                className="checkBox"
                type="radio"
                name="bottomMediaType"
                value="image"
                defaultChecked={props.data.bottomMediaType != "video" ? true : false}
              />
              <label className="lable">Image</label>
              <input
                onChange={handleChangeInputType}
                className="checkBox"
                type="radio"
                name="bottomMediaType"
                value="video"
                defaultChecked={props.data.bottomMediaType == "video" ? true : false}
              />
              <label className="lable">Video</label>
            </div>
          </div>
          {uploadType2  !== "video" ? (
            <>
              <ThumbnailUI
                index={2}
                recommended={"Recommended: 1200 x 1200"}
                thumbnailImage={thumbnailImage2}
                setThumbnailImage={setThumbnailImage2}
                imageTag={"Bottom Image"}
                classList={"thumbnail2 sequare"}
                aspectRatio={"1x1"}
              />
            </>
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
                onChange={handleChange}
                className="checkBox"
                type="checkBox"
                name="enableFullScreen2"
                id="enableFullScreen2"
                defaultChecked={props.data.enableFullScreen2 ? true : false}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <label className="lable">Title</label>
            </div>
            <div className="col-md-9">
              <input
                name="BottomTitle"
                maxLength={80}
                placeholder="Title"
                onChange={handleChange}
                className="form-control fullWidth"
                defaultValue={props.data.BottomTitle || "Title"}
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <label className="lable">Subtitle</label>
            </div>
            <div className="col-md-9">
              <input
                name="BottomSubTitle"
                maxLength={100}
                placeholder="Subtitle"
                onChange={handleChange}
                className="form-control fullWidth"
                defaultValue={props.data.BottomSubTitle || "Subtitle"}
              ></input>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <label className="lable">Body Contant</label>
            </div>
          </div>
          <WysiwygEditor index={2} setWysiwygData={setWysiwygData2} />

          <div className="row  margin-bottom">
            <div className="col-md-3">
              <label className="lable">Enable Prizes</label>
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
                  defaultChecked={props.data.showInfoRibbon ? true : false}
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

export default Index;
