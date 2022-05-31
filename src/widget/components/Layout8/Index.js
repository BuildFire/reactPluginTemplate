import React, { useEffect, useState } from "react";
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
  const [enableFullScreen2, setEnableFullScreen2] = useState(false);
  const [enableFullScreen3, setEnableFullScreen3] = useState(false);
  const [enableFullScreen4, setEnableFullScreen4] = useState(false);

  const { imagePreviewer } = useHelper();

  useEffect(() => {
    setEnableFullScreen(props.data.enableFullScreen);
    setEnableFullScreen2(props.data.enableFullScreen2);
    setEnableFullScreen3(props.data.enableFullScreen3);
    setEnableFullScreen4(props.data.enableFullScreen4);

    if (props.themeState.colors) {
      props.setTextStyle();
    }
  }, [props]);

  return (
    <>
      <div className="layout-8-container">
        <div className="mdc-layout-grid Maincontainer " id="container">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-8 row">
              <div className="upperContainer">
                <div className="mdc-layout-grid__cell--span-8 row">
                  <div className="rowmContainer">
                    {props.data.mediaType != "video" ? (
                      enableFullScreen && props.data.thumbnailImage != null ? (
                        <img
                          className="column img"
                          onClick={() => {
                            imagePreviewer(props.data.thumbnailImage);
                          }}
                          src={props.data.thumbnailImage || holderImage}
                        />
                      ) : (
                        <img
                          className="column img"
                          src={props.data.thumbnailImage || holderImage}
                        />
                      )
                    ) : props.data.videoURL1 ? (
                      
                      props.data.enableFullScreen ? (
                        <video className="fullScreenVideo column img" width="350" controls>
                          <source src={props.data.videoURL1} type="video/mp4" />
                          Your browser does not support videos.
                        </video>
                      ) : (
                        <video className="column img" width="350" controls>
                          <source src={props.data.videoURL1} type="video/mp4" />
                          Your browser does not support videos.
                        </video>
                      )
                    ) : (
                      <img className="img column" src={holderVideo} alt="videoHolder" />
                    )}

                    <p className="column bodyContent mdc-card ">
                      {props.data.BodyContent || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor."}
                    </p>
                  </div>
                </div>
                <div className="mdc-layout-grid__cell--span-8 row">
                  <p className="column bodyContent mid-text mdc-card">
                    {props.data.BodyContent2 || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor."}
                  </p>
                  {props.data.mediaType2 != "video" ? (
                    enableFullScreen2 && props.data.thumbnailImage2 != null ? (
                    <img
                      className="column img"
                      onClick={() => {
                        imagePreviewer(props.data.thumbnailImage2);
                      }}
                      src={props.data.thumbnailImage2 || holderImage}
                    />
                  ) : (
                    <img
                      className="column img"
                      src={props.data.thumbnailImage2 || holderImage}
                    />
                  )) : props.data.videoURL2 ?(
                      props.data.enableFullScreen2 ? (
                        <video className="fullScreenVideo column img" width="350" controls>
                          <source src={props.data.videoURL2} type="video/mp4" />
                          Your browser does not support videos.
                        </video>
                      ) : (
                        <video className="column img" width="350" controls>
                          <source src={props.data.videoURL2} type="video/mp4" />
                          Your browser does not support videos.
                        </video>
                      )
                    ) : (
                      <img className="img column" src={holderVideo} alt="videoHolder" />
                    )}


             
                </div>
                <div className="mdc-layout-grid__cell--span-8 row">
                {props.data.mediaType3 != "video" ? (
                  enableFullScreen3 && props.data.thumbnailImage3 != null ? (
                    <img
                      className="column img"
                      onClick={() => {
                        imagePreviewer(props.data.thumbnailImage3);
                      }}
                      src={props.data.thumbnailImage3 || holderImage}
                    />
                  ) : (
                    <img
                      className="column img"
                      src={props.data.thumbnailImage3 || holderImage}
                    />
                  )) : props.data.videoURL3 ? (
                      props.data.enableFullScreen3 ? (
                        <video className="fullScreenVideo column img" width="350" controls>
                          <source src={props.data.videoURL3} type="video/mp4" />
                          Your browser does not support videos.
                        </video>
                      ) : (
                        <video className="column img" width="350" controls>
                          <source src={props.data.videoURL3} type="video/mp4" />
                          Your browser does not support videos.
                        </video>
                      )
                    ) : (
                      <img className="img column" src={holderVideo} alt="videoHolder" />
                    )}
                  <p className="column bodyContent mdc-card">
                    {props.data.BodyContent3 || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor."}
                  </p>
                </div>
              </div>
              <div className="lowerContainer">
                {enableFullScreen4 && props.data.thumbnailImage4 != null ? (
                  <img
                    className="column img"
                    onClick={() => {
                      imagePreviewer(props.data.thumbnailImage4);
                    }}
                    src={props.data.thumbnailImage4 || holderImage}
                  />
                ) : (
                  <img
                    className="column img"
                    src={props.data.thumbnailImage4 || holderImage}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
