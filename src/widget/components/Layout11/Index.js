import React, { useState, useEffect } from "react";
import "./style.less";
import useHelper from "../../shared/Helper/Helper";
function Index(props) {

  const [holderImage, setHolderImage] = useState("../../../../../../styles/media/holder-16x9.png");
  const [enableFullScreen, setEnableFullScreen] = useState(false);
  const [holderVideo, setHolderVideo] = useState("./shared/img/video_player_placeholder.gif");
  const { imagePreviewer } = useHelper();

  useEffect(() => {
    setEnableFullScreen(props.data.enableFullScreen);
    if (props.themeState.colors) {
      console.log("my theme in layout 11-=>", props.themeState);
      props.setTextStyle();
    }

  }, [props])

  return (
    <>
      <div className="mdc-layout-grid layout-5-container">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell--span-8">
            <div className="main-11-Container">
              <div className="headerContainer">
                <div id="imageContainer" className="imageContainer">
                  {
                    props.data.TopMediaType != "video" ?
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
                <p className="bodyContent">{props.data.BodyContent1 || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor."}</p>
                <p className="bodyContent">{props.data.BodyContent2 || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor."}</p>
                <p className="bodyContent">{props.data.BodyContent3 || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor."}</p>
              </div>
              {
                props.data.ExternalURL &&
                <a className="learnMoreLink">learn more </a>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;