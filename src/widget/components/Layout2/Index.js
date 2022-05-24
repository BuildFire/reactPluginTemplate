import React,{useState} from 'react'
import "./style.less"
function Index(props) {
    const [holderImage, setHolderImage] = useState(
        "../../../../../../styles/media/holder-16x9.png"
      );
  return (
    <>
    <div class="mdc-layout-grid layout-2-container">
        <div class="mdc-layout-grid__inner">
          <div class="mdc-layout-grid__cell--span-8">
            <div className="topImage-container">
            <img src={props.data.thumbnailImage || holderImage}/>
            </div>
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