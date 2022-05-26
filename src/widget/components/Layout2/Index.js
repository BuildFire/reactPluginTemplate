import React, { useState, useEffect } from "react";
import "./style.less";
import useHelper from "../../shared/Helper/Helper";
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
  }, [props]);

  return (
    <>
      <div class="mdc-layout-grid layout-2-container">
        <div class="mdc-layout-grid__inner">
          <div class="mdc-layout-grid__cell--span-8">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
