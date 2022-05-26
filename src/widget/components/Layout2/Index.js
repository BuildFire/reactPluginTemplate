import React, { useState, useEffect } from 'react'
import "./style.less"
function Index(props) {
  const [holderImage, setHolderImage] = useState(
    "../../../../../../styles/media/holder-16x9.png"
  );

  useEffect(() => {
    if(props.themeState.colors){
      console.log('my theme in layout 2 -=>', props.themeState);
      props.setTextStyle();
    }
    if(props.data.thumbnailImage){
      document.body.style.backgroundImage = `url(${props.data.thumbnailImage})`
    }else{
      document.body.style.backgroundImage = `url(${holderImage})`
    }
    document.body.style.backgroundPosition = "center";
  },[props])

  return (
    <>
      <div className="mdc-layout-grid layout-2-container">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell--span-8">
            <div className="mainImage-container">
              <img src={props.data.thumbnailImage2 || holderImage} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index