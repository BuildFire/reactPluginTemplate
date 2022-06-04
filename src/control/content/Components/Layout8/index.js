import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import useForm from "../../hooks/form";
import "./style.less";
import "../../../../../../../styles/control/bf-base.css";
import VideoUi from "../../shared/VideoUi";
import ThumbnailUI from "../../shared/ThumbnailUI";

function index(props) {
  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [thumbnailImage2, setThumbnailImage2] = useState(null);
  const [thumbnailImage3, setThumbnailImage3] = useState(null);
  const [thumbnailImage4, setThumbnailImage4] = useState(null);

  const [uploadType, setUploadType] = useState("image");
  const [uploadType2, setUploadType2] = useState("image");
  const [uploadType3, setUploadType3] = useState("image");

  const [videoURL1, setVideoURL1] = useState("");
  const [videoURL2, setVideoURL2] = useState("");
  const [videoURL3, setVideoURL3] = useState("");

  useEffect(() => {
    handelImage({
      thumbnailImage,
      thumbnailImage2,
      thumbnailImage3,
      thumbnailImage4,
      videoURL1,
      videoURL2,
      videoURL3,
    });
  }, [
    thumbnailImage,
    thumbnailImage2,
    thumbnailImage3,
    thumbnailImage4,
    videoURL1,
    videoURL2,
    videoURL3,
  ]);
  // submit form function
  function submitForm(values) {
    console.log(
      `Submit function in layout${props.selectedLayout + 1} ->`,
      values
    );
    props.saveData(values);
  }

  const { handleChange, handleSubmit, handelImage } = useForm(submitForm);
  function handleChangeInputType(e, indexOfMedia) {
    if (indexOfMedia == 1) {
      setUploadType(e.target.value);
      handleChange(e);
    }
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
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Media Type 1</label>
          </div>
          <div className="col-md-9">
            <input
              onChange={(e) => handleChangeInputType(e, 1)}
              className="checkBox"
              type="radio"
              name="mediaType"
              value="image"
              defaultChecked
            />
            <label className="lable">Image</label>
            <input
              onChange={(e) => handleChangeInputType(e, 1)}
              className="checkBox"
              type="radio"
              name="mediaType"
              value="video"
            />
            <label className="lable">Video</label>
          </div>
        </div>

        {uploadType == "image" ? (
          <>
            <ThumbnailUI
              index={1}
              recommended={"Recommended: 1200 x 1200"}
              thumbnailImage={thumbnailImage}
              setThumbnailImage={setThumbnailImage}
              imageTag={"Top Image"}
              classList={"thumbnail sequare"}
            />
          </>
        ) : (
          <>
            <VideoUi
              handleChange={handleChange}
              setVideoURL={setVideoURL1}
              videoURL={videoURL1}
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
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Body content 1</label>
          </div>
          <div className="col-md-9">
            <textarea
              name="BodyContent"
              maxLength={140}
              placeholder="Body content 1"
              onChange={handleChange}
              className="form-control bodyContent"
            ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Media Type 2</label>
          </div>
          <div className="col-md-9">
            <input
              onChange={(e) => handleChangeInputType(e, 2)}
              className="checkBox"
              type="radio"
              name="mediaType2"
              value="image"
              defaultChecked
            />
            <label className="lable">Image</label>
            <input
              onChange={(e) => handleChangeInputType(e, 2)}
              className="checkBox"
              type="radio"
              name="mediaType2"
              value="video"
            />
            <label className="lable">Video</label>
          </div>
        </div>
        {uploadType2 == "image" ? (
          <>
            <ThumbnailUI
              index={2}
              recommended={"Recommended: 1200 x 1200"}
              thumbnailImage={thumbnailImage2}
              setThumbnailImage={setThumbnailImage2}
              imageTag={"Main Image"}
              classList={"sequare thumbnail2"}
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
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Body content 2</label>
          </div>
          <div className="col-md-9">
            <textarea
              name="BodyContent2"
              maxLength={140}
              placeholder="Body content 2"
              onChange={handleChange}
              className="form-control bodyContent"
            ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Media Type 3</label>
          </div>
          <div className="col-md-9">
            <input
              onChange={(e) => handleChangeInputType(e, 3)}
              className="checkBox"
              type="radio"
              name="mediaType3"
              value="image"
              defaultChecked
            />
            <label className="lable">Image</label>
            <input
              onChange={(e) => handleChangeInputType(e, 3)}
              className="checkBox"
              type="radio"
              name="mediaType3"
              value="video"
            />
            <label className="lable">Video</label>
          </div>
        </div>
        {uploadType3 == "image" ? (
          <>
            <ThumbnailUI
              index={3}
              recommended={"Recommended: 1200 x 1200"}
              thumbnailImage={thumbnailImage3}
              setThumbnailImage={setThumbnailImage3}
              imageTag={"Main Image"}
              classList={"sequare thumbnail3"}
            />
          </>
        ) : (
          <>
            <VideoUi
              handleChange={handleChange}
              setVideoURL={setVideoURL3}
              videoURL={videoURL3}
              index={3}
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
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Body content 3</label>
          </div>
          <div className="col-md-9">
            <textarea
              name="BodyContent3"
              maxLength={140}
              onChange={handleChange}
              placeholder="Body content 3"
              className="form-control bodyContent"
            ></textarea>
          </div>
        </div>
        <>
          <ThumbnailUI
            index={4}
            recommended={"Recommended: 1200 x 302"}
            thumbnailImage={thumbnailImage4}
            setThumbnailImage={setThumbnailImage4}
            imageTag={"Bottom Image"}
            classList={"horizontal-rectangle thumbnail4"}
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
              name="enableFullScreen4"
              id="enableFullScreen4"
            />
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
  );
}

export default hot(index);
