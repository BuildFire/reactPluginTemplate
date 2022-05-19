import React, { useState, useEffect } from "react";
// import { hot } from "react-hot-loader/root";
import Layout1 from "../Components/Layout1";
import "./style.less";
function LayoutHeader() {
  const [images, setImages] = useState([]);
  const [selectedLayout, setSelectedLayout] = useState(0);
  useEffect(() => {
    let array = [];
    for (let i = 1; i <= 12; i++) {
      array.push(`../../assets/images/Layout${i}.png`);
    }
    setImages(array);
  }, []);

  const selectedLayoutHandler = (index) => {
    console.log(index);
    setSelectedLayout(index);
  };

  return (
    <>
      <h1>Layout</h1>
      <p className="info-note">
        Choose your layout first. Page input fields will populate based on the
        layout you have chosen.
      </p>
      <div className="layout-container">
        <div className="row">
          <div className="col-md-2">
            <div className="img_selected_container">
              <img
                id="listLayout"
                className="img_selected"
                src="https://i.pinimg.com/originals/39/42/64/394264ead42d45e7588f13f6ae0e9ad3.jpg"
              />
              <span>Layout1</span>
            </div>
          </div>
          <div className="col-md-10">
            <div className="img_list_container">
              {images.map((image, i) => {
                return (
                  <img
                  key={i}
                    src="https://i.pinimg.com/originals/39/42/64/394264ead42d45e7588f13f6ae0e9ad3.jpg"
                    onClick={() => {
                      selectedLayoutHandler(i);
                    }}
                  ></img>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div>
        {
          selectedLayout === 0 && 
          <Layout1/>
        }
        {
          selectedLayout === 1 && 
          <span>1</span>
        }
      </div>
    </>
  );
}

export default LayoutHeader;
