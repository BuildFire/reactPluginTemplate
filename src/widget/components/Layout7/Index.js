import React, { useEffect, useState } from "react";
import "./style.less";
function Index(props) {
  const [holderImage, setHolderImage] = useState("../../../../../../styles/media/holder-16x9.png")
  useEffect(() => {
    document.getElementById("container").style.backgroundImage = `url(${props.data.thumbnailImage})`;

  }, [props])

  return (
    <>
      <div className="layout-7-container">
        <div class="mdc-layout-grid  Maincontainer " id="container">
          <div class="mdc-layout-grid__inner">
            <div class="mdc-layout-grid__cell--span-8">

              <img class="img" src={props.data.thumbnailImage2 || holderImage} />
              <p>{props.data.TopBodyContent || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor."}</p>

              <img class="img" src={props.data.thumbnailImage3 || holderImage} />

              <p>{props.data.MainBodyContent || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor."}</p>


            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Index;
