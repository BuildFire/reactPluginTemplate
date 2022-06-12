import React, { useState, useEffect } from "react";
import "./style.less";
import ProgressRibbon from "../../shared/Ui_components/ProgressRibbon";
import useHelper from "../../shared/Helper/Helper";
import VideoUI from "../../shared/VideoUI";
function Index(props) {
  const [holderImage, setHolderImage] = useState(
    "./assets/images/holder-16x9.png"
  );
  const [enableFullScreen, setEnableFullScreen] = useState(false);
  const [enableFullScreen2, setEnableFullScreen2] = useState(false);
  const { imagePreviewer } = useHelper();
  useEffect(() => {
    setEnableFullScreen(props.data.enableFullScreen);
    setEnableFullScreen2(props.data.enableFullScreen2);

    if (props.data.wysiwygData) {
      my_container_div.innerHTML = props.data.wysiwygData;
    }
    if (props.data.wysiwygData2) {
      my_container_div2.innerHTML = props.data.wysiwygData2;
      my_container_div2.style.marginBottom = "8rem";
    }
  }, [props]);
  const layout14Style = {
    position: "relative",
    overflow: "scroll",
    height: "78.5vh",
  };

  return (
    <>
      <div
        className="mdc-layout-grid layout-14-container"
        style={
          props.data.showInfoRibbon
            ? layout14Style
            : { position: "relative", overflow: "scroll", height: "87.5vh" }
        }
      >
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell--span-8">
            <div className="top-section">
              {props.data.topMediaType !== "video" ? (
                <div className="top-image-container">
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
                <div className="top-video-container">
                  <VideoUI
                    data={props.data}
                    enableAutoPlay={props.data.enableAutoPlay1}
                    enableFullScreen={props.data.enableFullScreen}
                    url={props.data.videoURL}
                    index={1}
                  />
                </div>
              )}
              {(props.data.title != "" ||
                props.data.subtitle != "" ||
                props.data.wysiwygData != "") && (
                <div className="info-container">
                  <div className="mdc-card">
                    <p className="title">
                      {props.data.title || props.data.title == ""
                        ? props.data.title
                        : "Title"}
                    </p>
                    <p className="subtitle">
                      {props.data.subTitle || props.data.subTile == ""
                        ? props.data.subTitle
                        : "Subtitle"}
                    </p>
                    <div className="bodyContent" id="my_container_div"></div>
                  </div>
                </div>
              )}
            </div>
            <div className="bottom-section">
              {props.data.bottomMediaType !== "video" ? (
                <div className="bottom-image-container">
                  {enableFullScreen2 && props.data.thumbnailImage2 != null ? (
                    <img
                      alt="top image"
                      onClick={() => {
                        imagePreviewer(props.data.thumbnailImage2);
                      }}
                      src={props.data.thumbnailImage2 || holderImage}
                    />
                  ) : (
                    <img
                      alt="top image"
                      src={props.data.thumbnailImage2 || holderImage}
                    />
                  )}
                </div>
              ) : (
                <div className="bottom-video-container">
                  <VideoUI
                    data={props.data}
                    enableAutoPlay={props.data.enableAutoPlay2}
                    enableFullScreen={props.data.enableFullScreen2}
                    url={props.data.videoURL2}
                    index={2}
                  />
                </div>
              )}
              {(props.data.BottomTitle != "" ||
                props.data.BottomSubTitle != "" ||
                props.data.wysiwygData2 != "") && (
                <div className="info-container">
                  <div className="mdc-card">
                    <p className="title">{props.data.BottomTitle || "Title"}</p>
                    <p className="subtitle">
                      {props.data.BottomSubTitle || "Subtitle"}
                    </p>
                    {props.data.wysiwygData2 && (
                      <div className="bodyContent" id="my_container_div2"></div>
                    )}
                  </div>
                </div>
              )}
            </div>
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
