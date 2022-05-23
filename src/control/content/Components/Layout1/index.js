import React, { useEffect, useState } from "react";
import useForm from "../../hooks/form";
import "./style.less";

function index(props) {
  const [thumbnailImage, setThumbnailImage] = useState(null);

  useEffect(() => {
    // thumbnail set up -->
    let thumbnail = new buildfire.components.images.thumbnail(".thumbnail", {
      imageUrl: "",
      title: " ",
      dimensionsLabel: "Recommended: 675 x 1200",
      multiSelection: false,
    });
    // thumbnail Change image -->
    thumbnail.onChange = (imageUrl) => {
      setThumbnailImage(imageUrl);
    };
    // thumbnail Delete Image -->
    thumbnail.onDelete = (imageUrl) => {
      setThumbnailImage(null);
    };
  }, []);

  useEffect(() => {
    changingHandler(null);
  },[thumbnailImage])
  // submit form function 
  function submitForm(values) {
    console.log('forms values ->', values);
  }
  // use hooks to make our life easier 
  const changingHandler = (e) => {
    let checkBoxes;
    if (document.getElementById("enableFullScreen").checked) {
      checkBoxes = true;
    } else {
      checkBoxes = false;
    }
    let imagesObj = {
      backgroundImage: thumbnailImage,
      enableFullScreen: checkBoxes,
      selectedLayOut: props.selectedLayout
    }
    if (e) {
      handleChange(e, imagesObj);
    } else {
      handelChangeImage(imagesObj);
    }
  }
  const { handleChange, handleSubmit, handelChangeImage } = useForm(submitForm);

  return (
    <form onSubmit={handleSubmit}>
      <h1>Page Details</h1>
      <div className="layOutContainer">
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Background Media Type</label>
          </div>
          <div className="col-md-9">
            <input onChange={changingHandler} type="radio" name="BackgroundmediaType" value="image" defaultChecked />
            <label className="lable">Image</label>
            <input onChange={changingHandler} type="radio" name="BackgroundmediaType" value="Video" />
            <label className="lable">Video</label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Background Image</label>
          </div>
          <div className="col-md-9">
            <div className="vertical-rectangle thumbnail"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Enable Full Screen</label>
          </div>
          <div className="col-md-9">
            <input onChange={changingHandler} type="checkBox" name="enableFullScreen" id='enableFullScreen' />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Title</label>
          </div>
          <div className="col-md-9">
            <input onChange={changingHandler} className="form-control fullWidth" type="text" name="title" defaultValue="Title" />
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
              defaultValue="Subtitle"
              onChange={changingHandler}
            />
          </div>
        </div>
        <div className="row margin-bottom">
          <div className="col-md-3">
            <label className="lable">Body Content</label>
          </div>
          <div className="col-md-9">
            <textarea onChange={changingHandler} name="bodyContent" className="form-control bodyContent"></textarea>
          </div>
        </div>
      </div>
      <div className="bottom-actions">
        <button type="button" className="btn btn-default" id="layoutBackBtn">
          Cancel
        </button>
        <button
          type="submit"
          className="btn btn-success"
          id="layoutSaveBtn"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default index;
