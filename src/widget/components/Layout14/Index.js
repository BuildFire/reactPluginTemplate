import React, { useState, useEffect } from "react";
import "./style.less";
import ProgressRibbon from "../../shared/Ui_components/ProgressRibbon";
import useHelper from "../../shared/Helper/Helper";
import VideoUI from "../../shared/VideoUI";
function Index(props) {
  const [holderImage, setHolderImage] = useState(
    "../../../../../../styles/media/holder-16x9.png"
  );
  const [enableFullScreen, setEnableFullScreen] = useState(false);
  const [enableFullScreen2, setEnableFullScreen2] = useState(false);
  const { imagePreviewer } = useHelper();
  useEffect(() => {
    setEnableFullScreen(props.data.enableFullScreen);
    setEnableFullScreen2(props.data.enableFullScreen2);

    document.getElementById("my_container_div").innerHTML =
      props.data.wysiwygData ||
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor. ";

    document.getElementById("my_container_div2").innerHTML =
      props.data.wysiwygData2 ||
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor. ";

  }, [props]);


  return (
    <>
      <div className="mdc-layout-grid layout-14-container">
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
              <div className="info-container">
                <div className="mdc-card">
                  <p className="title">{props.data.title || "Title"}</p>
                  <p className="subtitle">
                    {props.data.subtitle || "Subtitle"}
                  </p>
                  <p className="bodyContent" id="my_container_div">
                    {props.data.wysiwygData || "Body Content"}
                  </p>
                </div>
              </div>
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
              <div className="info-container">
                <div className="mdc-card">
                  <p className="title">{props.data.BottomTitle || "Title"}</p>
                  <p className="subtitle">
                    {props.data.BottomSubTitle || "Subtitle"}
                  </p>
                  <p className="bodyContent" id="my_container_div2">
                    {props.data.wysiwygData2 || "Body Content"}
                  </p>
                </div>
              </div>
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
