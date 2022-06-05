import React, { useState, useEffect } from "react";
import "./style.less";
import useHelper from "../../shared/Helper/Helper";
import VideoUI from "../../shared/VideoUI";
import ProgressRibbon from "../../shared/Ui_components/ProgressRibbon";

function Index(props) {
  const [holderImage, setHolderImage] = useState(
    "./assets/images/holder-16x9.png"
  );
  const [enableFullScreen, setEnableFullScreen] = useState(false);
  const [enableMainFullScreen, setEnableMainFullScreen] = useState(false);
  const { imagePreviewer } = useHelper();
  useEffect(() => {
    setEnableFullScreen(props.data.enableFullScreen);
    setEnableMainFullScreen(props.data.enableMainFullScreen);
  }, [props]);

  return (
    <>
      <div className="mdc-layout-grid layout-2-container">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell--span-8">
            <div className="topImage-container">
              {enableFullScreen && props.data.thumbnailImage != null ? (
                <img
                alt="Background image"
                  onClick={() => {
                    imagePreviewer(props.data.thumbnailImage);
                  }}
                  src={props.data.thumbnailImage || holderImage}
                />
              ) : (
                <img alt="Background image" src={props.data.thumbnailImage || holderImage} />
              )}
            </div>

            {props.data.mediaType !== "video" ? (
              <div className="mainImage-container">
                {enableMainFullScreen && props.data.thumbnailImage2 != null ? (
                  <img
                  alt="Main image"
                    onClick={() => {
                      imagePreviewer(props.data.thumbnailImage2);
                    }}
                    src={props.data.thumbnailImage2 || holderImage}
                  />
                ) : (
                  <img alt="Main image" src={props.data.thumbnailImage2 || holderImage} />
                )}
              </div>
            ) :(
              <div className="mainImage-container">
                <VideoUI
                  data={props.data}
                  enableAutoPlay={props.data.enableAutoPlay1}
                  enableFullScreen={props.data.enableMainFullScreen}
                  url={props.data.videoURL}
                  index={1}
                />
              </div>
            )}
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
