jest.mock("isomorphic-fetch");

import React from "react";
import { render, configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CQ5Component from "./CQ5Component";

configure({ adapter: new Adapter() });

describe("CQ5 Component works properly", () => {
  let props = {
    cmsContext: { id: "CQ5Global_header", journey: "ADDLINE" },
  };

  beforeEach(() => {
    jest.spyOn(React, "useEffect").mockImplementation((f) => f());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render nothing when it's fetching data", () => {
    const wrapper = render(<CQ5Component {...props} />);
    expect(wrapper.html()).toBe('');
  });
});
