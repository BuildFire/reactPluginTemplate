import React, { useState, useEffect } from "react";
import "./style.less";
import useHelper from "../../shared/Helper/Helper";
function Index(props) {

  const [holderImage, setHolderImage] = useState("../../../../../../styles/media/holder-16x9.png");
  const [holderVideo, setHolderVideo] = useState(
    "./shared/img/video_player_placeholder.gif"
  );
  const [enableFullScreen, setEnableFullScreen] = useState(false);
  const { imagePreviewer } = useHelper();

  useEffect(() => {
    document.getElementById("my_container_div").innerHTML = props.data.wysiwygData || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor.";

    setEnableFullScreen(props.data.enableFullScreen);
    if (props.themeState.colors) {
      props.setTextStyle();
    }

    if (props.data.topMediaType == "video" && props.data.videoURL == "") {
      document.getElementById("imageContainer").style.height = "18.688rem";
    } else if (props.data.topMediaType == "video" && props.data.videoURL != "") {
      document.getElementById("imageContainer").style.height = "24.688rem";
    } else {
      document.getElementById("imageContainer").style.height = "12.688rem";
    }
  }, [props])

  return (
    <>
      <div className="mdc-layout-grid layout-5-container">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell--span-8">
            <div className="main-12-Container">
              <div className="headerContainer">
                <div id="imageContainer" className="imageContainer">
                  {
                    props.data.topMediaType != "video" ?
                      (
                        enableFullScreen && props.data.thumbnailImage != null ? (
                          <img
                            onClick={() => {
                              imagePreviewer(props.data.thumbnailImage);
                            }}
                            src={props.data.thumbnailImage || holderImage}
                          />
                        ) : (
                          <img src={props.data.thumbnailImage || holderImage} />
                        )
                      ) : (
                        props.data.videoURL != "" ? (
                          props.data.enableFullScreen ? (
                            <video className="fullScreenVideo" width="350" controls>
                              <source src={props.data.videoURL} type="video/mp4" />
                              Your browser does not support videos.
                            </video>
                          ) : (
                            <video width="350" controls>
                              <source src={props.data.videoURL} type="video/mp4" />
                              Your browser does not support videos.
                            </video>
                          )

                        ) : (
                          <img src={holderVideo} />
                        )
                      )}
                </div>
                <div className="titleContainer mdc-card">
                  <p className="title">{props.data.title || "Title"}</p>
                  <p className="subtitle">{props.data.subTitle || "SubTitle"}</p>
                </div>
              </div>
              <div className="dataContainer mdc-card">
                <div id="my_container_div" className="bodyContent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;