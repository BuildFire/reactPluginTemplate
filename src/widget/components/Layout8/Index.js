import React, { useEffect, useState } from "react";
import "./style.less";
import useHelper from "../../shared/Helper/Helper";
import VideoUI from "../../shared/VideoUI";
import ProgressRibbon from "../../shared/Ui_components/ProgressRibbon";

function Index(props) {
  const [holderImage, setHolderImage] = useState(
    "./assets/images/holder-1x1.png"
  );
  const [holderVideo, setHolderVideo] = useState(
    "./shared/img/video_player_placeholder.png"
  );

  const [enableFullScreen, setEnableFullScreen] = useState(false);
  const [enableFullScreen2, setEnableFullScreen2] = useState(false);
  const [enableFullScreen3, setEnableFullScreen3] = useState(false);
  const [enableFullScreen4, setEnableFullScreen4] = useState(false);

  const { imagePreviewer } = useHelper();

  useEffect(() => {
    setEnableFullScreen(props.data.enableFullScreen);
    setEnableFullScreen2(props.data.enableFullScreen2);
    setEnableFullScreen3(props.data.enableFullScreen3);
    setEnableFullScreen4(props.data.enableFullScreen4);

    if (props.data.showInfoRibbon) {
      lowerContainer.style.height = "11.5rem";
    } else {
      lowerContainer.style.height = "14.5rem";
    }
  }, [props]);
  const layout8Style={
    position: "relative",
    overflow: "scroll",
    height: "78.5vh"
  }
  return (
    <>
      <div className="layout-8-container"   style={props.data.showInfoRibbon ? layout8Style: {}}>
        <div className="mdc-layout-grid Maincontainer " id="container">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-8 row verticalLayOut">
              <div className="upperContainer">
                <div className="mdc-layout-grid__cell--span-8 row">
                  {props.data.mediaType != "video" ? (
                    enableFullScreen && props.data.thumbnailImage != null ? (
                      <img
                        alt="Top image"
                        className="column img"
                        onClick={() => {
                          imagePreviewer(props.data.thumbnailImage);
                        }}
                        src={props.data.thumbnailImage || holderImage}
                      />
                    ) : (
                      <img
                        alt="Top image"
                        className="column img"
                        src={props.data.thumbnailImage || holderImage}
                      />
                    )
                  ) : (
                    <div className="column img">
                      <VideoUI
                        data={props.data}
                        enableAutoPlay={props.data.enableAutoPlay1}
                        enableFullScreen={props.data.enableFullScreen}
                        url={props.data.videoURL1}
                        index={1}
                      />
                    </div>
                  )}
                  {props.data.BodyContent !== "" ? (
                    <p className="column bodyContent mdc-card">
                      {props.data.BodyContent || props.data.BodyContent == ""
                        ? props.data.BodyContent
                        : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massaa tempor"}
                    </p>
                  ) : (
                    <p className="column bodyContent mdc-card"></p>
                  )}
                </div>
                <div className="mdc-layout-grid__cell--span-8 row">
                  {props.data.BodyContent2 !== "" ? (
                    <p className="column bodyContent mid-text mdc-card">
                      {props.data.BodyContent2 || props.data.BodyContent2 == ""
                        ? props.data.BodyContent2
                        : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massaa tempor"}
                    </p>
                  ) : (
                    <p className="column bodyContent mid-text mdc-card"></p>
                  )}
                  {props.data.mediaType2 != "video" ? (
                    enableFullScreen2 && props.data.thumbnailImage2 != null ? (
                      <img
                        alt="Main image"
                        className="column img"
                        onClick={() => {
                          imagePreviewer(props.data.thumbnailImage2);
                        }}
                        src={props.data.thumbnailImage2 || holderImage}
                      />
                    ) : (
                      <img
                        alt="Main image"
                        className="column img"
                        src={props.data.thumbnailImage2 || holderImage}
                      />
                    )
                  ) : (
                    <div className="column img">
                      <VideoUI
                        data={props.data}
                        enableAutoPlay={props.data.enableAutoPlay2}
                        enableFullScreen={props.data.enableFullScreen2}
                        url={props.data.videoURL2}
                        index={2}
                      />
                    </div>
                  )}
                </div>
                <div className="mdc-layout-grid__cell--span-8 row">
                  {props.data.mediaType3 != "video" ? (
                    enableFullScreen3 && props.data.thumbnailImage3 != null ? (
                      <img
                        alt="Main image"
                        className="column img"
                        onClick={() => {
                          imagePreviewer(props.data.thumbnailImage3);
                        }}
                        src={props.data.thumbnailImage3 || holderImage}
                      />
                    ) : (
                      <img
                        alt="Main image"
                        className="column img"
                        src={props.data.thumbnailImage3 || holderImage}
                      />
                    )
                  ) : (
                    <div className="column img">
                      <VideoUI
                        data={props.data}
                        enableAutoPlay={props.data.enableAutoPlay3}
                        enableFullScreen={props.data.enableFullScreen3}
                        url={props.data.videoURL3}
                        index={3}
                      />
                    </div>
                  )}
                  {props.data.BodyContent3 !== "" ? (
                    <p className="column bodyContent mdc-card">
                      {props.data.BodyContent3 || props.data.BodyContent3 == ""
                        ? props.data.BodyContent3
                        : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massaa tempor"}
                    </p>
                  ) : (
                    <p className="column bodyContent mdc-card"></p>
                  )}
                </div>
              </div>
              <div id="lowerContainer" className="lowerContainer">
                {enableFullScreen4 && props.data.thumbnailImage4 ? (
                  <img
                    alt="Bottom image"
                    className=" img"
                    onClick={() => {
                      imagePreviewer(props.data.thumbnailImage4);
                    }}
                    src={props.data.thumbnailImage4 || holderImage}
                  />
                ) : (
                  <img
                    alt="Bottom image"
                    className="img"
                    src={props.data.thumbnailImage4 || holderImage}
                  />
                )}
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
