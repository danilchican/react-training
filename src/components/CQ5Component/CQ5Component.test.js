jest.mock("../../api/CMSService");

import React from "react";
import { render, configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CQ5Component from "./CQ5Component";
import getCMSComponent from "../../api/CMSService";

configure({ adapter: new Adapter() });

describe("CQ5 Component works properly", () => {
  let props = {
    cmsContext: { id: "CQ5Global_header", journey: "ADDLINE" },
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render nothing when it's fetching data", () => {
    const wrapper = render(<CQ5Component {...props} />);
    expect(wrapper.html()).toBe("");
  });

  it("should render html received by a call to BFF", async () => {
    getCMSComponent.mockReturnValue(
      Promise.resolve("<h1>BFF response html</h1>")
    );

    let wrapper = mount(<CQ5Component {...props} />);
    wrapper.update();

    return Promise.resolve(wrapper).then(() => {
      expect(getCMSComponent).toHaveBeenCalledTimes(1);
      expect(wrapper.html()).toBe(
        '<div id="CQ5Global_header"><h1>BFF response html</h1></div>'
      );
    });
  });
});
