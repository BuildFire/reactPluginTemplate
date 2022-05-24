import React, { useEffect, useState } from "react";
import useForm from "../../hooks/form";
import "./style.less";
function index(props) {
  const [thumbnailImage, setThumbnailImage] = useState(null);
  useEffect(() => {
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
    handelImage({thumbnailImage});
  },[thumbnailImage])
  // submit form function 
  function submitForm(values) {
    console.log('forms values ->', values);
  }

  const { handleChange, handleSubmit, handelImage } = useForm(submitForm);

  return (
    <>
    <form onSubmit={handleSubmit}>
      <h1>Page Details</h1>
      <div className="layOutContainer">
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Main Media Type</label>
          </div>
          <div className="col-md-9">
            <input className="checkBox"  type="radio" name="mediaType" value="image" defaultChecked onChange={handleChange}/>
            <label className="lable">Image</label>
            <input className="checkBox"  type="radio" name="mediaType" value="video" onChange={handleChange} />
            <label className="lable">Video</label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Main Image</label>
          </div>
          <div className="col-md-9">
            <div className="vertical-rectangle thumbnail"></div>
          </div>
        </div>
        <div className="row margin-bottom">
          <div className="col-md-3">
            <label className="lable">Enable Full Screen</label>
          </div>
          <div className="col-md-9">
            <input type="checkBox" className="checkBox" name="enableFullScreen" id="enableFullScreen" onChange={handleChange}/>
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
    </>
  );
}

export default index;
