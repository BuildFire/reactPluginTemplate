import React, { useEffect, useState } from "react";
import "./style.less";
function Index(props) {
  const [holderImage, setHolderImage] = useState("../../../../../../styles/media/holder-16x9.png")


  useEffect(() => {
    if(props.themeState.colors){
      console.log('my theme in layout 7 -=>', props.themeState);
      props.setTextStyle();
    }
    if(props.data.thumbnailImage){
      document.body.style.backgroundImage = `url(${props.data.thumbnailImage})`
    }else{
      document.body.style.background = "#d2cfcf";
    }
    document.body.style.backgroundPosition = "center";
  },[props])

  return (
    <>
      <div className="layout-7-container">
        <div className="mdc-layout-grid  Maincontainer " >
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-8">

              <img className="img" src={props.data.thumbnailImage2 || holderImage} />
              <p className="bodyContent mdc-card">{props.data.TopBodyContent || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor."}</p>

              <img className="img" src={props.data.thumbnailImage3 || holderImage} />

              <p className="bodyContent mdc-card">{props.data.MainBodyContent || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor."}</p>


            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Index;
