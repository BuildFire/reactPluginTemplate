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
import Layout13 from "../components/Layout13/Index";
import Layout14 from "../components/Layout14/Index";
import ExternalLayout from "../components/external/ExternalLayout";
function LayoutManager() {
  const [data, setData] = useState({});
  const [selectedLayout, setSelectedLayout] = useState("external1");
  const [themeState, setThemeState] = useState({});
  const [testTheme, setTestTheme] = useState({
    headerText: "#FFFFFF",
    bodyText: "#FFFFFF",
    backgroundColor: "#000000",
    titleBar: "rgb(0 0 0 / 90%)",
  });
  const [testData, setTestData] = useState({})
  useEffect(() => {
    buildfire.messaging.onReceivedMessage = (message) => {
      if (message.selectedLayout) {
        console.log("Message received <layout>", message);
        setSelectedLayout(message.selectedLayout);
        setTestData(message)
      } else {
        console.log("Message received <Data>", message);
        setData(message);
      }
    };
    // setAppThemeFunction();
    // getSelectedLayOut();
  }, []);

  // function getSelectedLayOut() {
  //   buildfire.appData.get("selectedLayOut", (err, result) => {
  //     if (err) return console.error("Error while retrieving your data", err);
  //     console.log("Main record", result.data);
  //     if (result.data.layOut) {
  //       setSelectedLayout(result.data.layOut + 1);
  //     }
  //   });
  // }
  // function setAppThemeFunction() {
  //   buildfire.appearance.getAppTheme((err, appTheme) => {
  //     if (err) return console.error(err);
  //     console.log("appTheme =>", appTheme);
  //     setThemeState(appTheme);

  //     var newStyle = document.createElement("style");
  //     newStyle.appendChild(
  //       document.createTextNode(
  //         "\
  //     @font-face {\
  //         font-family: " +
  //           appTheme.fontName +
  //           ";\
  //         src: url('" +
  //           appTheme.fontUrl +
  //           "') format('yourFontFormat');\
  //     }\
  //     "
  //       )
  //     );

  //     document.head.appendChild(newStyle);
  //   });
  // }

 
  return (
    <>
      <div className="widget-layouts-container">
        {selectedLayout === 1 && (
          <Layout1 themeState={themeState} data={data} />
        )}
        {selectedLayout === 2 && (
          <Layout2 themeState={themeState} data={data} />
        )}
        {selectedLayout === 3 && (
          <Layout3 themeState={themeState} data={data} />
        )}
        {selectedLayout === 4 && (
          <Layout4 themeState={themeState} data={data} />
        )}
        {selectedLayout === 5 && (
          <Layout5 themeState={themeState} data={data} />
        )}
        {selectedLayout === 6 && (
          <Layout6 themeState={themeState} data={data} />
        )}
        {selectedLayout === 7 && (
          <Layout7 themeState={themeState} data={data} />
        )}
        {selectedLayout === 8 && (
          <Layout8 themeState={themeState} data={data} />
        )}
        {selectedLayout === 9 && (
          <Layout9 themeState={themeState} data={data} />
        )}
        {selectedLayout === 10 && (
          <Layout10 themeState={themeState} data={data} />
        )}
        {selectedLayout === 11 && (
          <Layout11 themeState={themeState} data={data} />
        )}
        {selectedLayout === 12 && (
          <Layout12 themeState={themeState} data={data} />
        )}
        {selectedLayout === 13 && (
          <Layout13 themeState={themeState} data={data} />
        )}
        {selectedLayout === 14 && (
          <Layout14 themeState={themeState} data={data} />
        )}
        {selectedLayout === "external1" && (
          <ExternalLayout themeState={themeState} data={data} testData={testData} />
        )}
      </div>
      {/* <div className="navigation-container"></div> */}
    </>
  );
}

export default LayoutManager;
