import React, { useState, useEffect } from "react";
import "./style.less";
import LayoutHeader from "../LayoutHeader/LayoutHeader";
import Layout13 from "../external/Layout13";

function Home(props) {

  const [activeComponent, setActiveComponent] = useState("home");

  useEffect(() => {
    // props.setShowHome()
  }, [props]);
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
              <div className="col-md-12">
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
            </div>
            <div className="row">
              <div className="col-md-3">
                <button className="btn btn-light">
                  Latest First <span className="icon icon-chevron-down"></span>
                </button>
              </div>
              <div className="col-md-6"></div>
              <div className="col-md-3">
                <button className="btn btn-success" onClick={()=>setActiveComponent("external1")}>
                  add content <span className="icon icon-chevron-down"></span>
                </button>
              </div>
            </div>
            <div className="row">
              <div className="empty-state-lg border-radius-four border-grey">
                <p>You haven’t added anything yet</p>
              </div>
            </div>
          </div>
        </>
      ) : activeComponent === "header" ? (
        <LayoutHeader setActiveComponent={setActiveComponent}/>
      ) : (
        <Layout13 setActiveComponent={setActiveComponent}/>
      )}
    </>
  );
}

export default Home;
