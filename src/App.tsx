import React from "react";
import "./App.css";
import CQ5Component from "./components/CQ5Component/CQ5Component";
import { CmsContext, CategoryCmsContext } from "./api/context/CmsContext";

function App() {
  return (
    <React.Fragment>
      <CQ5Component cmsContext={new CategoryCmsContext("CQ5Global_header", "bundle-type")} />
      <CQ5Component cmsContext={new CmsContext("CQ5LoginBannerComponent", "ADDLINE")} />
    </React.Fragment>
  );
}

export default App;

// CQ5GalleryComponent
// CQ5PdpComponent
// CQ5CheckoutComponent