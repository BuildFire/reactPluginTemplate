import React, { useEffect, useState } from "react";
import "./style.less";
function Index(props) {
  const [holderImage, setHolderImage] = useState(
    "../../../../../../styles/media/holder-16x9.png"
  );

  return (
    <>
      <div
        class="mdc-layout-grid layout-5-container Maincontainer "
        id="container"
      >
        <div class="mdc-layout-grid__inner">
          <div class="mdc-layout-grid__cell--span-8 row">
            <div>
              <img
                class="column img"
                src={props.data.thumbnailImage || holderImage}
              />
              <p class="column">{props.data.BodyContent || "body Content"}</p>
            </div>

            <div class="mdc-layout-grid__cell--span-8 row">
              <p class="column">{props.data.BodyContent2 || "  body Content"}</p>

              <img
                class="column img"
                src={props.data.thumbnailImage2 || holderImage}
              />
            </div>

            <div class="mdc-layout-grid__cell--span-8 row">
              <img
                class="column img"
                src={props.data.thumbnailImage3 || holderImage}
              />
              <p class="column">{props.data.BodyContent3 || "body Content"}</p>
            </div>

            <img
              class="buttomImg"
              src={props.data.thumbnailImage4 || holderImage}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
