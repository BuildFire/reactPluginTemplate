import React, { useState, useEffect } from "react";
import "./style.less";
import useHelper from "../../shared/Helper/Helper";
import VideoUI from "../../shared/VideoUI";
import ProgressRibbon from "../../shared/Ui_components/ProgressRibbon";

function Index(props) {
  const [holderImage, setHolderImage] = useState(
    "./assets/images/holder-9x16.png"
  );
  const [enableFullScreen, setEnableFullScreen] = useState(false);
  const { imagePreviewer } = useHelper();
  useEffect(() => {
    setEnableFullScreen(props.data.enableFullScreen);
    let card = document.getElementById("card");
    if(card){
      if (props.data.showInfoRibbon) {
        document.getElementById("card").style.marginBottom = "4.5rem"
      } else {
        document.getElementById("card").style.marginBottom = "0.5rem"
      }
    }
  }, [props]);
  return (
    <>
      <div className="mdc-layout-grid layout-13-container">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell--span-8">
            {props.data.BackgroundmediaType !== "video" ? (
              <div className="topImage-container">
                {enableFullScreen && props.data.thumbnailImage != null ? (
                  <img
                    alt="top image"
                    onClick={() => {
                      imagePreviewer(props.data.thumbnailImage);
                    }}
                    src={props.data.thumbnailImage || holderImage}
                  />
                ) : (
                  <img
                    alt="top image"
                    src={props.data.thumbnailImage || holderImage}
                  />
                )}
              </div>
            ) : (
              <VideoUI
                data={props.data}
                enableAutoPlay={props.data.enableAutoPlay1}
                enableFullScreen={props.data.enableFullScreen}
                url={props.data.videoURL}
                index={1}
                placeholder={"9x16"}
              />
            )}
            {
              ((props.data.title != "" && props.data.title) || (props.data.subtitle != "" && props.data.subtitle) || (props.data.bodyContent != "" && props.data.bodyContent)) &&
              <div className="info-container">
                <div className="mdc-card" id="card">
                  <p className="title">{props.data.title}</p>
                  <p className="subtitle">{props.data.subtitle}</p>
                  <p className="bodyContent">
                    {props.data.bodyContent}
                  </p>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
      {props.data.showInfoRibbon && (
        <>
          <ProgressRibbon />
        </>
      )}
    </>
  );
}

export default Index;
