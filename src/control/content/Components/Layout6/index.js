import React, { useEffect,useState } from "react";
import useForm from "../../hooks/form";
import "./style.less";
function index(props) {
  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [carouselImages, setCarouselImages] = useState([]);
  useEffect(() => {
    let thumbnail = new buildfire.components.images.thumbnail(".thumbnail", {
      imageUrl: "",
      title: " ",
      dimensionsLabel: "Recommended: 1200 x 960",
      multiSelection: false,
    });
    thumbnail.onChange = (imageUrl) => {
      setThumbnailImage(imageUrl);
    };
    // thumbnail Delete Image -->
    thumbnail.onDelete = (imageUrl) => {
      setThumbnailImage(null);
    };
    let editor = new buildfire.components.carousel.editor(".carousel", []);
    editor.onAddItems = (items) => {
        setCarouselImages([...carouselImages,items])
    };
    editor.onDeleteItem = (item, index) => {
      let newCarousel= carousel.map((element,idx)=>{
        if(index !==idx){
          return element;
        }
      });
      setCarouselImages(newCarousel);
    };
  }, []);



  useEffect(() => {
    console.log("carousel",carouselImages);
    changingHandler(null);
  },[thumbnailImage,carouselImages])
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
    <>
      <form onSubmit={handleSubmit}>
      <h1>Page Details</h1>
      <div className="layOutContainer">
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
              onChange={changingHandler}
            />
            <label className="lable">Image</label>
            <input type="radio" name="topMediaType" value="video" onChange={changingHandler}/>
            <label className="lable">Video</label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Top Image</label>
          </div>
          <div className="col-md-9">
            <div className="thumbnail sequare"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Enable Full Screen</label>
          </div>
          <div className="col-md-9">
            <input type="checkBox" name="enableFullScreen" id="enableFullScreen" onChange={changingHandler}/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Body Content</label>
          </div>
          <div className="col-md-9">
            <textarea className="form-control bodyContent" name="bodyContent" onChange={changingHandler}></textarea>
          </div>
        </div>
        <div className="row margin-bottom">
          <div className="col-md-3">
            <label className="lable">Image Carousel</label>
          </div>
          <div className="col-md-9">
            <div className="carousel"></div>
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
