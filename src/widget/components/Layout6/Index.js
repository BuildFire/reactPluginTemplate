import React,{useState, useEffect} from "react";
import "./style.less";
function Index(props) {
  const [holderImage, setHolderImage] = useState("../../../../../../styles/media/holder-16x9.png")
  const [carouselImages, setCarouselImages] = useState([{
    title: "buildfire",
    url: "https://www.facebook.com/buildfireapps",
    action: "linkToWeb",
    openIn: "_blank",
    iconUrl: "https://placekitten.com/800/400",
  },
  {
    action: "noAction",
    iconUrl: "https://placekitten.com/600/300",
    title: "image"
  }]);
  const [carouselView , setCarouselView] = useState(null);

  useEffect(() => {
    if(props.data.allImages){
      console.log("from console",props.data.allImages);
      // let view = new buildfire.components.carousel.view("#carousel",props.data.carouselImages);
      carouselView.loadItems(
       props.data.allImages
      );
    }
    // setCarouselView(view)
    // setCarouselImages(props.data.carouselImages);
    
    // setCarouselImages(props.carouselImages || [])
  }, [props])
  
  useEffect(() => {
    let view = new buildfire.components.carousel.view("#carousel");
    setCarouselView(view)
  },[])

  return (
    <>
      <div class="mdc-layout-grid layout-6-container">
        <div class="mdc-layout-grid__inner">
          <div class="mdc-layout-grid__cell--span-8">
            <div className="topImage-container">
            <img src={props.data.thumbnailImage || holderImage}/>
            <div class="info-container">
              <div className="mdc-card">
              <p className="bodyContent">{props.data.bodyContent || "Body Content"}</p>
              </div>
            </div>
            </div>
            
            <div className="ImageCarousel-container">
            <div id="carousel"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
