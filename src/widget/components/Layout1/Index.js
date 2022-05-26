import React, { useState, useEffect } from 'react'
import "./style.less"

function Index(props) {
  const [holderImage, setHolderImage] = useState(
    "../../../../../../styles/media/holder-16x9.png"
  );

    useEffect(() => {
      if(props.themeState.colors){
        console.log('my theme in layout 1 -=>', props.themeState);
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
      <div className="mdc-layout-grid layout-1-container">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell--span-8">
            <div className="info-container">
              <div className="mdc-card">
                <h1 className="title">{props.data.title || "Title"}</h1>
                <h3 className="subtitle">{props.data.subtitle || "Subtitle"}</h3>
                <p className="bodyContent">{props.data.bodyContent || "Body Content"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index