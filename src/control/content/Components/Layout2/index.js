
import React, { useEffect, useState } from "react";
import useForm from "../../hooks/form";
import ThumbnailUI from "../../shared/ThumbnailUI";
import VideoUi from "../../shared/VideoUi";
import "./style.less";
function index(props) {

  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [thumbnailImage2, setThumbnailImage2] = useState(null);
  const [uploadType, setUploadType] = useState("image");
  const [videoURL, setVideoURL] = useState("");

  useEffect(() => {
    handelImage({ thumbnailImage, thumbnailImage2, videoURL });
  }, [thumbnailImage, thumbnailImage2, videoURL])

  // submit form function 
  function submitForm(values) {
    console.log('forms values ->', values);
  }

  // use hooks to make our life easier 
  const { handleChange, handleSubmit, handelImage } = useForm(submitForm);

  function handleChangeInputType(e) {
    setUploadType(e.target.value);
    handleChange(e);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Page Details</h1>
        <div className="layOutContainer">
        <ThumbnailUI
              index={1}
              recommended={"Recommended: 675 x 1200"}
              thumbnailImage={thumbnailImage}
              setThumbnailImage={setThumbnailImage}
              imageTag={"Background Image"}
              classList={"vertical-rectangle thumbnail"}
            />
          <div className="row">
            <div className="col-md-3">
              <label className="lable">Enable Full Screen</label>
            </div>
            <div className="col-md-9">
              <input type="checkBox" className="checkBox" name="enableFullScreen" id="enableFullScreen" onChange={handleChange} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <label className="lable">Main Media Type</label>
            </div>
            <div className="col-md-9">
              <input className="checkBox" type="radio" name="mediaType" value="image" defaultChecked onChange={handleChangeInputType} />
              <label className="lable">Image</label>
              <input className="checkBox" type="radio" name="mediaType" value="video" onChange={handleChangeInputType} />
              <label className="lable">Video</label>
            </div>
          </div>
          {
            uploadType == "image" ?
              (
                <ThumbnailUI
                index={2}
                recommended={"Recommended: 1200 x 675"}
                thumbnailImage={thumbnailImage2}
                setThumbnailImage={setThumbnailImage2}
                imageTag={"Main Image"}
                classList={"horizontal-rectangle thumbnail2"}
              />
              ) : (
                <>
                  <VideoUi setVideoURL={setVideoURL} videoURL={videoURL} handleChange={handleChange} index={1} />
                </>
              )
          }

          <div className="row margin-bottom">
            <div className="col-md-3">
              <label className="lable">Enable Full Screen</label>
            </div>
            <div className="col-md-9">
              <input type="checkBox" className="checkBox" name="enableMainFullScreen" id="enableMainFullScreen" onChange={handleChange} />
            </div>
          </div>
        </div>
        <div className="bottom-actions">
          <button type="button" onClick={()=>props.setActiveComponent("external1")}  className="btn btn-default" id="layoutBackBtn">
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

