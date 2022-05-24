import React, { useEffect, useState } from "react";
import "./style.less";
import Layout1 from "../components/Layout1/Index";
function LayoutManager() {
  const [data, setData] = useState({});
  const [selectedLayout, setSelectedLayout] = useState(5);
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
  }, []);

  return (
    <>
      <div>
        {selectedLayout === 5 && <Layout1 data={data}/>}
        {/* {selectedLayout === 2 && <Layout2 />}
        {selectedLayout === 3 && <Layout3 />}
        {selectedLayout === 4 && <Layout4 />}
        {selectedLayout === 5 && <Layout5 />}
        {selectedLayout === 6 && <Layout6 />}
        {selectedLayout === 7 && <Layout7 />}
        {selectedLayout === 8 && <Layout8 />}
        {selectedLayout === 9 && <Layout9 />}
        {selectedLayout === 10 && <Layout10 />}
        {selectedLayout === 11 && <Layout11 />}
        {selectedLayout === 12 && <Layout12 />} */}
      </div>
    </>
  );
}

export default LayoutManager;
