import React, { useState, useEffect } from "react";
import "./style.less";
function Index(props) {
  const [holderImage, setHolderImage] = useState(
    "../../../../../../styles/media/holder-16x9.png"
  );
  useEffect(() => {
    document.getElementById(
      "topImage-container"
    ).style.backgroundImage = `url(${props.data.thumbnailImage})`;
  }, [props]);
  return (
    <>
      <div className="mdc-layout-grid layout-10-container">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell--span-8">
            <div id="topImage-container">
              <img src={props.data.thumbnailImage2 || holderImage} />
            </div>
            <div className="info-container">
              <div className="frontInfo">
                <p className="title">{props.data.title || "Title"}</p>
                <p className="subtitle">{props.data.subTitle || "Sub Title"}</p>
                <p className="bodyContent">{props.data.bodyContent || "Body Content 1"}</p>
                <p className="bodyContent">{props.data.bodyContent2 || "Body Content 2"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
