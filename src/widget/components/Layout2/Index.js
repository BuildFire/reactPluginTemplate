import React, { useState, useEffect } from "react";
import "./style.less";
import useHelper from "../../shared/Helper/Helper";
function Index(props) {
  const [holderImage, setHolderImage] = useState(
    "../../../../../../styles/media/holder-16x9.png"
  );
  const [holderVideo, setHolderVideo] = useState(
    "./shared/img/video_player_placeholder.gif"
  );
  const [enableFullScreen, setEnableFullScreen] = useState(false);
  const [enableMainFullScreen, setEnableMainFullScreen] = useState(false);
  const [videoURL, setVideoURL] = useState("");
  const [enableAutoPlay1, setEnableAutoPlay1] = useState(false);
  const { imagePreviewer,fullScreenVideoHandler } = useHelper();
  useEffect(() => {
    setEnableFullScreen(props.data.enableFullScreen);
    setEnableMainFullScreen(props.data.enableMainFullScreen);
    setEnableAutoPlay1(props.data.enableAutoPlay1);

    if (props.themeState.colors) {
      console.log("my theme in layout 2 -=>", props.themeState);
      props.setTextStyle();
    }
    fullScreenVideoHandler(
      props.data,
      props.data.enableMainFullScreen,
      props.data.mediaType,
      "topVideo"
    );
  }, [props]);

  return (
    <>
      <div className="mdc-layout-grid layout-2-container">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell--span-8">
            <div className="topImage-container">
              {enableFullScreen && props.data.thumbnailImage != null ? (
                <img
                  onClick={() => {
                    imagePreviewer(props.data.thumbnailImage);
                  }}
                  src={props.data.thumbnailImage || holderImage}
                />
              ) : (
                <img src={props.data.thumbnailImage || holderImage} />
              )}
            </div>

            {props.data.mediaType !== "video" ? (
              <div className="mainImage-container">
                {enableMainFullScreen && props.data.thumbnailImage2 != null ? (
                  <img
                    onClick={() => {
                      imagePreviewer(props.data.thumbnailImage2);
                    }}
                    src={props.data.thumbnailImage2 || holderImage}
                  />
                ) : (
                  <img src={props.data.thumbnailImage2 || holderImage} />
                )}
              </div>
            ) : props.data.videoURL != "" ? (
              <div className="mainImage-container">
                <video
                  loop
                  muted
                  controls
                  autoPlay={enableAutoPlay1}
                  id="topVideo"
                >
                  <source src={props.data.videoURL} type="video/mp4" />
                  Your browser does not support videos.
                </video>
              </div>
            ) : (
              <div className="mainImage-container">
                <img src={holderVideo} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
