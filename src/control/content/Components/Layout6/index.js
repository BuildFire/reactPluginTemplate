import React, { useEffect, useState } from "react";
import useForm from "../../hooks/form";
import ThumbnailUI from "../../shared/ThumbnailUI";
import VideoUi from "../../shared/VideoUi";
import "./style.less";
function index(props) {
  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [carouselImages, setCarouselImages] = useState([]);
  const [allImages, setAllImages] = useState([]);
  const [deletedImages, setDeletedImages] = useState({});
  const [orderedImages, setOrderedImages] = useState({});
  const [onItemChange, setOnItemChange] = useState({});
  const [uploadType, setUploadType] = useState("image");
  const [videoURL, setVideoURL] = useState("");
  useEffect(() => {
    let editor = new buildfire.components.carousel.editor(".carousel", []);
    editor.onAddItems = (items) => {
      setCarouselImages(items);
    };
    editor.onDeleteItem = (item, index) => {
      setDeletedImages(item);
    };
    editor.onOrderChange = (item, oldIndex, newIndex) => {
      setOrderedImages({ item, oldIndex, newIndex });
    };
    editor.onItemChange = (item, index) => {
      setOnItemChange({ item, index });
    };
  }, []);

  function array_move(arr, old_index, new_index) {
    if (new_index >= arr.length) {
      var k = new_index - arr.length + 1;
      while (k--) {
        arr.push(undefined);
      }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; // for testing
  }

  useEffect(() => {
    let newCarousel = allImages;
    newCarousel[onItemChange.index] = onItemChange.item;
    console.log("change", newCarousel);
    setAllImages(newCarousel);
  }, [onItemChange]);

  useEffect(() => {
    let newCarousel = [];
    allImages.forEach((element) => {
      newCarousel.push(element);
    });
    newCarousel.splice(orderedImages.oldIndex, 1);
    newCarousel.splice(orderedImages.newIndex, 0, orderedImages.item);
    setAllImages(newCarousel);
  }, [orderedImages]);

  useEffect(() => {
    let newCarousel = allImages.filter((element, idx) => {
      return element !== deletedImages;
    });
    console.log("newCarousel", newCarousel);
    setAllImages(newCarousel);
  }, [deletedImages]);

  useEffect(() => {
    setAllImages([...carouselImages, ...allImages]);
    console.log(" images", carouselImages);
  }, [carouselImages]);

  useEffect(() => {
    console.log("befor message all images carousel", allImages);
    handelImage({ thumbnailImage, allImages, videoURL });
  }, [thumbnailImage, allImages, onItemChange, videoURL]);
  // submit form function
  function submitForm(values) {
    console.log("forms values ->", values);
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
        <div className="layOutContainer slide-in layout-container-6">
          <div className="row">
            <div className="col-md-3">
              <label className="lable">Top Media Type</label>
            </div>
            <div className="col-md-9">
              <input
                type="radio"
                name="topMediaType"
                value="image"
                defaultChecked
                onChange={handleChangeInputType}
                className="checkBox"
              />
              <label className="lable">Image</label>
              <input
                className="checkBox"
                type="radio"
                name="topMediaType"
                value="video"
                onChange={handleChangeInputType}
              />
              <label className="lable">Video</label>
            </div>
          </div>
          {uploadType == "image" ? (
            <ThumbnailUI
              index={1}
              recommended={"Recommended: 1200 x 1200"}
              thumbnailImage={thumbnailImage}
              setThumbnailImage={setThumbnailImage}
              imageTag={"Top Image"}
              classList={"thumbnail sequare"}
            />
          ) : (
            <>
              <VideoUi
                handleChange={handleChange}
                setVideoURL={setVideoURL}
                videoURL={videoURL}
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
                type="checkBox"
                className="checkBox"
                name="enableFullScreen"
                id="enableFullScreen"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <label className="lable">Body Content</label>
            </div>
            <div className="col-md-9">
              <textarea
                maxLength={300}
                placeholder="Body Content"
                className="form-control bodyContent"
                name="bodyContent"
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <label className="lable">Image Carousel</label>
            </div>
            <div className="col-md-9">
              <div className="carousel"></div>
            </div>
          </div>
          <div className="row  margin-bottom">
            <div className="col-md-3">
              <label className="lable">Show Info Ribbon</label>
            </div>
            <div className="col-md-9">
              <div className="button-switch">
                <input
                  onChange={handleChange}
                  className="checkBox"
                  name="showInfoRibbon"
                  id="showInfoRibbon"
                  type="checkbox"
                  value="true"
                />
                <label htmlFor="showInfoRibbon" class="label-success"></label>
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
    </>
  );
}
export default index;
