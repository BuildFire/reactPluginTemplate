import React, { useEffect, useState } from "react";
import "./style.less";
import Layout1 from "../components/Layout1/Index";
import Layout2 from "../components/Layout2/Index";
import Layout3 from "../components/Layout3/Index";
import Layout4 from "../components/Layout4/Index";
import Layout5 from "../components/Layout5/Index";
import Layout6 from "../components/Layout6/Index";
function LayoutManager() {
  const [data, setData] = useState({});
  const [selectedLayout, setSelectedLayout] = useState(4);
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
        {selectedLayout === 1 && <Layout1 data={data}/>}
        {selectedLayout === 2 && <Layout2 data={data} />}
        {selectedLayout === 3 && <Layout3 data={data}/>}
        {selectedLayout === 4 && <Layout4 data={data}/>}
        {selectedLayout === 5 && <Layout5 data={data}/>}
        {selectedLayout === 6 && <Layout6 data={data}/>}
        {/*{selectedLayout === 7 && <Layout7 />}
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
