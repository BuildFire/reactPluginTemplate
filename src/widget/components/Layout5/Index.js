import React, { useState,useEffect } from "react";
import useHelper from "../../shared/Helper/Helper";
import "./style.less";
function Index(props) {
  const [holderImage, setHolderImage] = useState(
    "../../../../../../styles/media/holder-16x9.png"
  );
  const [holderVideo, setHolderVideo] = useState(
    "./shared/img/video_player_placeholder.gif"
  )
  const [enableFullScreen, setEnableFullScreen] = useState(false);
  const [enableMainFullScreen, setEnableMainFullScreen] = useState(false);
  const [enableAutoPlay1, setEnableAutoPlay1] = useState(false);
  const [enableAutoPlay2, setEnableAutoPlay2] = useState(false);
  const { imagePreviewer,fullScreenVideoHandler } = useHelper();
  useEffect(() => {
    setEnableFullScreen(props.data.enableFullScreen);
    setEnableMainFullScreen(props.data.enableMainFullScreen);

    if(props.themeState.colors){
      console.log('my theme in layout 1 -=>', props.themeState);
      props.setTextStyle();
    }
    fullScreenVideoHandler(
      props.data,
      props.data.enableFullScreen,
      props.data.topMediaType,
      "topVideo"
    );
    fullScreenVideoHandler(
      props.data,
      props.data.enableMainFullScreen,
      props.data.mainMediaType,
      "mainVideo"
    );
    setEnableAutoPlay1(props.data.enableAutoPlay1);
    setEnableAutoPlay2(props.data.enableAutoPlay2);
  }, [props]);
  return (
    <>
      <div className="mdc-layout-grid layout-5-container">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell--span-8">
          {props.data.topMediaType !== "video" ? (
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
                <video id="topVideo"
                  loop
                  muted
                  controls
                  autoPlay={enableAutoPlay1}>
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
                <h3 className="subtitle">{props.data.subtitle || "Subtitle"}</h3>
                <p className="bodyContent">
                  {props.data.bodyContent || "Body Content"}
                </p>
              </div>
            </div>
            {props.data.mainMediaType !== "video" ? (
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
            ) : props.data.videoURL2 ? (
              <div className="video-container2">
                <video loop
                    muted
                    controls
                    autoPlay={enableAutoPlay2}
                    id="mainVideo">
                  <source src={props.data.videoURL2} type="video/mp4" />
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

export default Index
