import React, { useState, useEffect } from "react";
import "./style.less";
function Index(props) {
  const [holderImage, setHolderImage] = useState("../../../../../../styles/media/holder-16x9.png");
  const [takenImage, setTakenImage] = useState();
  useEffect(() => {
    document.getElementById("my_container_div").innerHTML = props.data.wysiwygData  || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor."  ;

    let image = setImageSize(props.data.thumbnailImage);
    setTakenImage(image)
  }, [props])

  function setImageSize(image) {
    if(image){
      let croppedImage = buildfire.imageLib.cropImage(
        image,
        { size: "full_width", aspect: "16:9" }
      );
      return croppedImage;
    }else{
      return holderImage;
    }
  }
  useEffect(() => {
    if (props.themeState.colors) {
      console.log("my theme in layout 11-=>", props.themeState);
      props.setTextStyle();
    }

  }, [props]);

  return (
    <>
      <div className="mdc-layout-grid layout-5-container">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell--span-8">
            <div className="main-12-Container">
              <div className="headerContainer">
                <div className="imageContainer">
                <img src={takenImage || holderImage} />
                </div>
                <div className="titleContainer mdc-card">
                  <p className="title">{props.data.title || "Title"}</p>
                  <p className="subtitle">{props.data.subTitle || "SubTitle"}</p>
                </div>
              </div>
              <div className="dataContainer mdc-card">
                <div id="my_container_div" className="bodyContent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
