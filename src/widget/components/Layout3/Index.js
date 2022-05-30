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
            ) : props.data.videoURL ? (
              <div className="video-container">
                <video autoPlay loop muted>
                  <source src={props.data.videoURL} type="video/mp4" />
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
