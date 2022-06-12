import React, { useState, useEffect } from "react";
import "./style.less";
import useHelper from "../../shared/Helper/Helper";
import VideoUI from "../../shared/VideoUI";
import ProgressRibbon from "../../shared/Ui_components/ProgressRibbon";

function Index(props) {
  const [holderImage, setHolderImage] = useState(
    "./assets/images/holder-16x9.png"
  );
  const [carouselImages, setCarouselImages] = useState([
    {
      title: "buildfire",
      url: "https://www.facebook.com/buildfireapps",
      action: "linkToWeb",
      openIn: "_blank",
      iconUrl: "https://placekitten.com/800/400",
    },
    {
      action: "noAction",
      iconUrl: "https://placekitten.com/600/300",
      title: "image",
    },
  ]);
  
  const [enableFullScreen, setEnableFullScreen] = useState(false);
  const { imagePreviewer, fullScreenVideoHandler } = useHelper();


  useEffect(() => {
    let carouselView;
    
    if (props.data.allImages && props.data.allImages.length > 0) {
      carouselView = new buildfire.components.carousel.view("#carousel");
      carouselView.loadItems(props.data.allImages);

      document.getElementById(
        "ImageCarousel-container"
      ).style.backgroundImage = `none`;
    } else {
      document.getElementById(
        "ImageCarousel-container"
      ).style.backgroundImage = `url(${holderImage})`;
      document.getElementById("ImageCarousel-container").style.backgroundSize =
        "cover";
    }
    setEnableFullScreen(props.data.enableFullScreen);
  }, [props]);

  return (
    <>
      <div className="mdc-layout-grid layout-6-container">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell--span-8">
            {props.data.topMediaType !== "video" ? (
              <div className="topImage-container">
                {enableFullScreen && props.data.thumbnailImage != null ? (
                  <img
                  alt="Top image" 
                    onClick={() => {
                      imagePreviewer(props.data.thumbnailImage);
                    }}
                    src={props.data.thumbnailImage || holderImage}
                  />
                ) : (
                  <img  alt="Top image"  src={props.data.thumbnailImage || holderImage} />
                )}
                <div className="info-container">
                {(
                    props.data.bodyContent !== "" && 
                      <div className="mdc-card">
                      <p className="bodyContent">
                        {props.data.bodyContent || props.data.bodyContent == ""
                          ? props.data.bodyContent
                          : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massaa tempor"}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ) :(
              <div className="topImage-container">
              <VideoUI
              data={props.data}
              enableAutoPlay={props.data.enableAutoPlay1}
              enableFullScreen={props.data.enableFullScreen}
              url={props.data.videoURL}
              index={1}
            />
               <div className="info-container">
               {(
                    props.data.bodyContent !== "" && 
                      <div className="mdc-card">
                      <p className="bodyContent">
                        {props.data.bodyContent || props.data.bodyContent == ""
                          ? props.data.bodyContent
                          : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massaa tempor"}
                      </p>
                    </div>
                  )}
                </div>
            </div>
            )}

            <div
              id="ImageCarousel-container"
              className="ImageCarousel-container"
            >
              <div id="carousel"></div>
            </div>
          </div>
        </div>
      </div>
      {props.data.showInfoRibbon && <>
     <ProgressRibbon/>
      </>
      }
    </>
  );
}

export default Index;
