import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import useForm from "../../hooks/form";
import "./style.less";
import "../../../../../../../styles/control/bf-base.css";
import VideoUi from "../../shared/VideoUi";
function index(props) {
  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [thumbnailImage2, setThumbnailImage2] = useState(null);
  const [thumbnailImage3, setThumbnailImage3] = useState(null);
  const [thumbnailImage4, setThumbnailImage4] = useState(null);

  const [uploadType, setUploadType] = useState("image");
  const [uploadType2, setUploadType2] = useState("image");
  const [uploadType3, setUploadType3] = useState("image");

  const [videoURL1, setVideoURL1] = useState("");
  const [videoURL2, setVideoURL2] = useState("");
  const [videoURL3, setVideoURL3] = useState("");



  useEffect(() => {
    let thumbnail4 = new buildfire.components.images.thumbnail(".thumbnail4", {
      imageUrl: "",
      title: " ",
      dimensionsLabel: "Recommended: 1200 x 380",
      multiSelection: false,
    });
    // thumbnail Change image -->
    thumbnail4.onChange = (imageUrl) => {
      setThumbnailImage4(imageUrl);
    };
    // thumbnail Delete Image -->
    thumbnail4.onDelete = (imageUrl) => {
      setThumbnailImage4(null);
    };
    console.log("hello", props.selectedLayout);
  }, []);


  useEffect(() => {
    if (uploadType == "image") {
      let thumbnail = new buildfire.components.images.thumbnail(".thumbnail", {
        imageUrl: "",
        title: " ",
        dimensionsLabel: "Recommended: 1200 x 1200",
        multiSelection: false,
      });
      thumbnail.onChange = (imageUrl) => {
        let croppedImage = buildfire.imageLib.cropImage(imageUrl, {
          size: "full_width",
          aspect: "16:9",
        });
        setThumbnailImage(croppedImage);
      };
      thumbnail.onDelete = (imageUrl) => {
        setThumbnailImage(null);
      };
      if (thumbnailImage) {
        thumbnail.loadbackground(thumbnailImage);
      }
    }
    if (uploadType2 == "image") {
      //  set up thumbnail -->
      let thumbnail2 = new buildfire.components.images.thumbnail(
        ".thumbnail2",
        {
          imageUrl: "",
          title: " ",
          dimensionsLabel: "Recommended: 1200 x 1200",
          multiSelection: false,
        }
      );
      thumbnail2.onChange = (imageUrl) => {
        let croppedImage = buildfire.imageLib.cropImage(imageUrl, {
          size: "full_width",
          aspect: "16:9",
        });
        setThumbnailImage2(croppedImage);
      };
      thumbnail2.onDelete = (imageUrl) => {
        setThumbnailImage2(null);
      };
      if (thumbnailImage2) {
        thumbnail2.loadbackground(thumbnailImage2);
      }
    }
    if (uploadType3 == "image") {
      let thumbnail3 = new buildfire.components.images.thumbnail(
        ".thumbnail3",
        {
          imageUrl: "",
          title: " ",
          dimensionsLabel: "Recommended: 1200 x 1200",
          multiSelection: false,
        }
      );
      thumbnail3.onChange = (imageUrl) => {
        let croppedImage = buildfire.imageLib.cropImage(imageUrl, {
          size: "full_width",
          aspect: "16:9",
        });
        setThumbnailImage3(croppedImage);
      };
      thumbnail3.onDelete = (imageUrl) => {
        setThumbnailImage3(null);
      };
      if (thumbnailImage3) {
        thumbnail3.loadbackground(thumbnailImage3);
      }
    }
  }, [uploadType, uploadType2, uploadType3]);

  

  useEffect(() => {
    handelImage({
      thumbnailImage,
      thumbnailImage2,
      thumbnailImage3,
      thumbnailImage4,
      videoURL1,
      videoURL2,
      videoURL3,
    

    });
  }, [
    thumbnailImage,
    thumbnailImage2,
    thumbnailImage3,
    thumbnailImage4,
    videoURL1,
    videoURL2,
    videoURL3,
  ]);
  // submit form function
  function submitForm(values) {
    console.log(
      `Submit function in layout${props.selectedLayout + 1} ->`,
      values
    );
    props.saveData(values);
  }
  
  

  const { handleChange, handleSubmit, handelImage } = useForm(submitForm);
  function handleChangeInputType(e, indexOfMedia) {
    if (indexOfMedia == 1) {
      setUploadType(e.target.value);
      handleChange(e);
    }
    if (indexOfMedia == 2) {
      console.log(e.target.value, "kkkkkkkkkkkkk");
      setUploadType2(e.target.value);
      handleChange(e);
    }
    if (indexOfMedia == 3) {
      setUploadType3(e.target.value);
      handleChange(e);
    }
  }
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
              onChange={(e) => handleChangeInputType(e, 1)}
              className="checkBox"
              type="radio"
              name="mediaType"
              value="image"
              defaultChecked
            />
            <label className="lable">Image</label>
            <input
              onChange={(e) => handleChangeInputType(e, 1)}
              className="checkBox"
              type="radio"
              name="mediaType"
              value="video"
            />
            <label className="lable">Video</label>
          </div>
        </div>

        {uploadType == "image" ? (
          <div className="row">
            <div className="col-md-3">
              <label className="lable">Top Image</label>
            </div>
            <div className="col-md-9">
              <div className="thumbnail sequare"></div>
            </div>
          </div>
        ) : (
          <>
            <VideoUi handleChange={handleChange} setVideoURL={setVideoURL1} videoURL={videoURL1} index={1}/>
          </>
        )}
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Enable Full Screen</label>
          </div>
          <div className="col-md-9">
            <input
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
            <label className="lable">Body content 1</label>
          </div>
          <div className="col-md-9">
            <textarea
              name="BodyContent"
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
              onChange={(e) => handleChangeInputType(e, 2)}
              className="checkBox"
              type="radio"
              name="mediaType2"
              value="image"
              defaultChecked
            />
            <label className="lable">Image</label>
            <input
              onChange={(e) => handleChangeInputType(e, 2)}
              className="checkBox"
              type="radio"
              name="mediaType2"
              value="video"
            />
            <label className="lable">Video</label>
          </div>
        </div>
        {uploadType2 == "image" ? (
          <div className="row">
            <div className="col-md-3">
              <label className="lable">Main Image</label>
            </div>
            <div className="col-md-9">
              <div className="sequare thumbnail2"></div>
            </div>
          </div>
        ) : (
          <>
            <VideoUi handleChange={handleChange} setVideoURL={setVideoURL2} videoURL={videoURL2} index={2}/>
          </>
        )}

        <div className="row">
          <div className="col-md-3">
            <label className="lable">Enable Full Screen</label>
          </div>
          <div className="col-md-9">
            <input
              onChange={handleChange}
              className="checkBox"
              type="checkBox"
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
              name="BodyContent2"
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
              onChange={(e) => handleChangeInputType(e, 3)}
              className="checkBox"
              type="radio"
              name="mediaType3"
              value="image"
              defaultChecked
            />
            <label className="lable">Image</label>
            <input
              onChange={(e) => handleChangeInputType(e, 3)}
              className="checkBox"
              type="radio"
              name="mediaType3"
              value="video"
            />
            <label className="lable">Video</label>
          </div>
        </div>
        {uploadType3 == "image" ? (
          <div className="row">
            <div className="col-md-3">
              <label className="lable">Main Image</label>
            </div>
            <div className="col-md-9">
              <div className="sequare thumbnail3"></div>
            </div>
          </div>
        ) : (
          <>
           <VideoUi handleChange={handleChange} setVideoURL={setVideoURL3} videoURL={videoURL3} index={3}/>
          </>
        )}

        <div className="row">
          <div className="col-md-3">
            <label className="lable">Enable Full Screen</label>
          </div>
          <div className="col-md-9">
            <input
              onChange={handleChange}
              className="checkBox"
              type="checkBox"
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
              name="BodyContent3"
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
              className="checkBox"
              type="checkBox"
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
