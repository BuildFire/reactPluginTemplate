import React, { useState, useEffect } from "react";
import "./style.less";
function Index(props) {
  const [holderImage, setHolderImage] = useState("../../../../../../styles/media/holder-16x9.png");
  const [takenImage, setTakenImage] = useState();
  useEffect(() => {
    let image = setImageSize(props.data.thumbnailImage);
    setTakenImage(image)
  }, [props])

  function setImageSize(image) {
    if (image) {
      let croppedImage = buildfire.imageLib.cropImage(
        image,
        { size: "full_width", aspect: "16:9" }
      );
      return croppedImage;
    } else {
      return holderImage;
    }
  }
  return (
    <>
      <div className="mdc-layout-grid layout-5-container">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell--span-8">
            <div className="main-11-Container">
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
                <p>{props.data.BodyContent1}</p>
                <p>{props.data.BodyContent2}</p>
                <p>{props.data.BodyContent3}</p>
              </div>

              {
                props.data.ExternalURL &&
                <a className="learnMoreLink">learn more </a>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
