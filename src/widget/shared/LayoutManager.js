import React, { useEffect, useState } from "react";
import "./style.less";
import Layout1 from "../components/Layout1/Index";
import Layout2 from "../components/Layout2/Index";
import Layout3 from "../components/Layout3/Index";
import Layout4 from "../components/Layout4/Index";
import Layout5 from "../components/Layout5/Index";
import Layout6 from "../components/Layout6/Index";
import Layout7 from "../components/Layout7/Index";
import Layout8 from "../components/Layout8/Index";
import Layout9 from "../components/Layout9/Index";
import Layout10 from "../components/Layout10/Index";
import Layout11 from "../components/Layout11/Index";
import Layout12 from "../components/Layout12/Index";
import Ribbon from "./Ui_components/Ribbon";
import ProgressBar from "./Ui_components/ProgressBar";

function LayoutManager() {
  const [data, setData] = useState({});
  const [selectedLayout, setSelectedLayout] = useState(1);
  const [themeState, setThemeState] = useState({});
  const [testTheme, setTestTheme] = useState({
    headerText: "#FFFFFF",
    bodyText: "#FFFFFF",
    backgroundColor: "#000000",
    titleBar: "rgb(0 0 0 / 90%)",
  });

  useEffect(() => {
    buildfire.messaging.onReceivedMessage = (message) => {
      if (message.selectedLayout) {
        console.log("Message received <layout>", message.selectedLayout);
        setSelectedLayout(message.selectedLayout);
      } else {
        console.log("Message received <Data>", message);
        setData(message);
      }
    };
    setAppThemeFunction();
    getSelectedLayOut();
  }, []);

  function getSelectedLayOut() {
    buildfire.appData.get("selectedLayOut", (err, result) => {
      if (err) return console.error("Error while retrieving your data", err);
      console.log("Main record", result.data);
      if (result.data.layOut) {
        setSelectedLayout(result.data.layOut + 1);
      }
    });
  }

  function showImage(image) {
    buildfire.imagePreviewer.show(
      {
        images: [image],
      },
      () => {
        console.log("Image previewer closed");
      }
    );
  }

  function setAppThemeFunction() {
    buildfire.appearance.getAppTheme((err, appTheme) => {
      if (err) return console.error(err);
      console.log("appTheme =>", appTheme);
      setThemeState(appTheme);

      var newStyle = document.createElement("style");
      newStyle.appendChild(
        document.createTextNode(
          "\
      @font-face {\
          font-family: " +
          appTheme.fontName +
          ";\
          src: url('" +
          appTheme.fontUrl +
          "') format('yourFontFormat');\
      }\
      "
        )
      );

      document.head.appendChild(newStyle);
    });
  }

  function setTextStyle() {
    // set body background -->
    // document.body.style.background = themeState.colors.backgroundColor;
    document.body.style.background = testTheme.backgroundColor;
    // Titles ->
    let titles = document.querySelectorAll(".title");
    titles.forEach((title) => {
      // title.style.color = themeState.colors.headerText;
      title.style.fontName = themeState.fontName;
      title.style.color = testTheme.headerText;
    });
    // Sub Title ->
    let subTitles = document.querySelectorAll(".subtitle");
    subTitles.forEach((subTitle) => {
      // subTitle.style.color = themeState.colors.headerText;
      subTitle.style.color = testTheme.headerText;
      subTitle.style.fontName = themeState.fontName;
    });
    // Body Contents ->
    let bodyContents = document.querySelectorAll(".bodyContent");
    bodyContents.forEach((body) => {
      // body.style.color = themeState.colors.bodyText;
      body.style.color = testTheme.bodyText;
      body.style.fontName = themeState.fontName;
    });
    // Text Background
    let textBack = document.querySelectorAll(".mdc-card");
    textBack.forEach((back) => {
      // back.style.backgroundColor = themeState.colors.titleBar;
      back.style.backgroundColor = testTheme.titleBar;
    });
  }

  return (
    <>
      <div className="test">
        {selectedLayout === 1 && (
          <Layout1
            themeState={themeState}
            setTextStyle={setTextStyle}
            data={data}
          />
        )}
        {selectedLayout === 2 && (
          <Layout2
            themeState={themeState}
            setTextStyle={setTextStyle}
            data={data}
          />
        )}
        {selectedLayout === 3 && (
          <Layout3
            themeState={themeState}
            setTextStyle={setTextStyle}
            data={data}
          />
        )}
        {selectedLayout === 4 && (
          <Layout4
            themeState={themeState}
            setTextStyle={setTextStyle}
            data={data}
          />
        )}
        {selectedLayout === 5 && (
          <Layout5
            themeState={themeState}
            setTextStyle={setTextStyle}
            data={data}
          />
        )}
        {selectedLayout === 6 && (
          <Layout6
            themeState={themeState}
            setTextStyle={setTextStyle}
            data={data}
          />
        )}
        {selectedLayout === 7 && (
          <Layout7
            themeState={themeState}
            setTextStyle={setTextStyle}
            data={data}
          />
        )}
        {selectedLayout === 8 && (
          <Layout8
            themeState={themeState}
            setTextStyle={setTextStyle}
            data={data}
          />
        )}
        {selectedLayout === 9 && (
          <Layout9
            themeState={themeState}
            setTextStyle={setTextStyle}
            data={data}
          />
        )}
        {selectedLayout === 10 && (
          <Layout10
            themeState={themeState}
            setTextStyle={setTextStyle}
            data={data}
          />
        )}
        {selectedLayout === 11 && (
          <Layout11
            themeState={themeState}
            setTextStyle={setTextStyle}
            data={data}
          />
        )}
        {selectedLayout === 12 && (
          <Layout12
            themeState={themeState}
            setTextStyle={setTextStyle}
            data={data}
          />
        )}
      </div>
      <div className="progressBar-container">
        <div className="sub-container">
          <Ribbon />
          <ProgressBar />
        </div>
        <div className="navigation-container">
        </div>
      </div>


    </>
  );
}

export default LayoutManager;
