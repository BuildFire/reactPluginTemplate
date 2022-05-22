import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import "./style.less";
import "../../../../../../../styles/control/bf-base.css";
import Design from "../../../../widget/containers/common/controllers/design.controller";
import DesignLayoutItems from "../../../../widget/containers/common/models/design.modal";
function index(props) {
  const [detailsObj, setDetailsObj] = useState({});
  const [chkbox, setChkbox] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [layoutId, setLayoutId] = useState("");
  useEffect(() => {
    let thumbnail = new buildfire.components.images.thumbnail(".thumbnail", {
      imageUrl: "",
      title: " ",
      dimensionsLabel: "Recommended: 675 x 1200",
      multiSelection: false,
    });
    getData(thumbnail);
    thumbnail.onChange = (imageUrl) => {
      console.log("hi", imageUrl);
      setDetailsObj({ ...detailsObj, backgroundImage: imageUrl });
    };
  }, []);

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

  const saveData = () => {
    if (isEmpty) {
      Design.update(layoutId, detailsObj)
        .then((result) => {
          console.log("res", result);
        })
        .catch((err) => console.error(err));
    } else {
      let newDesign = DesignLayoutItems({detailsObj});
      Design.insert(newDesign)
        .then((result) => {
          console.log("res", result);
        })
        .catch((err) => console.error(err));
    }
  };

  const detailsHandle = (e) => {
    console.log(detailsObj);
    if (e.target.type === "checkbox") {
      setChkbox(!chkbox);
      setDetailsObj({ ...detailsObj, [e.target.name]: e.target.checked });
    } else {
      setDetailsObj({ ...detailsObj, [e.target.name]: e.target.value });
    }
  };
  return (
    <>
      <h1>Page Details</h1>
      <div className="layOutContainer">
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Background Media Type</label>
          </div>
          <div className="col-md-9">
            <input
              type="radio"
              name="mediaType"
              value="image"
              checked={detailsObj.mediaType === "image"}
              onChange={(e) => detailsHandle(e)}
            />
            <label className="lable">Image</label>
            <input
              type="radio"
              name="mediaType"
              value="video"
              checked={detailsObj.mediaType === "video"}
              onChange={(e) => detailsHandle(e)}
            />
            <label className="lable">Video</label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Background Image</label>
          </div>
          <div className="col-md-9">
            <div className="thumbnail"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Enable Full Screen</label>
          </div>
          <div className="col-md-9">
            <input
              type="checkBox"
              name="enableFullScreen"
              defaultChecked={detailsObj.enableFullScreen}
              onChange={(e) => detailsHandle(e)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Title</label>
          </div>
          <div className="col-md-9">
            <input
              className="form-control fullWidth"
              type="text"
              name="title"
              placeholder="Title"
              value={detailsObj.title}
              onChange={(e) => detailsHandle(e)}
            />
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
              placeholder="Subtitle"
              value={detailsObj.subtitle}
              onChange={(e) => detailsHandle(e)}
            />
          </div>
        </div>
        <div className="row margin-bottom">
          <div className="col-md-3">
            <label className="lable">Body Content</label>
          </div>
          <div className="col-md-9">
            <textarea
              className="form-control bodyContent"
              name="bodyContent"
              value={detailsObj.bodyContent}
              onChange={(e) => detailsHandle(e)}
            ></textarea>
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
          onClick={saveData}
        >
          Save
        </button>
      </div>
    </>
  );
}

export default hot(index);
