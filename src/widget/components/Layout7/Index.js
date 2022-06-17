import React, { useEffect, useState } from "react";
import "./style.less";
import useHelper from "../../shared/Helper/Helper";
import VideoUI from "../../shared/VideoUI";
import ProgressRibbon from "../../shared/Ui_components/ProgressRibbon";

function Index(props) {
  const [holderImage, setHolderImage] = useState(
    "./assets/images/holder-16x9.png"
  );
  const [holderVideo, setHolderVideo] = useState(
    "./shared/img/video_player_placeholder.png"
  );

  const [enableFullScreen1, setEnableFullScreen1] = useState(false);
  const [enableFullScreen2, setEnableFullScreen2] = useState(false);
  const [enableFullScreen3, setEnableFullScreen3] = useState(false);
  const { imagePreviewer } = useHelper();

  useEffect(() => {
    {
      props.data.thumbnailImage != null
        ? (document.getElementById(
            "container"
          ).style.backgroundImage = `url(${props.data.thumbnailImage})`)
        : (document.getElementById(
            "container"
          ).style.backgroundImage = `url(${holderImage})`);
    }
    document.getElementById("container").style.backgroundPosition = "center";
    document.getElementById("container").style.backgroundSize = "cover";

    setEnableFullScreen1(props.data.enableFullScreen1);
    setEnableFullScreen2(props.data.enableFullScreen2);
    setEnableFullScreen3(props.data.enableFullScreen3);
    if (props.data.thumbnailImage) {
      document.body.style.backgroundImage = `url(${props.data.thumbnailImage})`;
    } else {
      document.body.style.background = "#d2cfcf";
    }
    document.body.style.backgroundPosition = "center";
  }, [props]);

  const layout7Style={
    position: "relative",
    height: "81.5vh"
  }
  const mainContainerStyle={
    overflow: "scroll",
    height: "88vh"
  }
  return (
    <>
      <div
        className="layout-7-container"
        style={props.data.showInfoRibbon ? layout7Style: {}}
      >
        <div
          className="mdc-layout-grid  Maincontainer "
          id="container"
          style={mainContainerStyle}
          onClick={() => {
            enableFullScreen1 && props.data.thumbnailImage != null
              ? imagePreviewer(props.data.thumbnailImage)
              : undefined;
          }}
        >
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-8">
              {props.data.mediaType2 != "video" ? (
                enableFullScreen2 && props.data.thumbnailImage2 != null ? (
                  <img
                    alt="Background image"
                    onClick={() => {
                      imagePreviewer(props.data.thumbnailImage2);
                    }}
                    src={props.data.thumbnailImage2 || holderImage}
                  />
                ) : (
                  <img
                    alt="Background image"
                    src={props.data.thumbnailImage2 || holderImage}
                  />
                )
              ) : (
                <VideoUI
                  data={props.data}
                  enableAutoPlay={props.data.enableAutoPlay1}
                  enableFullScreen={props.data.enableFullScreen2}
                  url={props.data.videoURL2}
                  index={1}
                />
              )}
              {props.data.TopBodyContent !== "" && (
                <p className="bodyContent mdc-card">
                  {props.data.TopBodyContent || props.data.TopBodyContent == ""
                    ? props.data.TopBodyContent
                    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massaa tempor"}
                </p>
              )}

              {props.data.mediaType3 != "video" ? (
                enableFullScreen3 && props.data.thumbnailImage3 != null ? (
                  <img
                    alt="Main image"
                    onClick={() => {
                      imagePreviewer(props.data.thumbnailImage3);
                    }}
                    src={props.data.thumbnailImage3 || holderImage}
                  />
                ) : (
                  <img
                    alt="Main image"
                    src={props.data.thumbnailImage3 || holderImage}
                  />
                )
              ) : (
                <VideoUI
                  data={props.data}
                  enableAutoPlay={props.data.enableAutoPlay2}
                  enableFullScreen={props.data.enableFullScreen3}
                  url={props.data.videoURL3}
                  index={2}
                />
              )}
              {props.data.MainBodyContent !== "" && (
                <p className="bodyContent mdc-card">
                  {props.data.MainBodyContent ||
                  props.data.MainBodyContent == ""
                    ? props.data.MainBodyContent
                    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massaa tempor"}
                </p>
              )}
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
