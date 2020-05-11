import React from "react";
import "./App.css";
import CQ5Component from "./components/CQ5Component/CQ5Component";
import CMSContext from "./api/context/CMSContext";

function App() {
  return (
    <React.Fragment>
      <CQ5Component
        cmsContext={new CMSContext("CQ5Global_header", "ADDLINE")}
      />
      <CQ5Component cmsContext={new CMSContext("CQ5LoginBannerComponent")} />
    </React.Fragment>
  );
}

export default App;
