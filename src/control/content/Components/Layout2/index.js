import React, { useEffect,useState } from "react";
import useForm from "../../hooks/form";
import "./style.less";
function index(props) {
  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [thumbnailImage2, setThumbnailImage2] = useState(null);
  useEffect(() => {
    let thumbnail = new buildfire.components.images.thumbnail(".thumbnail", {
      imageUrl: "",
      title: " ",
      dimensionsLabel: "Recommended: 675 x 1200",
      multiSelection: false,
    });
    let thumbnail2 = new buildfire.components.images.thumbnail(".thumbnail2", {
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
    thumbnail2.onChange = (imageUrl) => {
      setThumbnailImage2(imageUrl);
    };
    // thumbnail Delete Image -->
    thumbnail2.onDelete = (imageUrl) => {
      setThumbnailImage2(null);
    };
  }, []);

  useEffect(() => {
    handelImage({thumbnailImage,thumbnailImage2});
  },[thumbnailImage,thumbnailImage2])

// submit form function 
  function submitForm(values) {
    console.log('forms values ->', values);
  }
  // use hooks to make our life easier 
  const { handleChange, handleSubmit, handelImage } = useForm(submitForm);


  return (
    <>
    <form onSubmit={handleSubmit}>
      <h1>Page Details</h1>
      <div className="layOutContainer">
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
            <input type="checkBox" name="enableFullScreen" id="enableFullScreen" onChange={handleChange}/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Main Media Type</label>
          </div>
          <div className="col-md-9">
            <input type="radio" name="mediaType" value="image" defaultChecked onChange={handleChange}/>
            <label className="lable">Image</label>
            <input type="radio" name="mediaType" value="video" onChange={handleChange}/>
            <label className="lable">Video</label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Main Image</label>
          </div>
          <div className="col-md-9">
            <div className="horizontal-rectangle thumbnail2"></div>
          </div>
        </div>
        <div className="row margin-bottom">
          <div className="col-md-3">
            <label className="lable">Enable Full Screen</label>
          </div>
          <div className="col-md-9">
            <input type="checkBox" name="enableMainFullScreen" id="enableMainFullScreen" onChange={handleChange}/>
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
