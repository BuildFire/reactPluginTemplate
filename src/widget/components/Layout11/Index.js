import React, { useState, useEffect } from "react";
import "./style.less";
import useHelper from "../../shared/Helper/Helper";
import VideoUI from "../../shared/VideoUI";
import ProgressRibbon from "../../shared/Ui_components/ProgressRibbon";

function Index(props) {

  const [holderImage, setHolderImage] = useState("./assets/images/holder-16x9.png");
  const { imagePreviewer } = useHelper();

  useEffect(() => {
    if(Object.keys(props.data).length !== 0){
      if (props.data.showInfoRibbon) {
        document.getElementById("bottomBody").style.paddingBottom = "14rem";
      } else {
        document.getElementById("bottomBody").style.paddingBottom = "7rem";
      }
    }
    document.body.style.background = `black`;
   
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
                <div className="titleContainer mdc-card">
                  <p className="title">{props.data.title }</p>
                  <p className="subtitle">{props.data.subTitle }</p>
                </div>
              </div>
              <div id="bottomBody" className="dataContainer mdc-card">
                <p className="bodyContent">{props.data.BodyContent1}</p>
                <p className="bodyContent">{props.data.BodyContent2}</p>
                <p className="bodyContent">{props.data.BodyContent3}</p>

                {
                  props.data.ExternalURL &&
                  <a className="learnMoreLink">learn more </a>
                }
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