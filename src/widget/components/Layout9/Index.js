import React, { useState, useEffect } from "react";
import "./style.less";
function Index(props) {
  const [holderImage, setHolderImage] = useState(
    "../../../../../../styles/media/holder-16x9.png"
  );
  
  useEffect(() => {
    if (props.themeState.colors) {
      console.log("my theme in layout 9-=>", props.themeState);
      props.setTextStyle();
    }

    document.body.style.background = "#d2cfcf";
    document.body.style.backgroundPosition = "center";
  }, [props]);

  return (
    <>
      <div className="mdc-layout-grid layout-9-container">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell--span-8">
            <div className="topImage-container">
              <img src={props.data.thumbnailImage2 || holderImage} />
            </div>

            <div className="mainImage-container" id="mainImage-container">
              <img
                className="secondImage"
                src={props.data.thumbnailImage3 || holderImage}
              />

              <div className="info-container mdc-card">
                <p className="title">{props.data.title || "Title"}</p>
                <p className="subtitle">{props.data.subTitle || "subT itle"}</p>
                <p className="bodyContent">
                  {props.data.bodyContent || "Body Content"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
