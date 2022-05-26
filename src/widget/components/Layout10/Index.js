import React, { useState, useEffect } from "react";
import "./style.less";
function Index(props) {
  const [holderImage, setHolderImage] = useState(
    "../../../../../../styles/media/holder-16x9.png"
  );
  useEffect(() => {
    if (props.themeState.colors) {
      console.log("my theme in layout 10-=>", props.themeState);
      props.setTextStyle();
    }
    let img =document.getElementById("topImage-container");
    if(props.data.thumbnailImage){

      img.style.backgroundImage = `url(${props.data.thumbnailImage})`
    }
    else{
      img.style.background = "#d2cfcf";
    }
    img.style.backgroundPosition = "center";
  }, [props]);
  return (
    <>
      <div className="mdc-layout-grid layout-10-container">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell--span-8">
            <div id="topImage-container">
              <img src={props.data.thumbnailImage2 || holderImage} />
            </div>
            <div className="info-container " >
              <div className="frontInfo mdc-card ">
                <p className="title">{props.data.title || "Title"}</p>
                <p className="subtitle">{props.data.subTitle || "Sub Title"}</p>
                <p className="bodyContent">{props.data.bodyContent  || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor." }</p>
                <p className="bodyContent">{props.data.bodyContent2  || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor." }</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
