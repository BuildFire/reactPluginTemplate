import React, { useState, useEffect } from "react";
import "./style.less";
function Index(props) {
  const [holderImage, setHolderImage] = useState("../../../../../../styles/media/holder-16x9.png");
  const [takenImage, setTakenImage] = useState();
  useEffect(() => {
    document.getElementById("my_container_div").innerHTML = props.data.wysiwygData || '';

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
  return (
    <>
      <div class="mdc-layout-grid layout-5-container">
        <div class="mdc-layout-grid__inner">
          <div class="mdc-layout-grid__cell--span-8">
            <div className="main-12-Container">
              <div className="headerContainer">
                <div className="imageContainer">
                <img src={takenImage || holderImage} />
                </div>
                <div className="titleContainer">
                  <p className="title">{props.data.title || "Title"}</p>
                  <p className="subtitle">{props.data.subTitle || "SubTitle"}</p>
                </div>
              </div>
              <div className="dataContainer">
                <div id="my_container_div"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
