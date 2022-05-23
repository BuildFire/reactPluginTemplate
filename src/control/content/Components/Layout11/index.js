import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import useForm from "../../hooks/form";
import "./style.less";
import "../../../../../../../styles/control/bf-base.css";
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
    setObjectData(null);
  },[thumbnailImage])
  // submit form function 
  function submitForm(values) {
    console.log('forms values ->', values);
  }
  // use hooks to make our life easier 
  const setObjectData = (e) => {
    let imagesObj = {
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
            <input onChange={setObjectData} type="radio" name="TopMediaType" value="image" defaultChecked />
            <label className="lable">Image</label>
            <input onChange={setObjectData} type="radio" name="TopMediaType" value="image" />
            <label className="lable">Video</label>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <label className="lable">Top Image</label>
          </div>
          <div className="col-md-9">
            <div className="thumbnail horizontal-rectangle" ></div>
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
            <input placeholder="Title" onChange={setObjectData} id="Title" name="Title" className="form-control fullWidth"></input>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Subtitle</label>
          </div>
          <div className="col-md-9">
            <input placeholder="Subtitle" onChange={setObjectData} id="SubTitle" name="SubTitle" className="form-control fullWidth"></input>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Body content 1</label>
          </div>
          <div className="col-md-9">
            <textarea placeholder="Body content 1" onChange={setObjectData} name="BodyContent1" className="form-control bodyContent"></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Body content 2</label>
          </div>
          <div className="col-md-9">
            <textarea placeholder="Body content 2" onChange={setObjectData} name="BodyContent2" className="form-control bodyContent"></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Body content 3</label>
          </div>
          <div className="col-md-9">
            <textarea placeholder="Body content 3" onChange={setObjectData} name="BodyContent3" className="form-control bodyContent"></textarea>
          </div>
        </div>
        <div className="row  margin-bottom">
          <div className="col-md-3">
            <label className="lable">External URL</label>
          </div>
          <div className="col-md-9">
            <input placeholder="External URL" onChange={setObjectData} name="External URL" className="form-control fullWidth"></input>
          </div>
        </div>

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
