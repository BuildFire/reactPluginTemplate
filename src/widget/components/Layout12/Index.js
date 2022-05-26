import React, { useState, useEffect } from "react";
import "./style.less";
import useHelper from "../../shared/Helper/Helper";
function Index(props) {
  const [holderImage, setHolderImage] = useState("../../../../../../styles/media/holder-16x9.png");
  const [enableFullScreen, setEnableFullScreen] = useState(false);
  const { imagePreviewer } = useHelper();
  useEffect(() => {
    document.getElementById("my_container_div").innerHTML = props.data.wysiwygData  || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor."  ;

    setEnableFullScreen(props.data.enableFullScreen);
    if (props.themeState.colors) {
      props.setTextStyle();
    }
  }, [props])

  return (
    <>
      <div className="mdc-layout-grid layout-5-container">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell--span-8">
            <div className="main-12-Container">
              <div className="headerContainer">
                <div className="imageContainer">
                {enableFullScreen && props.data.thumbnailImage != null ? (
                <img
                  onClick={() => {
                    imagePreviewer(props.data.thumbnailImage);
                  }}
                  src={props.data.thumbnailImage || holderImage}
                />
              ) : (
                <img src={props.data.thumbnailImage || holderImage} />
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