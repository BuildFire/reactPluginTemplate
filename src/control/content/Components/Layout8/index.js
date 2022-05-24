import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import useForm from "../../hooks/form";
import "./style.less";
import "../../../../../../../styles/control/bf-base.css";
function index(props) {
  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [thumbnailImage2, setThumbnailImage2] = useState(null);
  const [thumbnailImage3, setThumbnailImage3] = useState(null);
  const [thumbnailImage4, setThumbnailImage4] = useState(null);
  useEffect(() => {
    let thumbnail = new buildfire.components.images.thumbnail(".thumbnail", {
      imageUrl: "",
      title: " ",
      dimensionsLabel: "Recommended: 1200 x 1200",
      multiSelection: false,
    });
    let thumbnail2 = new buildfire.components.images.thumbnail(".thumbnail2", {
      imageUrl: "",
      title: " ",
      dimensionsLabel: "Recommended: 1200 x 1200",
      multiSelection: false,
    });
    let thumbnail3 = new buildfire.components.images.thumbnail(".thumbnail3", {
      imageUrl: "",
      title: " ",
      dimensionsLabel: "Recommended: 1200 x 1200",
      multiSelection: false,
    });
    let thumbnail4 = new buildfire.components.images.thumbnail(".thumbnail4", {
      imageUrl: "",
      title: " ",
      dimensionsLabel: "Recommended: 1200 x 380",
      multiSelection: false,
    });
    // thumbnail Change image -->
    thumbnail.onChange = (imageUrl) => {
      setThumbnailImage(imageUrl);
    };
    thumbnail2.onChange = (imageUrl) => {
      setThumbnailImage2(imageUrl);
    };
    thumbnail3.onChange = (imageUrl) => {
      setThumbnailImage3(imageUrl);
    };
    thumbnail4.onChange = (imageUrl) => {
      setThumbnailImage4(imageUrl);
    };
    // thumbnail Delete Image -->
    thumbnail.onDelete = (imageUrl) => {
      setThumbnailImage(null);
    };
    thumbnail2.onDelete = (imageUrl) => {
      setThumbnailImage2(null);
    };
    thumbnail3.onDelete = (imageUrl) => {
      setThumbnailImage3(null);
    };
    thumbnail4.onDelete = (imageUrl) => {
      setThumbnailImage4(null);
    };

    console.log("hello", props.selectedLayout);
  }, []);

  useEffect(() => {
    handelImage({thumbnailImage, thumbnailImage2, thumbnailImage3, thumbnailImage4});
  }, [thumbnailImage, thumbnailImage2, thumbnailImage3, thumbnailImage4]);
// submit form function 
function submitForm(values) {
  console.log(`Submit function in layout${props.selectedLayout+1} ->`, values);
  props.saveData(values);
}
  function submitForm(values) {
    console.log("forms values ->", values);
  }
  const { handleChange, handleSubmit, handelImage } = useForm(submitForm);

  return (
    <form onSubmit={handleSubmit}>
      <h1>Page Details</h1>
      <div className="layOutContainer">
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Media Type 1</label>
          </div>
          <div className="col-md-9">
            <input
              onChange={handleChange}
              className="checkBox" type="radio"
              name="mediaType"
              value="image"
              defaultChecked
            />
            <label className="lable">Image</label>
            <input
              onChange={handleChange}
              className="checkBox" type="radio"
              name="mediaType"
              value="video"
            />
            <label className="lable">Video</label>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <label className="lable">Main Image</label>
          </div>
          <div className="col-md-9">
            <div className="sequare thumbnail"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Enable Full Screen</label>
          </div>
          <div className="col-md-9">
            <input
              onChange={handleChange}
              className="checkBox" type="checkBox"
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
              onChange={handleChange}
              className="checkBox" type="radio"
              name="mediaType2"
              value="image"
              defaultChecked
            />
            <label className="lable">Image</label>
            <input
              onChange={handleChange}
              className="checkBox" type="radio"
              name="mediaType2"
              value="image"
            />
            <label className="lable">Video</label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Main Image</label>
          </div>
          <div className="col-md-9">
            <div className="sequare thumbnail2"></div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <label className="lable">Enable Full Screen</label>
          </div>
          <div className="col-md-9">
            <input
              onChange={handleChange}
              className="checkBox" type="checkBox"
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
              onChange={handleChange}
              className="checkBox" type="radio"
              name="mediaType3"
              value="image"
              defaultChecked
            />
            <label className="lable">Image</label>
            <input
              onChange={handleChange}
              className="checkBox" type="radio"
              name="mediaType3"
              value="image"
            />
            <label className="lable">Video</label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Main Image</label>
          </div>
          <div className="col-md-9">
            <div className="sequare thumbnail3"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Enable Full Screen</label>
          </div>
          <div className="col-md-9">
            <input
              onChange={handleChange}
              className="checkBox" type="checkBox"
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
              onChange={handleChange}
              placeholder="Body content 3"
              className="form-control bodyContent"
            ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Bottom Image</label>
          </div>
          <div className="col-md-9">
            <div className="horizontal-rectangle thumbnail4"></div>
          </div>
        </div>
        <div className="row margin-bottom">
          <div className="col-md-3">
            <label className="lable">Enable Full Screen</label>
          </div>
          <div className="col-md-9">
            <input
              onChange={handleChange}
              className="checkBox" type="checkBox"
              name="enableFullScreen4"
              id="enableFullScreen4"
            />
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
