import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";

import useForm from "../../hooks/form";

import "./style.less";
import "../../../../../../../styles/control/bf-base.css";
function index(props) {
  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [thumbnailImage2, setThumbnailImage2] = useState(null);

  useEffect(() => {
    let thumbnail = new buildfire.components.images.thumbnail(".thumbnail", {
      imageUrl: "",
      title: " ",
      dimensionsLabel: "Recommended: 1200 x 960",
      multiSelection: false,
    });
    let thumbnail2 = new buildfire.components.images.thumbnail(".thumbnail2", {
      imageUrl: "",
      title: " ",
      dimensionsLabel: "Recommended: 1200 x 675",
      multiSelection: false,
    });
    thumbnail.onChange = (imageUrl) => {
      setThumbnailImage(imageUrl);
    };
    thumbnail2.onChange = (imageUrl) => {
      setThumbnailImage2(imageUrl);
    };

    // thumbnail Delete Image -->
    thumbnail.onDelete = (imageUrl) => {
      setThumbnailImage(null);
    };
    thumbnail2.onDelete = (imageUrl) => {
      setThumbnailImage2(null);
    };

    console.log("hello", props.selectedLayout);
  }, []);

  useEffect(() => {
    setObjectData(null);
  }, [thumbnailImage, thumbnailImage2]);
  // submit form function
  function submitForm(values) {
    console.log("forms values ->", values);
  }
  // use hooks to make our life easier
  const setObjectData = (e) => {
    let checkBoxes;
    if (document.getElementById("enableFullScreen").checked) {
      checkBoxes = true;
    } else {
      checkBoxes = false;
    }
    let checkBoxes2;
    if (document.getElementById("enableFullScreen2").checked) {
      checkBoxes2 = true;
    } else {
      checkBoxes2 = false;
    }
    let imagesObj = {
      MainImage: thumbnailImage,
      MainImage2: thumbnailImage2,
      enableFullScreen1: checkBoxes,
      enableFullScreen2: checkBoxes2,

      selectedLayOut: props.selectedLayout,
    };
    if (e && e.target.type != "checkbox") {
      handleChange(e, imagesObj);
    } else {
      handelChangeImage(imagesObj);
    }
  };

  function submitForm(values) {
    console.log("forms values ->", values);
  }
  const { handleChange, handleSubmit, handelChangeImage } = useForm(submitForm);

  return (
    <form onSubmit={handleSubmit}>
      <h1>Page Details</h1>
      <div className="layOutContainer">
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Background Image</label>
          </div>
          <div className="col-md-9">
            <div className="thumbnail sequare"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Enable Full Screen</label>
          </div>
          <div className="col-md-9">
            <input
              onChange={setObjectData}
              type="checkBox"
              name="enableFullScreen"
              id="enableFullScreen"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Top Media Type</label>
          </div>
          <div className="col-md-9">
            <input
              onChange={setObjectData}
              type="radio"
              name="mediaType"
              value="image"
              defaultChecked
            />
            <label className="lable">Image</label>
            <input
              onChange={setObjectData}
              type="radio"
              name="mediaType"
              value="video"
            />
            <label className="lable">Video</label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Top Image</label>
          </div>
          <div className="col-md-9">
            <div className="thumbnail2 horizontal-rectangle"></div>
          </div>
        </div>

        <div className="row margin-bottom">
          <div className="col-md-3">
            <label className="lable">Enable Full Screen</label>
          </div>
          <div className="col-md-9">
            <input
              onChange={setObjectData}
              type="checkBox"
              name="enableFullScreen2"
              id="enableFullScreen2"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <label className="lable">Title</label>
          </div>
          <div className="col-md-9">
            <input
              onChange={setObjectData}
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
              onChange={setObjectData}
              className="form-control fullWidth"
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Body content 1</label>
          </div>
          <div className="col-md-9">
            <textarea
              onChange={setObjectData}
              className="form-control bodyContent"
            ></textarea>
          </div>
        </div>
        <div className="row margin-bottom">
          <div className="col-md-3">
            <label className="lable">Body content 2</label>
          </div>
          <div className="col-md-9">
            <textarea
              onChange={setObjectData}
              className="form-control bodyContent"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="bottom-actions">
        <button className="btn btn-default" id="layoutBackBtn">
          Cancel
        </button>
        <button className="btn btn-success" id="layoutSaveBtn">
          Save
        </button>
      </div>
    </form>
  );
}

export default hot(index);
