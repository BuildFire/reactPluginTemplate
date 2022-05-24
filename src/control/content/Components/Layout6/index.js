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
      let newArray=carouselImages;
      console.log("carousel",carouselImages);
      newArray=[...newArray,...items];
      console.log("test>>",newArray);
        setCarouselImages(newArray);
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
    handelImage({thumbnailImage,carouselImages});
  },[thumbnailImage,carouselImages])
  // submit form function 
  function submitForm(values) {
    console.log('forms values ->', values);
  }
 
  const { handleChange, handleSubmit, handelImage } = useForm(submitForm);

  return (
    <>
      <form onSubmit={handleSubmit}>
      <h1>Page Details</h1>
      <div className="layOutContainer layout-container-6">
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
              onChange={handleChange}
              className="checkBox"  
            />
            <label className="lable">Image</label>
            <input className="checkBox"  type="radio" name="topMediaType" value="video" onChange={handleChange}/>
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
            <input type="checkBox" className="checkBox" name="enableFullScreen" id="enableFullScreen" onChange={handleChange}/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Body Content</label>
          </div>
          <div className="col-md-9">
            <textarea maxLength={300} className="form-control bodyContent" name="bodyContent" onChange={handleChange}></textarea>
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
