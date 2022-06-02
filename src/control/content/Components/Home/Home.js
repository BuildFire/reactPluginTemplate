import React, { useState, useEffect } from "react";
import "./style.less";
import LayoutHeader from "../LayoutHeader/LayoutHeader";
import Layout13 from "../external/Layout13";
import dummyObjects from "../../../assets/dummyData";
import SortablelistComponent from "../external/sortablelist";
import useMessages from "../../hooks/messages";
function Home(props) {
  const [activeComponent, setActiveComponent] = useState("home");
  const [addedData, setAddedData] = useState(dummyObjects)
  const [sortType, setSortType] = useState("manually");
  const { handleSendMessage } = useMessages()
  
  useEffect(() => {
    // props.setShowHome()
  }, [props]);

  useEffect(() => {
    // desendDate"asenedDate"asenedTitle"desendTitle
    let newItems = addedData;
    setAddedData([]);
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
    setAddedData(newItems);
  }, [sortType])
  
  function setSortTypeFun() {
    let newSort = document.getElementById("sortType-Selector").value;
    setSortType(newSort);
  }
  handleSendMessage({ selectedLayout: "external1" });
  return (
    <>
      {activeComponent === "home" ? (
        <>
          <div className="home-container container">
            <div className="row">
              <p className="info-note">
                This is list of all your content. Sort it the way you would like
                it to be sorted in the app feed.
              </p>
            </div>
            <div className="row">
                <div className="input-group margin-bottom-twenty">
                  <input
                    type="text"
                    placeholder="Search"
                    className="form-control"
                    id="searchInput"
                  />
                  <span className="input-group-btn">
                    <button className="btn btn-info stretch" id="searchButton">
                      <span className="icon icon-magnifier"></span>
                    </button>
                  </span>
                </div>
            </div>
            <div className="row">
              <div className="col-md-3 padding-zero">
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
              <div className="col-md-3 padding-zero">
                <button className="btn btn-success addHome-Content" onClick={() => setActiveComponent("external1")}>
                  add content <span className="icon icon-chevron-down"></span>
                </button>
              </div>
            </div>
            <div className="row">
              {
                addedData.length == 0 ?
                  (
                    <div className="empty-state-lg border-radius-four border-grey">
                      <p>You haven’t added anything yet</p>
                    </div>
                  ) : (
                    <div className="layouts-Added-List">
                      <SortablelistComponent listFor={"Home"} sortType={sortType} items={addedData} setItems={setAddedData} />
                    </div>
                  )
              }

            </div>
           
          </div>
        </>
      ) : activeComponent === "header" ? (
        <LayoutHeader setActiveComponent={setActiveComponent} />
      ) : (
        <Layout13 setActiveComponent={setActiveComponent} />
      )}
    </>
  );
}

export default Home;
