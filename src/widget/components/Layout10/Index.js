import React, { useState, useEffect } from "react";
import "./style.less";
import useHelper from "../../shared/Helper/Helper";
import VideoUI from "../../shared/VideoUI";
function Index(props) {
  const [holderImage, setHolderImage] = useState("../../../../../../styles/media/holder-16x9.png");
  const [enableFullScreen, setEnableFullScreen] = useState(false);
  const [enableFullScreen2, setEnableFullScreen2] = useState(false);
  
  const { imagePreviewer } = useHelper();
  useEffect(() => {
    document.getElementById(
      "topImage-container"
    ).style.backgroundImage = `url(${props.data.thumbnailImage})`;
    setEnableFullScreen(props.data.enableFullScreen);
    setEnableFullScreen2(props.data.enableFullScreen2);

    if (props.themeState.colors) {
      props.setTextStyle();
    }
    let img = document.getElementById("topImage-container");
    if (props.data.thumbnailImage) {
      img.style.backgroundImage = `url(${props.data.thumbnailImage})`
    }
    else {
      img.style.background = "#d2cfcf";
    }
    img.style.backgroundPosition = "center";
  }, [props]);
  return (
    <>
      <div className="mdc-layout-grid layout-10-container">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell--span-8">
            <div id="topImage-container" onClick={() => {
              enableFullScreen && props.data.thumbnailImage != null ?
                imagePreviewer(props.data.thumbnailImage) :
                undefined
            }}>
              {
                props.data.mediaType != "video" ?
                  (
                    enableFullScreen2 && props.data.thumbnailImage2 != null ? (
                      <img
                      alt="Top image"
                        onClick={() => {
                          imagePreviewer(props.data.thumbnailImage2);
                        }}
                        src={props.data.thumbnailImage2 || holderImage}
                      />
                    ) : (
                      <img alt="Top image" src={props.data.thumbnailImage2 || holderImage} />
                    )
                  ) : (
                    <VideoUI data={props.data} enableAutoPlay={props.data.enableAutoPlay1} enableFullScreen={props.data.enableFullScreen} url={props.data.videoURL} index={1} />
                  )
              }
            </div>
            <div className="info-container " >
              <div className="frontInfo mdc-card ">
                <p className="title">{props.data.title || "Title"}</p>
                <p className="subtitle">{props.data.subTitle || "Sub Title"}</p>
                <p className="bodyContent">{props.data.bodyContent || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan cursus nibh. Phasellus vulputate luctus mauris, sit amet rutrum sapien pulvinar id. Donec id tortor ut neque semper convallis. Nullam non libero lacinia ipsum dignissim ornare. Aliquam at nisi nec est aliquam volutpat et non nulla. Proin imperdiet ullamcorper neque, eget commodo turpis placerat ac. "}</p>
                <p className="bodyContent">{props.data.bodyContent2 || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan cursus nibh. Phasellus vulputate luctus mauris, sit amet rutrum sapien pulvinar id. Donec id tortor ut neque semper convallis. Nullam non libero lacinia ipsum dignissim ornare. Aliquam at nisi nec est aliquam volutpat et non nulla. Proin imperdiet ullamcorper neque, eget commodo turpis placerat ac. "}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;