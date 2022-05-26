import React, { useEffect, useState } from "react";
import "./style.less";
function Index(props) {

 
  const [holderImage, setHolderImage] = useState(
    "../../../../../../styles/media/holder-16x9.png"
  );
  useEffect(() => {
    if(props.themeState.colors){
      console.log('my theme in layout 1 -=>', props.themeState);
      props.setTextStyle();
    }
  },[props])
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
                  <p className="column bodyContent mdc-card">{props.data.BodyContent || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor."}</p>

                  </div>
                </div>
                <div className="mdc-layout-grid__cell--span-8 row">
                  <p className="column bodyContent mdc-card">{props.data.BodyContent2 || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor."}</p>
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
                  <p className="column bodyContent mdc-card">{props.data.BodyContent3 || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor."}</p>
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
