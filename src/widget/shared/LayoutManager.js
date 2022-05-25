import React, { useEffect, useState } from "react";
import "./style.less";
import Layout1 from "../components/Layout1/Index";
import Layout11 from "../components/Layout11/Index";
import Layout12 from "../components/Layout12/Index";


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
        
        {selectedLayout === 11 && <Layout11 data={data}/>}
        {selectedLayout === 12 && <Layout12 data={data}/>}
      </div>
    </>
  );
}

export default LayoutManager;
