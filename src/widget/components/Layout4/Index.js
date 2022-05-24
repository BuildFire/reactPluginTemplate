import React, { useState } from "react";
import "./style.less";
function Index(props) {
  const [holderImage, setHolderImage] = useState(
    "../../../../../../styles/media/holder-16x9.png"
  );
  return (
    <>
      <div class="mdc-layout-grid layout-4-container">
        <div class="mdc-layout-grid__inner">
          <div class="mdc-layout-grid__cell--span-8">
            <div className="topImage-container">
              <img src={props.data.thumbnailImage || holderImage} />
            </div>
            <div class="info-container">
              <div className="mdc-card">
                <h1 class="title">{props.data.title}</h1>
                <h3 class="subtitle">{props.data.subtitle}</h3>
                <p className="bodyContent">{props.data.bodyContent}</p>
              </div>
            </div>
            <div className="mainImage-container">
              <img src={props.data.thumbnailImage2 || holderImage} />
            </div>
            <div class="mainBody-container">
              <div className="mdc-card">
                <p className="bodyContent">{props.data.mainBodyContent}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
