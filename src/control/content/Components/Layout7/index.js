import React, { useEffect } from "react";
import { hot } from "react-hot-loader/root";
import useForm from "../../hooks/form";
import "./style.less";
import "../../../../../../../styles/control/bf-base.css";
function index(props) {

  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [isEmpty, setIsEmpty] = useState(true);
  const [layoutId, setLayoutId] = useState("");
  const [detailsObj, setDetailsObj] = useState({});

  useEffect(() => {
    // thumbnail set up -->
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
    let thumbnail3 = new buildfire.components.images.thumbnail(".thumbnail3", {
      imageUrl: "",
      title: " ",
      dimensionsLabel: "Recommended: 1200 x 675",
      multiSelection: false,
    });

    // thumbnail Change image -->
    thumbnail.onChange = (imageUrl) => {
      setThumbnailImage(imageUrl);
    };
    thumbnail2.onChange = (imageUrl) => {
      setThumbnailImage(imageUrl);
    };
    thumbnail3.onChange = (imageUrl) => {
      setThumbnailImage(imageUrl);
    };
    // thumbnail Delete Image -->
    thumbnail.onDelete = (imageUrl) => {
      setThumbnailImage(null)
    };
    thumbnail2.onDelete = (imageUrl) => {
      setThumbnailImage(null)
    };
    thumbnail3.onDelete = (imageUrl) => {
      setThumbnailImage(null)
    };
  }, []);

  // submit form function 
  function submitForm(values) {
    values.backgroundImage = thumbnailImage;
    if (document.getElementById("enableFullScreen").checked) {
      values.enableFullScreen = true;
    } else {
      values.enableFullScreen = false;
    }
    console.log('forms values ->', values);
    setDetailsObj(values);
  }

  // use hooks to make our life easier 
  function submitForm(values) {
    console.log('forms values ->', values);
  }
  const { handleChange, handleSubmit } = useForm(submitForm);

  return (
    <>
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
            <input type="checkBox" name="enableFullScreen" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Top Media Type</label>
          </div>
          <div className="col-md-9">
            <input type="radio" name="mediaType" value="image" defaultChecked />
            <label className="lable">Image</label>
            <input type="radio" name="mediaType" value="image" />
            <label className="lable">Video</label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Top Image</label>
          </div>
          <div className="col-md-9">
            <div className="thumbnail2 horizontal-rectangle"></div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <label className="lable">Enable Full Screen</label>
          </div>
          <div className="col-md-9">
            <input type="checkBox" name="enableFullScreen" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Top Body content</label>
          </div>
          <div className="col-md-9">
            <textarea className="form-control bodyContent"></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Main Media Type</label>
          </div>
          <div className="col-md-9">
            <input type="radio" name="mediaType" value="image" defaultChecked />
            <label className="lable">Image</label>
            <input type="radio" name="mediaType" value="image" />
            <label className="lable">Video</label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Main Image</label>
          </div>
          <div className="col-md-9">
            <div className="thumbnail3 horizontal-rectangle"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Enable Full Screen</label>
          </div>
          <div className="col-md-9">
            <input type="checkBox" name="enableFullScreen" />
          </div>
        </div>
        <div className="row margin-bottom">
          <div className="col-md-3">
            <label className="lable">Main Body content</label>
          </div>
          <div className="col-md-9">
            <textarea className="form-control bodyContent"></textarea>
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
    </>
  );
}

export default hot(index);
