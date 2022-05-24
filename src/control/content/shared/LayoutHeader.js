import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader/root";
import "../../../../../../styles/control/bf-base.css";

import Layout1 from "../Components/Layout1";
import Layout2 from "../Components/Layout2";
import Layout3 from "../Components/Layout3";
import Layout4 from "../Components/Layout4";
import Layout5 from "../Components/Layout5";
import Layout6 from "../Components/Layout6";
import Layout7 from "../Components/Layout7";
import Layout8 from "../Components/Layout8";
import Layout9 from "../Components/Layout9";
import Layout10 from "../Components/Layout10";
import Layout11 from "../Components/Layout11";
import Layout12 from "../Components/Layout12";

import "./style.less";
import useMessages from "../hooks/messages";

function LayoutHeader() {
  const [images, setImages] = useState([]);
  const [selectedLayout, setSelectedLayout] = useState(0);
  const [savedData, setSavedData] = useState({});

  useEffect(() => {
    let array = [];
    for (let i = 1; i <= 12; i++) {
      array.push(`../assets/images/Layout${i}.png`);
    }
    setImages(array);

    getSelectedLayOut();
  }, []);

 const {handleSendMessage}= useMessages()
  const selectedLayoutHandler = (index) => {
    handleSendMessage({selectedLayout:index+1});
    buildfire.appData.save(
      { layOut: index },
      "selectedLayOut",
      (err, result) => {
        if (err) return console.error("Error while saving your data", err);
        console.log("Data saved successfully", result);
      }
    );

    setSelectedLayout(index);
  };

  function getSelectedLayOut() {
    
    buildfire.appData.get("selectedLayOut", (err, result) => {
      if (err) return console.error("Error while retrieving your data", err);
      console.log("Main record", result.data);
      if (result.data.layOut) 
      {setSelectedLayout(result.data.layOut);
      handleSendMessage({selectedLayout:result.data.layOut+1});}
    });
  }

  function saveData(data) {
    console.log('Submit function in Shared Submit Function ->', {data,selectedLayout:selectedLayout+1});
    setSavedData({
      data,
      selectedLayout
    })
  }
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
                src={images[selectedLayout]}
              />
              <span>Layout {selectedLayout + 1}</span>
            </div>
          </div>
          <div className="col-md-10">
            <div className="img_list_container">
              {images.map((image, i) => {
                return (
                  <img
                    key={i}
                    src={image}
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
          <Layout1 saveData={saveData} selectedLayout={selectedLayout} />
        }
        {
          selectedLayout === 1 &&
          <Layout2 saveData={saveData} selectedLayout={selectedLayout} />
        }
        {
          selectedLayout === 2 &&
          <Layout3 saveData={saveData} selectedLayout={selectedLayout} />
        }
        {
          selectedLayout === 3 &&
          <Layout4 saveData={saveData} selectedLayout={selectedLayout} />
        }
        {
          selectedLayout === 4 &&
          <Layout5 saveData={saveData} selectedLayout={selectedLayout} />
        }
        {
          selectedLayout === 5 &&
          <Layout6 saveData={saveData} selectedLayout={selectedLayout} />
        }
        {
          selectedLayout === 6 &&
          <Layout7 saveData={saveData} selectedLayout={selectedLayout} />
        }
        {
          selectedLayout === 7 &&
          <Layout8 saveData={saveData} selectedLayout={selectedLayout} />
        }
        {
          selectedLayout === 8 &&
          <Layout9 saveData={saveData} selectedLayout={selectedLayout} />
        }
        {
          selectedLayout === 9 &&
          <Layout10 saveData={saveData} selectedLayout={selectedLayout} />
        }
        {
          selectedLayout === 10 &&
          <Layout11 saveData={saveData} selectedLayout={selectedLayout} />
        }
        {
          selectedLayout === 11 &&
          <Layout12 saveData={saveData} selectedLayout={selectedLayout} />
        }

      </div>
    </>
  );
}

export default hot(LayoutHeader);
