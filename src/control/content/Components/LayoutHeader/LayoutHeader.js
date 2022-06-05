import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader/root";
import "../../../../../../../styles/control/bf-base.css";

import Layout1 from "../Layout1";
import Layout2 from "../Layout2";
import Layout3 from "../Layout3";
import Layout4 from "../Layout4";
import Layout5 from "../Layout5";
import Layout6 from "../Layout6";
import Layout7 from "../Layout7";
import Layout8 from "../Layout8";
import Layout9 from "../Layout9";
import Layout10 from "../Layout10";
import Layout11 from "../Layout11";
import Layout12 from "../Layout12";
import Layout13 from "../Layout13/Index";
import Layout14 from "../Layout14/Index";

import "./style.less";
import useMessages from "../../hooks/messages";

function LayoutHeader(props) {
  const [images, setImages] = useState([]);
  const [selectedLayout, setSelectedLayout] = useState(0);
  const [savedData, setSavedData] = useState({});

  useEffect(() => {
    let array = [];
    for (let i = 1; i <= 14; i++) {
      array.push(`../assets/images/Layout${i}.png`);
    }
    setImages(array);
    // getSelectedLayOut();
  }, []);

  useEffect(() => {
    if (props.activeLayout) {
      setSelectedLayout(props.activeLayout.layout - 1)
      handleSendMessage({ selectedLayout: props.activeLayout.layout });
    }
  }, [props])

  const { handleSendMessage } = useMessages()
  const selectedLayoutHandler = (index) => {
   
    // buildfire.appData.save(
    //   { layOut: index },
    //   "selectedLayOut",
    //   (err, result) => {
    //     if (err) return console.error("Error while saving your data", err);
    //     console.log("Data saved successfully", result);
    //   }
    // );

    setSelectedLayout(index);
  };

  // function getSelectedLayOut() {

  //   buildfire.appData.get("selectedLayOut", (err, result) => {
  //     if (err) return console.error("Error while retrieving your data", err);
  //     console.log("Main record", result.data);
  //     if (result.data.layOut) 
  //     {setSelectedLayout(result.data.layOut);
  //    }
  //   });
  // }

  function saveData(data) {
    console.log('Submit function in Shared Submit Function ->', { data, selectedLayout: selectedLayout + 1 });
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
          <Layout1  setConetnt={props.setConetnt} saveData={saveData} selectedLayout={selectedLayout} />
        }
        {
          selectedLayout === 1 &&
          <Layout2 setConetnt={props.setConetnt} saveData={saveData} selectedLayout={selectedLayout} />
        }
        {
          selectedLayout === 2 &&
          <Layout3 setConetnt={props.setConetnt} saveData={saveData} selectedLayout={selectedLayout} />
        }
        {
          selectedLayout === 3 &&
          <Layout4 setConetnt={props.setConetnt} saveData={saveData} selectedLayout={selectedLayout} />
        }
        {
          selectedLayout === 4 &&
          <Layout5 setConetnt={props.setConetnt} saveData={saveData} selectedLayout={selectedLayout} />
        }
        {
          selectedLayout === 5 &&
          <Layout6 setConetnt={props.setConetnt} saveData={saveData} selectedLayout={selectedLayout} />
        }
        {
          selectedLayout === 6 &&
          <Layout7 setConetnt={props.setConetnt} saveData={saveData} selectedLayout={selectedLayout} />
        }
        {
          selectedLayout === 7 &&
          <Layout8 data={props.activeLayout} setConetnt={props.setConetnt} saveData={saveData} selectedLayout={selectedLayout} />
        }
        {
          selectedLayout === 8 &&
          <Layout9 setConetnt={props.setConetnt} saveData={saveData} selectedLayout={selectedLayout} />
        }
        {
          selectedLayout === 9 &&
          <Layout10 setConetnt={props.setConetnt} saveData={saveData} selectedLayout={selectedLayout} />
        }
        {
          selectedLayout === 10 &&
          <Layout11 setConetnt={props.setConetnt} saveData={saveData} selectedLayout={selectedLayout} />
        }
        {
          selectedLayout === 11 &&
          <Layout12 setConetnt={props.setConetnt} saveData={saveData} selectedLayout={selectedLayout} />
        }
        {
          selectedLayout === 12 &&
          <Layout13 setConetnt={props.setConetnt} saveData={saveData} selectedLayout={selectedLayout} />
        }
        {
          selectedLayout === 13 &&
          <Layout14 setConetnt={props.setConetnt} saveData={saveData} selectedLayout={selectedLayout} />
        }

      </div>
    </>
  );
}

export default hot(LayoutHeader);
