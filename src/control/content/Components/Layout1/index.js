import React,{useEffect} from "react";
import { hot } from "react-hot-loader/root";
import "./style.less";
import "../../../../../../../styles/control/bf-base.css";
function index(props) {
  useEffect(() =>{
    let thumbnail = new buildfire.components.images.thumbnail(".thumbnail", {
      imageUrl: "",
      title: " ",
      dimensionsLabel: "Recommended: 675 x 1200px",
      multiSelection: false,
    });
  },[])
  return (
    <>
      <h1>Page Details</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Background Media Type</label>
          </div>
          <div className="col-md-9">
            <input type="radio" name="mediaType" value="image" defaultChecked />
            <label className="lable">
              Image
            </label>
            <input type="radio" name="mediaType" value="image" />
            <label className="lable">
              Video
            </label>
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
      </div>
    </>
  );
}

export default hot(index);
