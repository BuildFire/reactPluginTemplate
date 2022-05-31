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
  const { imagePreviewer } = useHelper();
  useEffect(() => {
    setEnableFullScreen(props.data.enableFullScreen);

    if (props.themeState.colors) {
      console.log("my theme in layout 1 -=>", props.themeState);
      props.setTextStyle();
    }
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
                    onClick={() => {
                      imagePreviewer(props.data.thumbnailImage);
                    }}
                    src={props.data.thumbnailImage || holderImage}
                  />
                ) : (
                  <img src={props.data.thumbnailImage || holderImage} />
                )}
              </div>
            ) : props.data.videoURL ? (
              <div className="video-container">
                <video autoPlay loop="true" muted controls>
                  <source src={props.data.videoURL} type="video/mp4" />
                </video>
              </div>
            ) : (
              <div className="topImage-container">
              <img src={holderVideo} />
              </div>
            )}
            <div className="info-container">
              <div className="mdc-card">
                <h1 className="title">{props.data.title || "Title"}</h1>
                <h3 className="subtitle">
                  {props.data.subtitle || "Subtitle"}
                </h3>
                <p className="bodyContent">
                  {props.data.bodyContent || "Body Content"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
