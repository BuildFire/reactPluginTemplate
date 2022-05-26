import React, { useState } from "react";
import "./style.less";
function Index(props) {
  const [holderImage, setHolderImage] = useState("../../../../../../styles/media/holder-16x9.png")
  return (
    <>
      <div className="mdc-layout-grid layout-3-container">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell--span-8">
            <div className="mainImage-container">
              <img src={props.data.thumbnailImage || holderImage} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
