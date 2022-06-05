import React, { useState, useEffect } from "react";
import "./style.less";
import useHelper from "../../shared/Helper/Helper";
import VideoUI from "../../shared/VideoUI";
function Layout13(props) {
  const [holderImage, setHolderImage] = useState(
    "./assets/images/holder-16x9.png"
  );
  const [enableFullScreen, setEnableFullScreen] = useState(false);
  const { imagePreviewer } = useHelper();
  const [apiData, setApiData] = useState({})
  useEffect( () => {
    // buildfire.datastore.get("test", (err, result) => {
    //   if (err) return console.error("Error while retrieving your apiData", err);
    //   console.log("Main record", result.data);
    //   setApiData(result.data);
    //   // handleSendMessage({selectedLayout: "external1",...result.apiData});
    // });
    return new Promise((resolve, reject) => {
      buildfire.datastore.get("test", (err, result) => {
        if (err) return console.error("Error while retrieving your apiData", err);
        resolve(
          setApiData(result.data)
        )
        console.log("Main record", result.data);
        // setApiData(result.data);
        // handleSendMessage({selectedLayout: "external1",...result.apiData});
      });
    })
    
  }, []);
  // useEffect(() => {
  //   console.log("apiData.title ",apiData );
  //   setEnableFullScreen(apiData.enableFullScreen);
  // },[apiData])
  return (
    <>
      <div className="mdc-layout-grid layout-external-container">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell--span-8">
            {apiData.BackgroundmediaType !== "video"
            ? (
              <div className="topImage-container">
                {apiData.enableFullScreen && apiData.thumbnailImage != null ? (
                  <img
                    alt="top image"
                    onClick={() => {
                      imagePreviewer(apiData.thumbnailImage);
                    }}
                    src={apiData.thumbnailImage || holderImage}
                  />
                ) : (
                  <img
                    alt="top image"
                    src={apiData.thumbnailImage || holderImage}
                  />
                )}
              </div>
            ) : (
              <div className="topVideo-container">
                <VideoUI
                  data={apiData}
                  enableAutoPlay={
                    apiData.enableAutoPlay1
                  }
                  enableFullScreen={
                    apiData.enableFullScreen
                  }
                  url={apiData.videoURL || apiData.videoURL}
                  index={1}
                />
              </div>
            )}
            <div className="info-container">
              <div className="mdc-card">
                <p className="title">{apiData.title || "Title"}</p>
                <p className="subtitle">
                  {apiData.subtitle || "Subtitle"}
                </p>
                <p className="bodyContent">
                  {apiData.bodyContent || "Body Content"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout13;
