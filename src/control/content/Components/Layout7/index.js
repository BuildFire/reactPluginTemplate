import React, { useEffect, useState } from "react";
import useForm from "../../hooks/form";
import "./style.less";
import "../../../../../../../styles/control/bf-base.css";
import VideoUi from "../../shared/VideoUi";
function index(props) {
  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [thumbnailImage2, setThumbnailImage2] = useState(null);
  const [thumbnailImage3, setThumbnailImage3] = useState(null);

  const [uploadType2, setUploadType2] = useState("image");
  const [uploadType3, setUploadType3] = useState("image");

  const [videoURL2, setVideoURL2] = useState("");
  const [videoURL3, setVideoURL3] = useState("");

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
      let croppedImage = buildfire.imageLib.cropImage(imageUrl, {
        size: "full_width",
        aspect: "16:9",
      });
      setThumbnailImage(croppedImage);
    };

    // thumbnail Delete Image -->
    thumbnail.onDelete = (imageUrl) => {
      setThumbnailImage(null);
    };
  }, []);

  useEffect(() => {
    if (uploadType2 == "image") {
      //  set up thumbnail -->
      let thumbnail2 = new buildfire.components.images.thumbnail(
        ".thumbnail2",
        {
          imageUrl: "",
          title: " ",
          dimensionsLabel: "Recommended: 1200 x 675",
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
          dimensionsLabel: "Recommended: 1200 x 675",
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
  }, [uploadType2, uploadType3]);

  useEffect(() => {
    handelImage({
      thumbnailImage,
      thumbnailImage2,
      thumbnailImage3,
      videoURL2,
      videoURL3,
    });
  }, [thumbnailImage, thumbnailImage2, thumbnailImage3, videoURL2, videoURL3]);
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
    if (indexOfMedia == 2) {
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
            <input
              onChange={handleChange}
              className="checkBox"
              type="checkBox"
              name="enableFullScreen1"
              id="enableFullScreen1"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Top Media Type</label>
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
              <label className="lable">Top Image</label>
            </div>
            <div className="col-md-9">
              <div className="thumbnail2 horizontal-rectangle"></div>
            </div>
          </div>
        ) : (
          <>
            <VideoUi
              handleChange={handleChange}
              setVideoURL={setVideoURL2}
              videoURL={videoURL2}
              index={1}
            />
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
            <label className="lable">Top Body content</label>
          </div>
          <div className="col-md-9">
            <textarea
              placeholder="Top Body content"
              maxLength={140}
              name="TopBodyContent"
              onChange={handleChange}
              className="form-control bodyContent"
            ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Main Media Type</label>
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
              <div className="thumbnail3 horizontal-rectangle"></div>
            </div>
          </div>
        ) : (
          <>
            <VideoUi
              handleChange={handleChange}
              setVideoURL={setVideoURL3}
              videoURL={videoURL3}
              index={2}
            />
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

        <div className="row ">
          <div className="col-md-3">
            <label className="lable">Main Body content</label>
          </div>
          <div className="col-md-9">
            <textarea
              placeholder="Main Body content"
              maxLength={140}
              name="MainBodyContent"
              onChange={handleChange}
              className="form-control bodyContent"
            ></textarea>
          </div>
        </div>
        <div className="row  margin-bottom">
          <div className="col-md-3">
            <label className="lable">Show Info Ribbon</label>
          </div>
          <div className="col-md-9">
            <div class="button-switch">
              <input
                onChange={handleChange}
                className="checkBox"
                name="showInfoRibbon"
                id="showInfoRibbon"
                type="checkbox"
                value="true"
              />
              <label for="showInfoRibbon" class="label-success"></label>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-actions">
        <button
          type="button"
          onClick={() => props.setActiveComponent("external1")}
          className="btn btn-default"
          id="layoutBackBtn"
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-success" id="layoutSaveBtn">
          Save
        </button>
      </div>
    </form>
  );
}

export default index;
