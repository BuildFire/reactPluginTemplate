import React, { useEffect, useState } from "react";
import useForm from "../../hooks/form";
import "./style.less";
import "../../../../../../../styles/control/bf-base.css";
import VideoUi from "../../shared/VideoUi";
import ThumbnailUI from "../../shared/ThumbnailUI";
function index(props) {
  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [thumbnailImage2, setThumbnailImage2] = useState(null);
  const [thumbnailImage3, setThumbnailImage3] = useState(null);

  const [uploadType2, setUploadType2] = useState("image");
  const [uploadType3, setUploadType3] = useState("image");

  const [videoURL2, setVideoURL2] = useState("");
  const [videoURL3, setVideoURL3] = useState("");

  useEffect(() => {
    handelImage({
      thumbnailImage,
      thumbnailImage2,
      thumbnailImage3,
      videoURL2,
      videoURL3,
    });
  }, [thumbnailImage, thumbnailImage2, thumbnailImage3, videoURL2, videoURL3]);
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
    setVideoURL2(props.data.videoURL2);
    setVideoURL3(props.data.videoURL3);
    setUploadType2(props.data.mediaType2);
    setUploadType3(props.data.mediaType3);
    }
  },[props])

  function handleChangeInputType(e, indexOfMedia) {
    if (indexOfMedia == 2) {
      setUploadType2(e.target.value);
      handleChange(e);
    }
    if (indexOfMedia == 3) {
      setUploadType3(e.target.value);
      handleChange(e);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Page Details</h1>
      <div className="layOutContainer slide-in">
      <ThumbnailUI
              index={1}
              recommended={"Recommended: 675 x 1200"}
              thumbnailImage={thumbnailImage}
              setThumbnailImage={setThumbnailImage}
              imageTag={"Background Image"}
              classList={"vertical-rectangle thumbnail"}
              aspectRatio={"9x16"}
            />
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Enable Full Screen</label>
          </div>
          <div className="col-md-9">
            <input
              onChange={handleChange}
              className="checkBox"
              type="checkBox"
              name="enableFullScreen1"
              id="enableFullScreen1"
              defaultChecked={props.data.enableFullScreen1?true:false}
              />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Top Media Type</label>
          </div>
          <div className="col-md-9">
            <input
              onChange={(e) => handleChangeInputType(e, 2)}
              className="checkBox"
              type="radio"
              name="mediaType2"
              value="image"
              defaultChecked={props.data.mediaType2!="video"?true:false}
            />
            <label className="lable">Image</label>
            <input
              onChange={(e) => handleChangeInputType(e, 2)}
              className="checkBox"
              type="radio"
              name="mediaType2"
              value="video"
              defaultChecked={props.data.mediaType2=="video"?true:false}
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
          imageTag={"Top Image"}
          classList={"thumbnail2 horizontal-rectangle"}
          aspectRatio={"16x9"}
        />
        ) : (
          <>
            <VideoUi
              handleChange={handleChange}
              setVideoURL={setVideoURL2}
              videoURL={videoURL2}
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
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Top Body content</label>
          </div>
          <div className="col-md-9">
            <textarea
              placeholder="Top Body content"
              maxLength={140}
              name="TopBodyContent"
              onChange={handleChange}
              className="form-control bodyContent"
              defaultValue={props.data.TopBodyContent}
            ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Main Media Type</label>
          </div>
          <div className="col-md-9">
            <input
              onChange={(e) => handleChangeInputType(e, 3)}
              className="checkBox"
              type="radio"
              name="mediaType3"
              value="image"
              defaultChecked={props.data.mediaType3!="video"?true:false}
            />
            <label className="lable">Image</label>
            <input
              onChange={(e) => handleChangeInputType(e, 3)}
              className="checkBox"
              type="radio"
              name="mediaType3"
              value="video"
              defaultChecked={props.data.mediaType3=="video"?true:false}
            />
            <label className="lable">Video</label>
          </div>
        </div>
        {uploadType3  !== "video" ? (
          <>
           <ThumbnailUI
           index={3}
           recommended={"Recommended: 1200 x 675"}
           thumbnailImage={thumbnailImage3}
           setThumbnailImage={setThumbnailImage3}
           imageTag={"Main Image"}
           classList={"thumbnail3 horizontal-rectangle"}
           aspectRatio={"16x9"}
         />
         </>
        ) : (
          <>
            <VideoUi
              handleChange={handleChange}
              setVideoURL={setVideoURL3}
              videoURL={videoURL3}
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
              name="enableFullScreen3"
              id="enableFullScreen3"
              defaultChecked={props.data.enableFullScreen3?true:false}
            />
          </div>
        </div>

        <div className="row ">
          <div className="col-md-3">
            <label className="lable">Main Body content</label>
          </div>
          <div className="col-md-9">
            <textarea
              placeholder="Main Body content"
              maxLength={140}
              name="MainBodyContent"
              onChange={handleChange}
              className="form-control bodyContent"
              defaultValue={props.data.MainBodyContent}
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

export default index;
