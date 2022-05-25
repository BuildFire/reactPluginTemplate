import React, { useEffect, useState } from "react";
import "./style.less";
import Layout7 from "../components/Layout7/Index";
import Layout8 from "../components/Layout8/Index";
import Layout9 from "../components/Layout9/Index";
import Layout10 from "../components/Layout10/Index";
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
        {selectedLayout === 7 && <Layout7 data={data} />}
        {selectedLayout === 8 && <Layout8 data={data} />}
        {selectedLayout === 9 && <Layout9 data={data} />}
        {selectedLayout === 10 && <Layout10 data={data} />}
        {selectedLayout === 11 && <Layout11 data={data} />}
        {selectedLayout === 12 && <Layout12 data={data} />}
      </div>
    </>
  );
}

export default LayoutManager;
