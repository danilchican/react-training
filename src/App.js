import React from "react";
import "./App.css";
import Wrapper from "./hoc/Wrapper/Wrapper";
import CQ5Component from "./components/CQ5Component/CQ5Component";

function App() {
  return (
    <Wrapper>
      <CQ5Component id="CQ5Global_header" />
      <CQ5Component id="CQ5LoginBannerComponent" />
    </Wrapper>
  );
}

export default App;
