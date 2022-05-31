import React, { useState, useEffect } from "react";
import "./style.less";
import useHelper from "../../shared/Helper/Helper";
import VideoUI from "../../shared/VideoUI";
function Index(props) {
  const [holderImage, setHolderImage] = useState(
    "../../../../../../styles/media/holder-16x9.png"
  );

  const [enableFullScreen, setEnableFullScreen] = useState(false);


  const { imagePreviewer } = useHelper();
  useEffect(() => {
    setEnableFullScreen(props.data.enableFullScreen);
  }, [props]);

  return (
    <>
      <div className="mdc-layout-grid layout-3-container">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell--span-8">
            {props.data.mediaType !== "video" ? (
              <div className="mainImage-container">
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
            ) :(
              <div className="mainImage-container">
              <VideoUI
                data={props.data}
                enableAutoPlay={props.data.enableAutoPlay1}
                enableFullScreen={props.data.enableFullScreen}
                url={props.data.videoURL}
                index={1}
              />
            </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
