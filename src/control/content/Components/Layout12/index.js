import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import useForm from "../../hooks/form";
import "./style.less";
import "../../../../../../../styles/control/bf-base.css";
import VideoUi from "../../shared/VideoUi";
import ThumbnailUI from "../../shared/ThumbnailUI";

function index(props) {
  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [wysiwygData, setWysiwygData] = useState(null);
  const [uploadType, setUploadType] = useState("image");
  const [videoURL, setVideoURL] = useState("");

  useEffect(() => {
    // set up WYSIWYG -->
    tinymce.init({
      selector: "#wysiwygContent",
      setup: (editor) => {
        editor.on("input", (e) =>
          setWysiwygData(tinymce.activeEditor.getContent())
        );
        editor.on("change", (e) =>
          setWysiwygData(tinymce.activeEditor.getContent())
        );
      },
    });
  }, []);

  useEffect(() => {
    handelImage({ thumbnailImage, wysiwygData, videoURL });
  }, [thumbnailImage, wysiwygData, videoURL]);

  // submit form function
  function submitForm(values) {
    console.log(
      `Submit function in layout${props.selectedLayout + 1} ->`,
      values
    );
    props.saveData(values);
  }

  const { handleChange, handleSubmit, handelImage } = useForm(submitForm);
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
              name="topMediaType"
              value="image"
              defaultChecked
            />
            <label className="lable">Image</label>
            <input
              onChange={handleChangeInputType}
              className="checkBox"
              type="radio"
              name="topMediaType"
              value="video"
            />
            <label className="lable">Video</label>
          </div>
        </div>

        {uploadType == "image" ? (
          <>
            <ThumbnailUI
              index={1}
              recommended={"Recommended: 1200 x 675"}
              thumbnailImage={thumbnailImage}
              setThumbnailImage={setThumbnailImage}
              imageTag={"Top Image"}
              classList={"thumbnail horizontal-rectangle"}
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
            ></input>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <label className="lable">Body Contant</label>
          </div>
        </div>
        <textarea
          placeholder="Body Contant ..."
          id="wysiwygContent"
          name="wysiwygContent"
        ></textarea>
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
  );
}

export default hot(index);
