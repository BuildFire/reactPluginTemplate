import React, { useEffect, useState } from "react";
import "./style.less";
import useHelper from "../../shared/Helper/Helper";


function Index(props) {
  const [holderImage, setHolderImage] = useState(
    "../../../../../../styles/media/holder-16x9.png");
    const [holderVideo, setHolderVideo] = useState(
      "./shared/img/video_player_placeholder.gif"
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

    setEnableFullScreen1(props.data.enableFullScreen1);
    setEnableFullScreen2(props.data.enableFullScreen2);
    setEnableFullScreen3(props.data.enableFullScreen3);

    if (props.themeState.colors) {
      props.setTextStyle();
    }
    if (props.data.thumbnailImage) {
      document.body.style.backgroundImage = `url(${props.data.thumbnailImage})`;
    } else {
      document.body.style.background = "#d2cfcf";
    }
    document.body.style.backgroundPosition = "center";
  }, [props]);

  return (
    <>
      <div className="layout-7-container">
        <div
          className="mdc-layout-grid  Maincontainer "
          id="container"
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
                    onClick={() => {
                      imagePreviewer(props.data.thumbnailImage2);
                    }}
                    src={props.data.thumbnailImage2 || holderImage}
                  />
                ) : (
                  <img src={props.data.thumbnailImage2 || holderImage} />
                )
              ) : props.data.videoURL2 ? (
                <video width="350" controls>
                  <source src={props.data.videoURL2} type="video/mp4" />
                  Your browser does not support videos.
                </video>
              ) : (
                <img src={holderVideo} alt="videoHolder" />
              )}

              <p>
                {props.data.TopBodyContent ||
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor."}
              </p>

              {props.data.mediaType3 != "video" ? (
                enableFullScreen3 && props.data.thumbnailImage3 != null ? (
                  <img
                    onClick={() => {
                      imagePreviewer(props.data.thumbnailImage3);
                    }}
                    src={props.data.thumbnailImage3 || holderImage}
                  />
                ) : (
                  <img src={props.data.thumbnailImage3 || holderImage} />
                )
              ) : props.data.videoURL3 ? (
                <video width="350" controls>
                  <source src={props.data.videoURL3} type="video/mp4" />
                  Your browser does not support videos.
                </video>
              ) : (
                <img src={holderVideo} alt="videoHolder" />
              )}

              <p className="bodyContent mdc-card">
                {props.data.MainBodyContent ||
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
