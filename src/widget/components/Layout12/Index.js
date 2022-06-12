import React, { useState, useEffect } from "react";
import "./style.less";
import useHelper from "../../shared/Helper/Helper";
import VideoUI from "../../shared/VideoUI";
import ProgressRibbon from "../../shared/Ui_components/ProgressRibbon";

function Index(props) {

  const [holderImage, setHolderImage] = useState("./assets/images/holder-16x9.png");
  const { imagePreviewer } = useHelper();

  useEffect(() => {
    document.getElementById("my_container_div").innerHTML = props.data.wysiwygData || "";
    if (Object.keys(props.data).length !== 0) {
      if (props.data.showInfoRibbon) {
        document.getElementById("my_container_div").style.marginBottom = "14rem";
      } else {
        document.getElementById("my_container_div").style.marginBottom = "7rem";
      }
    }
    document.body.style.background = `black`;

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
                        props.data.enableFullScreen && props.data.thumbnailImage != null ? (
                          <img
                            alt="Top image"
                            onClick={() => {
                              imagePreviewer(props.data.thumbnailImage);
                            }}
                            src={props.data.thumbnailImage || holderImage}
                          />
                        ) : (
                          <img alt="Top image" src={props.data.thumbnailImage || holderImage} />
                        )
                      ) : (
                        <VideoUI data={props.data} enableAutoPlay={props.data.enableAutoPlay1} enableFullScreen={props.data.enableFullScreen} url={props.data.videoURL} index={1} />
                      )}
                </div>
                {
                  (props.data.title != "" || props.data.subTitle != "" ) &&
                  <div className="titleContainer mdc-card">
                    <p className="title">{props.data.title ||props.data.title==""? props.data.title : "Title"}</p>
                    <p className="subtitle">{props.data.subTitle ||props.data.subTitle==""?props.data.subTitle: "Subtitle"}</p>
                  </div>
                }
              </div>
              <div className="dataContainer mdc-card">
                <div id="my_container_div" className="bodyContent"></div>
              </div>
            </div>
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