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

  beforeEach(() => {
    jest.spyOn(React, "useEffect").mockImplementation(React.useLayoutEffect);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render nothing when it's fetching data", () => {
    const wrapper = render(<CQ5Component {...props} />);
    expect(wrapper.html()).toBe("");
  });

  it("should render html received by a call to BFF", () => {
    getCMSComponent.mockReturnValue(
      Promise.resolve(new Response("<h1>BFF response html</h1>"))
    );

    const wrapper = mount(<CQ5Component {...props} />);
    expect(getCMSComponent).toHaveBeenCalledTimes(1);
    expect(wrapper.props().content).toBe("<h1>BFF response html</h1>");
  });
});
