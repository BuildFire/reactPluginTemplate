import React, { useEffect, useState } from "react";
import "./style.less";
function Index(props) {
  const [holderImage, setHolderImage] = useState(
    "../../../../../../styles/media/holder-16x9.png"
  );

  return (
    <>
      <div className="layout-8-container">

        <div
          className="mdc-layout-grid Maincontainer "
          id="container"
        >
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-8 row">
              <div className="upperContainer">
                <div className="mdc-layout-grid__cell--span-8 row">
                  <div className="rowmContainer">
                  <img
                    className="column img"
                    src={props.data.thumbnailImage || holderImage}
                  />
                  <p className="column">{props.data.BodyContent || "body Content"}</p>

                  </div>
                </div>
                <div className="mdc-layout-grid__cell--span-8 row">
                  <p className="column">{props.data.BodyContent2 || "  body Content"}</p>
                  <img
                    className="column img"
                    src={props.data.thumbnailImage2 || holderImage}
                  />
                </div>
                <div className="mdc-layout-grid__cell--span-8 row">
                  <img
                    className="column img"
                    src={props.data.thumbnailImage3 || holderImage}
                  />
                  <p className="column">{props.data.BodyContent3 || "body Content"}</p>
                </div>
              </div>
              <div className="lowerContainer">
                <img
                  className="buttomImg"
                  src={props.data.thumbnailImage4 || holderImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
