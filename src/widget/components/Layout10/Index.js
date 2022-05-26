import React, { useState, useEffect } from "react";
import "./style.less";
import useHelper from "../../shared/Helper/Helper";
function Index(props) {
  const [holderImage, setHolderImage] = useState(
    "../../../../../../styles/media/holder-16x9.png"
  );
  const [enableFullScreen, setEnableFullScreen] = useState(false);
  const [enableFullScreen2, setEnableFullScreen2] = useState(false);

  const { imagePreviewer } = useHelper();
  useEffect(() => {
    document.getElementById(
      "topImage-container"
    ).style.backgroundImage = `url(${props.data.thumbnailImage})`;
    setEnableFullScreen(props.data.enableFullScreen);
    setEnableFullScreen2(props.data.enableFullScreen2);
    

  }, [props]);
  return (
    <>
      <div class="mdc-layout-grid layout-10-container">
        <div class="mdc-layout-grid__inner">
          <div class="mdc-layout-grid__cell--span-8">
            <div id="topImage-container" onClick={() => {
                enableFullScreen && props.data.thumbnailImage != null?
                imagePreviewer(props.data.thumbnailImage):
                undefined
              }}>
            {enableFullScreen2 && props.data.thumbnailImage2 != null ? (
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
            <div class="info-container">
              <div className="frontInfo">
                <p class="title">{props.data.title || "Title"}</p>
                <p class="subtitle">{props.data.subTitle || "Sub Title"}</p>
                <p className="bodyContent">{props.data.bodyContent || "Body Content 1"}</p>
                <p className="bodyContent">{props.data.bodyContent2 || "Body Content 2"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
