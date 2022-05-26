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

 
function LayoutManager() {
  const [data, setData] = useState({});
  const [selectedLayout, setSelectedLayout] = useState(1);
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
    getSelectedLayOut();
  }, []);

  function getSelectedLayOut() {
    
    buildfire.appData.get("selectedLayOut", (err, result) => {
      if (err) return console.error("Error while retrieving your data", err);
      console.log("Main record", result.data);
      if (result.data.layOut) 
      {setSelectedLayout(result.data.layOut+1);
     }
    });
  }
  return (
    <>
      <div>
      {selectedLayout === 1 && <Layout1 data={data}/>}
        {selectedLayout === 2 && <Layout2 data={data} />}
        {selectedLayout === 3 && <Layout3 data={data}/>}
        {selectedLayout === 4 && <Layout4 data={data}/>}
        {selectedLayout === 5 && <Layout5 data={data}/>}
        {selectedLayout === 6 && <Layout6 data={data}/>}
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
