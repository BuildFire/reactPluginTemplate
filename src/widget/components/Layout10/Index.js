import React, { useState, useEffect } from "react";
import "./style.less";
import useHelper from "../../shared/Helper/Helper";
import VideoUI from "../../shared/VideoUI";
import ProgressRibbon from "../../shared/Ui_components/ProgressRibbon";

function Index(props) {
  const [holderImage, setHolderImage] = useState("./assets/images/holder-16x9.png");
  const [enableFullScreen, setEnableFullScreen] = useState(false);
  const [enableFullScreen2, setEnableFullScreen2] = useState(false);

  const { imagePreviewer } = useHelper();
  useEffect(() => {
    document.getElementById(
      "topImage-container"
    ).style.backgroundImage = `url(${props.data.thumbnailImage})`;
    setEnableFullScreen(props.data.enableFullScreen);
    setEnableFullScreen2(props.data.enableFullScreen2);
    let img = document.getElementById("topImage-container");
    if (props.data.thumbnailImage) {
      img.style.backgroundImage = `url(${props.data.thumbnailImage})`
    }
    else {
      img.style.background = "#d2cfcf";
    }
    img.style.backgroundPosition = "center";
    let bottomBody = document.getElementById("bottomBody");
    if (Object.keys(props.data).length !== 0 && bottomBody) {
      if (props.data.showInfoRibbon) {
        bottomBody.style.marginBottom = "11rem";
      } else {
        bottomBody.style.marginBottom = "7rem";
      }
    }
    document.body.style.background = `black`;
  }, [props]);
  return (
    <>
      <div className="mdc-layout-grid layout-10-container">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell--span-8">
            <div id="topImage-container" onClick={() => {
              enableFullScreen && props.data.thumbnailImage != null ?
                imagePreviewer(props.data.thumbnailImage) :
                undefined
            }}>
              {
                props.data.mediaType != "video" ?
                  (
                    enableFullScreen2 && props.data.thumbnailImage2 != null ? (
                      <img
                        alt="Top image"
                        onClick={() => {
                          imagePreviewer(props.data.thumbnailImage2);
                        }}
                        src={props.data.thumbnailImage2 || holderImage}
                      />
                    ) : (
                      <img alt="Top image" src={props.data.thumbnailImage2 || holderImage} />
                    )
                  ) : (
                    <VideoUI data={props.data} enableAutoPlay={props.data.enableAutoPlay1} enableFullScreen={props.data.enableFullScreen} url={props.data.videoURL} index={1} />
                  )
              }
            </div>
            {
              (props.data.title != "" || props.data.subTitle != "" || props.data.bodyContent != ""|| props.data.bodyContent2 != "" ) &&
              <div className="info-container " >
                <div className="frontInfo mdc-card ">
                  <p className="title">{props.data.title||props.data.title==""?props.data.title:"Title"}</p>
                  <p className="subtitle">{props.data.subTitle || props.data.subTitle==""?props.data.subTitle:"Subtitle"}</p>
                  <p className="bodyContent">{props.data.bodyContent||props.data.bodyContent==""?props.data.bodyContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massaa tempor."}</p>
                  <p className="bodyContent" id="bottomBody">{props.data.bodyContent2||props.data.bodyContent2==""?props.data.bodyContent2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massaa tempor."}</p>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
      {props.data.showInfoRibbon && <>
        <ProgressRibbon />
      </>
      }
    </>
  );
}

export default Index;