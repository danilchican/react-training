import React from "react";
import "./App.css";
import CQ5Component from "./components/CQ5Component/CQ5Component";

function App() {
  return (
    <React.Fragment>
      <CQ5Component cmsContext={{ id: "CQ5Global_header", journey: "ADDLINE" }} />
      <CQ5Component cmsContext={{ id: "CQ5LoginBannerComponent" }} />
    </React.Fragment>
  );
}

export default App;
