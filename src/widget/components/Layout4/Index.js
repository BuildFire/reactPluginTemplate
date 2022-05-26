import React, { useState,useEffect } from "react";
import useHelper from "../../shared/Helper/Helper";
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

    if (props.themeState.colors) {
      console.log('my theme in layout 4 -=>', props.themeState);
      props.setTextStyle();
    }
  }, [props]);
  return (
    <>
      <div className="mdc-layout-grid layout-4-container">
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
            <div className="info-container">
              <div className="mdc-card">
                <h1 className="title">{props.data.title || "Title"}</h1>
                <h3 className="subtitle">{props.data.subtitle || "Subtitle"}</h3>
                <p className="bodyContent">{props.data.bodyContent || "Top Body Content"}</p>
              </div>
            </div>
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
              <div className="mainBody-container">
              <div className="mdc-card">
                <p className="bodyContent">{props.data.mainBodyContent || "Main Body Content"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Index;
