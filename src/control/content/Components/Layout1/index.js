import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import useForm from "../../hooks/form";
import "./style.less";
import "../../../../../../../styles/control/bf-base.css";
import Design from "../../../../widget/containers/common/controllers/design.controller";
import DesignLayoutItems from "../../../../widget/containers/common/models/design.modal";
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
    getData(thumbnail);
    // thumbnail Change image -->
    thumbnail.onChange = (imageUrl) => {
      setThumbnailImage(imageUrl);
    };
    // thumbnail Delete Image -->
    thumbnail.onDelete = (imageUrl) => {
      setThumbnailImage(null)
    };
  }, []);

  //  load data -=>
  const getData = (thumbnail) => {
    Design.search({
      filter: {
        $or: [{ "$json.layout": 0 }],
      },
    })
      .then((result) => {
        if (result.length === 0) {
          setIsEmpty(false);
        } else {
          thumbnail.loadbackground(result[0].data.backgroundImage);
          setDetailsObj(result[0].data);
          setLayoutId(result[0].id);
        }
      })
      .catch((err) => console.error(err));
  };
  // send data to datastore
  const saveData = () => {
    if (isEmpty) {
      Design.update(layoutId, detailsObj)
        .then((result) => {
          console.log("res", result);
        })
        .catch((err) => console.error(err));
    } else {
      let newDesign = DesignLayoutItems(detailsObj);
      Design.insert(newDesign)
        .then((result) => {
          console.log("res", result);
        })
        .catch((err) => console.error(err));
    }
  };
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
    saveData();
  }
  // use hooks to make our life easier 
  const { handleChange, handleSubmit } = useForm(submitForm);

  return (
    <form onSubmit={handleSubmit}>
      <h1>Page Details</h1>
      <div className="layOutContainer">
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Background Media Type</label>
          </div>
          <div className="col-md-9">
            <input onChange={handleChange} type="radio" name="BackgroundmediaType" value="image" defaultChecked />
            <label className="lable">Image</label>
            <input onChange={handleChange} type="radio" name="BackgroundmediaType" value="Video" />
            <label className="lable">Video</label>
          </div>
        </div>
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
            <input onChange={handleChange} type="checkBox" name="enableFullScreen" id='enableFullScreen' />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Title</label>
          </div>
          <div className="col-md-9">
            <input onChange={handleChange} className="form-control fullWidth" type="text" name="title" defaultValue="Title" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Subtitle</label>
          </div>
          <div className="col-md-9">
            <input
              className="form-control fullWidth"
              type="input"
              name="subtitle"
              defaultValue="Subtitle"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row margin-bottom">
          <div className="col-md-3">
            <label className="lable">Body Content</label>
          </div>
          <div className="col-md-9">
            <textarea onChange={handleChange} name="bodyContent" className="form-control bodyContent"></textarea>
          </div>
        </div>
      </div>
      <div className="bottom-actions">
        <button className="btn btn-default" id="layoutBackBtn">
          Cancel
        </button>
        <button
          className="btn btn-success"
          id="layoutSaveBtn"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default hot(index);
