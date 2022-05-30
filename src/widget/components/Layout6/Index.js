import React, { useState, useEffect } from "react";
import "./style.less";
import useHelper from "../../shared/Helper/Helper";
function Index(props) {
  const [holderImage, setHolderImage] = useState(
    "../../../../../../styles/media/holder-16x9.png"
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
  const [carouselView, setCarouselView] = useState(null);
  const [enableFullScreen, setEnableFullScreen] = useState(false);
  const { imagePreviewer } = useHelper();
  useEffect(() => {
    if (props.data.allImages) {
      console.log("from console", props.data.allImages);
      // let view = new buildfire.components.carousel.view("#carousel",props.data.carouselImages);
      carouselView.loadItems(props.data.allImages);
    }
    // setCarouselView(view)
    // setCarouselImages(props.data.carouselImages);

    // setCarouselImages(props.carouselImages || [])

    setEnableFullScreen(props.data.enableFullScreen);

    if(props.themeState.colors){
      console.log('my theme in layout 1 -=>', props.themeState);
      props.setTextStyle();
    }
    document.getElementById("ImageCarousel-container").style.backgroundImage = `url(${holderImage})`;
    document.getElementById("ImageCarousel-container").style.backgroundSize = "cover";
  }, [props]);

  useEffect(() => {
    let view = new buildfire.components.carousel.view("#carousel");
    setCarouselView(view);
  }, []);

  return (
    <>
      <div className="mdc-layout-grid layout-6-container">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell--span-8">
          {props.data.topMediaType !== "video" ? (
              <div className="topImage-container">
              {enableFullScreen && props.data.thumbnailImage != null ? (
                <img
                  onClick={() => {
                    imagePreviewer(props.data.thumbnailImage);
                  }}
                  src={props.data.thumbnailImage || holderImage}
                />
              ) : (
                <img src={props.data.thumbnailImage || holderImage} />
              )}
              <div className="info-container">
                <div className="mdc-card">
                  <p className="bodyContent">
                    {props.data.bodyContent || "Body Content"}
                  </p>
                </div>
              </div>
            </div>
            ) : props.data.videoURL ? (
              <div className="video-container">
                <video autoPlay loop muted>
                  <source src={props.data.videoURL} type="video/mp4" />
                </video>
                <div className="info-container">
                <div className="mdc-card">
                  <p className="bodyContent">
                    {props.data.bodyContent || "Body Content"}
                  </p>
                </div>
              </div>
              </div>
              
            ) : (
              <div className="mainImage-container">
                <img src={holderImage} />
                <div className="info-container">
                <div className="mdc-card">
                  <p className="bodyContent">
                    {props.data.bodyContent || "Body Content"}
                  </p>
                </div>
              </div>
              </div>
            )}
            

            <div id="ImageCarousel-container" className="ImageCarousel-container">
              <div id="carousel"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
