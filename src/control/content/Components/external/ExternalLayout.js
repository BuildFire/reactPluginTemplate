import React, { useEffect, useState } from "react";
import useForm from "../../hooks/form";
import VideoUi from "../../shared/VideoUi";
import ThumbnailUI from "../../shared/ThumbnailUI";
import "./style.less";
import useMessages from "../../hooks/messages";
import SortablelistComponent from "./sortablelist";
import dummyObjects from "../../../assets/dummyData";

function ExternalLayout(props) {
  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [uploadType, setUploadType] = useState("image");
  const [videoURL, setVideoURL] = useState("");
  const [layoutsAdded, setLayoutsAdded] = useState(dummyObjects);

  const [layoutsTypes, setLayoutsTypes] = useState(["Details", "Recap & Portfolio", "Content Pages"]);
  const [selectedTab, setSelectedTab] = useState("Details");

  const [sortType, setSortType] = useState("manually");

  const { handleSendMessage } = useMessages()
  useEffect(() => {
    handelImage({ thumbnailImage, videoURL });
  }, [thumbnailImage, videoURL]);

  useEffect(() => {
    // desendDate"asenedDate"asenedTitle"desendTitle
    let newItems = layoutsAdded;
    setLayoutsAdded([]);
    console.log(sortType);
    if (sortType == "asenedDate") {
      newItems.sort(function (a, b) {
        if (a.date > b.date) {
          return 1
        } else {
          return -1
        }
      })
    } else if (sortType == "desendDate") {
      newItems.sort(function (a, b) {
        if (a.date > b.date) {
          return -1
        } else {
          return 1
        }
      })
    } else if (sortType == "asenedTitle") {
      newItems.sort(function (a, b) {
        if (a.title.toUpperCase() > b.title.toUpperCase()) {
          return 1
        } else {
          return -1
        }
      })
    } else if (sortType == "desendTitle") {
      newItems.sort(function (a, b) {
        if (a.title.toUpperCase() > b.title.toUpperCase()) {
          return -1
        } else {
          return 1
        }
      })
    }
    setLayoutsAdded(newItems);
  }, [sortType])
  // submit form function
  function submitForm(values) {
    console.log("forms values ->", values);
  }
  handleSendMessage({ selectedLayout: "external1" });

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
    setSelectedTab(e.target.textContent);
  }

  function setSortTypeFun() {
    let newSort = document.getElementById("sortType-Selector").value;
    setSortType(newSort);
  }

  return (
    <>
      <div className="layout-13-Container slide-in">
        <div className="row">
          <div className="col-md-3">
            <button onClick={changeLayOut} type="button" className="btn left-btns selected-left-btn">{layoutsTypes[0]}</button>
            <button onClick={changeLayOut} type="button" className="btn left-btns">{layoutsTypes[1]}</button>
            <button onClick={changeLayOut} type="button" className="btn left-btns">{layoutsTypes[2]}</button>
          </div>
          <div className="col-md-9">
            {
              selectedTab == layoutsTypes[0] &&
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
                        <select onChange={() => setSortTypeFun()} id="sortType-Selector">
                          <option value="manually">Manually</option>
                          <option value="asenedTitle">Title A - Z</option>
                          <option value="desendTitle">Title Z - A</option>
                          <option value="asenedDate">Newest Entry</option>
                          <option value="desendDate">Latest Entry</option>
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
                        <SortablelistComponent sortType={sortType} items={layoutsAdded} setItems={setLayoutsAdded} />
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
            }
          </div>
        </div>
      </div>

    </>
  );
}

export default ExternalLayout;
