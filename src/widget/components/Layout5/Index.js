import React, { useState,useEffect } from "react";
import useHelper from "../../shared/Helper/Helper";
import VideoUI from "../../shared/VideoUI";
import "./style.less";
function Index(props) {
  const [holderImage, setHolderImage] = useState(
    "../../../../../../styles/media/holder-16x9.png"
  );

  const [enableFullScreen, setEnableFullScreen] = useState(false);
  const [enableMainFullScreen, setEnableMainFullScreen] = useState(false);
  const { imagePreviewer } = useHelper();
  useEffect(() => {
    setEnableFullScreen(props.data.enableFullScreen);
    setEnableMainFullScreen(props.data.enableMainFullScreen);

    if(props.themeState.colors){
      console.log('my theme in layout 1 -=>', props.themeState);
      props.setTextStyle();
    }
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
            ) : (<VideoUI
              data={props.data}
              enableAutoPlay={props.data.enableAutoPlay1}
              enableFullScreen={props.data.enableFullScreen}
              url={props.data.videoURL}
              index={1}
            />)}

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
            ) :(
              <VideoUI
              data={props.data}
              enableAutoPlay={props.data.enableAutoPlay2}
              enableFullScreen={props.data.enableMainFullScreen}
              url={props.data.videoURL2}
              index={2}
            />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Index
