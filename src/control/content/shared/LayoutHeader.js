import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader/root";
import Layout1 from "../Components/Layout1";
import "./style.less";

function LayoutHeader() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    let array = [];
    for (let i = 1; i <= 12; i++) {
      array.push(`../../assets/images/Layout${i}.png`);
    }
    setImages(array);
  }, []);

  return (
    <>
      <h1>Layout</h1>
      <p className="info-note">
        Choose your layout first. Page input fields will populate based on the
        layout you have chosen.
      </p>
      <div className="layout-container container">
        <div className="row">
          <div className="col-md-2">
            <div className="img_selected_container">
              <img id="listLayout" className="img_selected" />
              <Layout1 />
              <span>Layout1</span>
            </div>
          </div>
          <div className="col-md-10">
            <div className="img_list_container">
              {images.map((image, i) => {
                return (
                  <img style={{width:"150px"}} src={require(`${image}`)}></img>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default hot(LayoutHeader);
