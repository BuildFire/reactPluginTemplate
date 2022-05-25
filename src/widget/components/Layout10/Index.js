import React, { useState } from "react";
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
      <div class="mdc-layout-grid layout-10-container">
        <div class="mdc-layout-grid__inner">
          <div class="mdc-layout-grid__cell--span-8">
            <div className="topImage-container">
              <img src={props.data.thumbnailImage2 || holderImage} />
            </div>
            <div class="info-container">
              <div className="mdc-card">
                <h1 class="title">{props.data.title}</h1>
                <h3 class="subtitle">{props.data.subTitle}</h3>
              </div>
              <p className="bodyContent">{props.data.bodyContent}</p>
              <p className="bodyContent">{props.data.bodyContent2}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
