import React, { useEffect, useState } from "react";
import useForm from "../../hooks/form";
import VideoUi from "../../shared/VideoUi";
import "./style.less";
function index(props) {
  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [uploadType, setUploadType] = useState("image");
  const [videoURL, setVideoURL] = useState("");
  useEffect(() => {
    if (uploadType == "image") {
      //  set up thumbnail -->
      let thumbnail = new buildfire.components.images.thumbnail(".thumbnail", {
        imageUrl: "",
        title: " ",
        dimensionsLabel: "Recommended: 1200 x 675",
        multiSelection: false,
      });
      
      if (thumbnailImage) {
        thumbnail.loadbackground(thumbnailImage);
      }
      // thumbnail Change image -->
      thumbnail.onChange = (imageUrl) => {
        let croppedImage = buildfire.imageLib.cropImage(
          imageUrl,
          { size: "full_width", aspect: "16:9" }
        );
        setThumbnailImage(croppedImage);
      };
      // thumbnail Delete Image -->
      thumbnail.onDelete = (imageUrl) => {
        setThumbnailImage(null);
      };
    }
  }, [uploadType])


  useEffect(() => {
    handelImage({thumbnailImage,videoURL});
  },[thumbnailImage,videoURL])
  // submit form function 
  function submitForm(values) {
    console.log('forms values ->', values);
  }
  
  function handleChangeInputType(e) {
    setUploadType(e.target.value);
    handleChange(e);
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
            <input className="checkBox"  type="radio" name="mediaType" value="image" defaultChecked onChange={handleChangeInputType}/>
            <label className="lable">Image</label>
            <input className="checkBox"  type="radio" name="mediaType" value="video" onChange={handleChangeInputType} />
            <label className="lable">Video</label>
          </div>
        </div>
        
        {
          uploadType == "image" ?
            (<div className="row">
              <div className="col-md-3">
                <label className="lable">Main Image</label>
              </div>
              <div className="col-md-9">
                <div className="vertical-rectangle thumbnail"></div>
              </div>
            </div>) : (
              <>
                <VideoUi handleChange={handleChange} setVideoURL={setVideoURL}  videoURL={videoURL} index={1}/>
              </>
            )
        }
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
