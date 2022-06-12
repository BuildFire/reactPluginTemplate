import React, { useState, useEffect } from "react";
import useHelper from "../../shared/Helper/Helper";
import VideoUI from "../../shared/VideoUI";
import ProgressRibbon from "../../shared/Ui_components/ProgressRibbon";

import "./style.less";
function Index(props) {
  const [holderImage, setHolderImage] = useState(
    "./assets/images/holder-16x9.png"
  );

  const [enableFullScreen, setEnableFullScreen] = useState(false);
  const [enableMainFullScreen, setEnableMainFullScreen] = useState(false);

  const { imagePreviewer } = useHelper();
  useEffect(() => {
    setEnableFullScreen(props.data.enableFullScreen);
    setEnableMainFullScreen(props.data.enableMainFullScreen);
  }, [props]);

  return (
    <>
      <div className="mdc-layout-grid layout-4-container">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell--span-8">
            {props.data.topMediaType !== "video" ? (
              <div className="topImage-container">
                {enableFullScreen && props.data.thumbnailImage != null ? (
                  <img
                    alt="Top image"
                    onClick={() => {
                      imagePreviewer(props.data.thumbnailImage);
                    }}
                    src={props.data.thumbnailImage || holderImage}
                  />
                ) : (
                  <img
                    alt="Top image"
                    src={props.data.thumbnailImage || holderImage}
                  />
                )}
                <div className="info-container-top">
                {(props.data.title !== "" ||
                    props.data.subtitle !== "" ||
                    props.data.bodyContent !== "") && (
                      <div className="mdc-card">
                      <h1 className="title">
                        {props.data.title || props.data.title == ""
                          ? props.data.title
                          : "Title"}
                      </h1>
                      <h3 className="subtitle">
                        {props.data.subtitle || props.data.subtitle == ""
                          ? props.data.subtitle
                          : "Subtitle"}
                      </h3>
                      <p className="bodyContent">
                        {props.data.bodyContent || props.data.bodyContent == ""
                          ? props.data.bodyContent
                          : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massaa tempor"}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="topImage-container">
                <VideoUI
                  data={props.data}
                  enableAutoPlay={props.data.enableAutoPlay1}
                  enableFullScreen={props.data.enableFullScreen}
                  url={props.data.videoURL}
                  index={1}
                />
                <div className="info-container-top">
                  {(props.data.title !== "" ||
                    props.data.subtitle !== "" ||
                    props.data.bodyContent !== "") && (
                      <div className="mdc-card">
                      <h1 className="title">
                        {props.data.title || props.data.title == ""
                          ? props.data.title
                          : "Title"}
                      </h1>
                      <h3 className="subtitle">
                        {props.data.subtitle || props.data.subtitle == ""
                          ? props.data.subtitle
                          : "Subtitle"}
                      </h3>
                      <p className="bodyContent">
                        {props.data.bodyContent || props.data.bodyContent == ""
                          ? props.data.bodyContent
                          : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massaa tempor"}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
            {props.data.mainMediaType !== "video" ? (
              <div className="mainImage-container">
                {enableMainFullScreen && props.data.thumbnailImage2 != null ? (
                  <img
                    alt="Main image"
                    onClick={() => {
                      imagePreviewer(props.data.thumbnailImage2);
                    }}
                    src={props.data.thumbnailImage2 || holderImage}
                  />
                ) : (
                  <img
                    alt="Main image"
                    src={props.data.thumbnailImage2 || holderImage}
                  />
                )}
                <div className="mainBody-container">
                {props.data.mainBodyContent !== "" && (
                      <div className="mdc-card">
                        <p className="bodyContent">
                          {props.data.mainBodyContent ||
                          props.data.mainBodyContent == ""
                            ? props.data.mainBodyContent
                            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massaa tempor"}
                        </p>
                      </div>
                    )}
                </div>
              </div>
            ) : (
              <>
                <div className="mainImage-container">
                  <VideoUI
                    data={props.data}
                    enableAutoPlay={props.data.enableAutoPlay2}
                    enableFullScreen={props.data.enableMainFullScreen}
                    url={props.data.videoURL2}
                    index={2}
                    layout={4}
                  />
                  <div className="mainBody-container">
                    {props.data.mainBodyContent !== "" && (
                      <div className="mdc-card">
                        <p className="bodyContent">
                          {props.data.mainBodyContent ||
                          props.data.mainBodyContent == ""
                            ? props.data.mainBodyContent
                            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massaa tempor"}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
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
