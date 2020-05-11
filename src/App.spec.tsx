import React from "react";
import App from "./App";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CQ5Component from "./components/CQ5Component/CQ5Component";
import CMSContext from "./api/context/CMSContext";

configure({ adapter: new Adapter() });

it("should render two <CQ5Component /> items", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(CQ5Component)).toHaveLength(2);
});

it("should have Global Header <CQ5Component />", () => {
  const wrapper = shallow(<App />);
  const expectedProps: CMSContext = { componentId: "CQ5Global_header", journey: "ADDLINE" };

  expect(wrapper.find(CQ5Component).first().props().cmsContext).toMatchObject(
    expectedProps
  );
});

it("should have Login Banner Component <CQ5Component />", () => {
  const wrapper = shallow(<App />);
  const expectedProps = { componentId: "CQ5LoginBannerComponent" };

  expect(wrapper.find(CQ5Component).last().props().cmsContext).toMatchObject(
    expectedProps
  );
});
