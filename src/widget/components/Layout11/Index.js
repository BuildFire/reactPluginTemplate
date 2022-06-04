import React, { useState, useEffect } from "react";
import "./style.less";
import useHelper from "../../shared/Helper/Helper";
import VideoUI from "../../shared/VideoUI";
import ProgressRibbon from "../../shared/Ui_components/ProgressRibbon";

function Index(props) {

  const [holderImage, setHolderImage] = useState("../../../../../../styles/media/holder-16x9.png");
  const { imagePreviewer } = useHelper();

  useEffect(() => {

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
      {props.data.showInfoRibbon && <>
     <ProgressRibbon/>
      </>
      }
    </>
  );
}

export default Index;