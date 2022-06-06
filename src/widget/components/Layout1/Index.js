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
  const { imagePreviewer,  } = useHelper();
  useEffect(() => {
    setEnableFullScreen(props.data.enableFullScreen);
  }, [props]);

  return (
    <>
      <div className="mdc-layout-grid layout-1-container">
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
                  <img alt="top image" src={props.data.thumbnailImage || holderImage} />
                )}
              </div>
            ) : (
              <div className="topVideo-container">
              <VideoUI
                data={props.data}
                enableAutoPlay={props.data.enableAutoPlay1}
                enableFullScreen={props.data.enableFullScreen}
                url={props.data.videoURL}
                index={1}
                placeholder={"9x16"}
              />
              </div>
            )}
            <div className="info-container">
              <div className="mdc-card">
                <p className="title">{props.data.title || "Title"}</p>
                <p className="subtitle">
                  {props.data.subtitle || "Subtitle"}
                </p>
                <p className="bodyContent">
                  {props.data.bodyContent || "Body Content"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {props.data.showInfoRibbon && <>
     <ProgressRibbon/>
      </>
      }
    </>
  );
}

export default Index;
