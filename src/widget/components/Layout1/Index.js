import React,{useState} from 'react'
import "./style.less"
function Index(props) {
    const [holderImage, setHolderImage] = useState(
        "../../../../../../styles/media/holder-16x9.png"
      );
  return (
    <>
    <div class="mdc-layout-grid layout-1-container">
        <div class="mdc-layout-grid__inner">
          <div class="mdc-layout-grid__cell--span-8">
            <div className="topImage-container">
            <img src={props.data.thumbnailImage || holderImage}/>
            </div>
            <div class="info-container">
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