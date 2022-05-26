import React, { useEffect, useState } from "react";
import "./style.less";
import useHelper from "../../shared/Helper/Helper";

function Index(props) {
  const [holderImage, setHolderImage] = useState("../../../../../../styles/media/holder-16x9.png")

  const [enableFullScreen, setEnableFullScreen] = useState(false);
  const [enableFullScreen2, setEnableFullScreen2] = useState(false);
  const [enableFullScreen3, setEnableFullScreen3] = useState(false);

  const { imagePreviewer } = useHelper();
  useEffect(() => {
    
    {enableFullScreen && props.data.thumbnailImage != null ? (
      document.getElementById("container").style.backgroundImage = `url(${props.data.thumbnailImage})`
    ) : (
      document.getElementById("container").style.backgroundImage = `url(${holderImage})`
    )}
    setEnableFullScreen(props.data.enableFullScreen);
    setEnableFullScreen2(props.data.enableFullScreen2);
    setEnableFullScreen3(props.data.enableFullScreen3);


  }, [props])

  return (
    <>
      <div className="layout-7-container">
        <div class="mdc-layout-grid  Maincontainer " id="container">
          <div class="mdc-layout-grid__inner">
            <div class="mdc-layout-grid__cell--span-8">

            {enableFullScreen2 && props.data.thumbnailImage2 != null ? (
                <img
                  onClick={() => {
                    imagePreviewer(props.data.thumbnailImage2);
                  }}
                  src={props.data.thumbnailImage2 || holderImage}
                />
              ) : (
                <img src={props.data.thumbnailImage2 || holderImage} />
              )}
              <p>{props.data.TopBodyContent || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor."}</p>

              {enableFullScreen3 && props.data.thumbnailImage3 != null ? (
                <img
                  onClick={() => {
                    imagePreviewer(props.data.thumbnailImage3);
                  }}
                  src={props.data.thumbnailImage3 || holderImage}
                />
              ) : (
                <img src={props.data.thumbnailImage3 || holderImage} />
              )}

              <p>{props.data.MainBodyContent || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor."}</p>


            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Index;
