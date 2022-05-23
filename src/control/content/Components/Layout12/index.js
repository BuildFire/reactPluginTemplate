import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import useForm from "../../hooks/form";
import "./style.less";
import "../../../../../../../styles/control/bf-base.css";
function index(props) {

  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [wysiwygData, setWysiwygData] = useState(null);

  useEffect(() => {
    //  set up thumbnail -->
    let thumbnail = new buildfire.components.images.thumbnail(".thumbnail", {
      imageUrl: "",
      title: " ",
      dimensionsLabel: "Recommended: 1200 x 675",
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
    // set up WYSIWYG -->
    tinymce.init({
      selector: "#wysiwygContent",
      setup: editor => {
          editor.on('input', (e) => setWysiwygData(tinymce.activeEditor.getContent()));
          editor.on('change', (e) => setWysiwygData(tinymce.activeEditor.getContent()));
      }
    });
  }, []);

  useEffect(() => {
    setObjectData(null);
  }, [thumbnailImage, wysiwygData])

  // submit form function 
  function submitForm(values) {
    console.log('forms values ->', values);
  }
  // use hooks to make our life easier 
  const setObjectData = (e) => {
    let imagesObj = {
      wysiwygData,
      backgroundImage: thumbnailImage,
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
            <label className="lable">Top Media Type</label>
          </div>
          <div className="col-md-9">
            <input onChange={setObjectData} type="radio" name="topMediaType" value="image" defaultChecked />
            <label className="lable">Image</label>
            <input onChange={setObjectData} type="radio" name="topMediaType" value="image" />
            <label className="lable">Video</label>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <label className="lable">Top Image</label>
          </div>
          <div className="col-md-9">
            <div className="thumbnail horizontal-rectangle"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Enable Full Screen</label>
          </div>
          <div className="col-md-9">
            <input placeholder="Enable Full Screen" onChange={setObjectData} type="checkBox" name="enableFullScreen" id="enableFullScreen" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Title</label>
          </div>
          <div className="col-md-9">
            <input placeholder="Title" onChange={setObjectData} id="title" name="title" className="form-control fullWidth"></input>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Subtitle</label>
          </div>
          <div className="col-md-9">
            <input placeholder="Subtitle" onChange={setObjectData} id="subTitle" name="subTitle" className="form-control fullWidth"></input>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <label className="lable">Body Contant</label>
          </div>
        </div>
        <textarea placeholder="Body Contant ..." className="margin-bottom" id="wysiwygContent" name="content"></textarea>
      </div>
      <div className="bottom-actions">
        <button type="button" className="btn btn-default" id="layoutBackBtn">
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
