import React, { useEffect, useState } from "react";
import useForm from "../../hooks/form";
import VideoUi from "../../shared/VideoUi";
import ThumbnailUI from "../../shared/ThumbnailUI";
import "./style.less";

function Layout13(props) {
  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [uploadType, setUploadType] = useState("image");
  const [videoURL, setVideoURL] = useState("");
  const [layoutsAdded, setLayoutsAdded] = useState([]);


  useEffect(() => {
    handelImage({ thumbnailImage, videoURL });
  }, [thumbnailImage, videoURL]);
  // submit form function
  function submitForm(values) {
    console.log("forms values ->", values);
  }

  const { handleChange, handleSubmit, handelImage } = useForm(submitForm);
  function handleChangeInputType(e) {
    setUploadType(e.target.value);
    handleChange(e);
  }
  function changeLayOut(e) {
    let oldSelect = document.getElementsByClassName("selected-left-btn");
    for (let i = 0; i < oldSelect.length; i++) {
      oldSelect[i].className = "btn left-btns";
    }
    e.target.classList.add("selected-left-btn");
  }

  return (
    <>
      <div className="layout-13-Container ">
        <div className="row">
          <div className="col-md-3">
            <button onClick={changeLayOut} type="button" class="btn left-btns selected-left-btn">Content Pages</button>
            <button onClick={changeLayOut} type="button" class="btn left-btns">Recap & Portfolio</button>
            <button onClick={changeLayOut} type="button" class="btn left-btns">Details</button>
          </div>
          <div className="col-md-9">
            <form onSubmit={handleSubmit}>
              <h1>Title Card</h1>
              <p className="info-note">This is the title card of this Incentive. It will be shown in the main feed.</p>
              <div className="layOutContainer">
                <div className="row">
                  <div className="col-md-3">
                    <label className="lable">Background Media Type</label>
                  </div>
                  <div className="col-md-9">
                    <input
                      onChange={handleChangeInputType}
                      className="checkBox"
                      type="radio"
                      name="BackgroundmediaType"
                      value="image"
                      defaultChecked
                    />
                    <label className="lable">Image</label>
                    <input
                      onChange={handleChangeInputType}
                      className="checkBox"
                      type="radio"
                      name="BackgroundmediaType"
                      value="video"
                    />
                    <label className="lable">Video</label>
                  </div>
                </div>

                {uploadType == "image" ? (
                  <>
                    <ThumbnailUI
                      index={1}
                      recommended={"Recommended: 675 x 1200"}
                      thumbnailImage={thumbnailImage}
                      setThumbnailImage={setThumbnailImage}
                      imageTag={"Background Image"}
                      classList={"vertical-rectangle thumbnail"}
                    />
                  </>
                ) : (
                  <>
                    <VideoUi
                      setVideoURL={setVideoURL}
                      videoURL={videoURL}
                      index={1}
                      handleChange={handleChange}
                    />
                  </>
                )}

                <div className="row">
                  <div className="col-md-3">
                    <label className="lable">Enable Full Screen</label>
                  </div>
                  <div className="col-md-9">
                    <input
                      onChange={handleChange}
                      className="checkBox"
                      type="checkBox"
                      name="enableFullScreen"
                      id="enableFullScreen"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label className="lable">Title</label>
                  </div>
                  <div className="col-md-9">
                    <input
                      maxLength={80}
                      onChange={handleChange}
                      className="form-control fullWidth"
                      type="text"
                      name="title"
                      placeholder="Title"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label className="lable">Subtitle</label>
                  </div>
                  <div className="col-md-9">
                    <input
                      className="form-control fullWidth"
                      type="input"
                      name="subtitle"
                      placeholder="Subtitle"
                      maxLength={100}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row margin-bottom">
                  <div className="col-md-3">
                    <label className="lable">Summary</label>
                  </div>
                  <div className="col-md-9">
                    <textarea
                      maxLength={350}
                      onChange={handleChange}
                      name="bodyContent"
                      className="form-control bodyContent"
                      placeholder="Body Content"
                    ></textarea>
                  </div>
                </div>
              </div>
              <h1>Internal Pages</h1>
              <div className="internalPageContainer ">
                <p className="info-note">You can add internal pages for this incentive here. </p>

                <div className="row">
                  <div className="col-md-3 ">
                    <div className="border-radius-four border-grey sortContainer ">
                      <span>Sort:</span>
                      <select name="cars" id="cars">
                        <option value="Manual">Manual 0</option>
                        <option value="Manual">Manual 1</option>
                        <option value="Manual">Manual 2</option>
                        <option value="Manual">Manual 3</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6"></div>
                  <div className="col-md-3">
                    <button type="button" className="btn btn-success addLayOut-Btn" onClick={() => props.setActiveComponent("header")} >
                      + Add Page
                    </button>
                  </div>
                </div>
                {
                  layoutsAdded.length == 0 ? (
                    <div className="empty-state-lg border-radius-four border-grey">
                      <p>You haven’t added anything yet</p>
                    </div>
                  ) : (
                    <div className="layouts-Added-List">
                      +++++++
                    </div>
                  )
                }

              </div>
              <div className="bottom-actions row">
                <button type="button" className="btn btn-default" id="layoutBackBtn" onClick={() => props.setActiveComponent("home")}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-success" id="layoutSaveBtn">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  );
}

export default Layout13;
