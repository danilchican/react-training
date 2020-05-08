import React from "react";
import { render, configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CQ5Component from "./CQ5Component";
import { waitForElement } from "@testing-library/react";
import fetchMock from "jest-fetch-mock"

configure({ adapter: new Adapter() });

describe("CQ5 Component works properly", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("should render nothing when it's fetching data", () => {
    const props = {
      cmsContext: { id: "CQ5Global_header", journey: "ADDLINE" },
    };

    const wrapper = render(<CQ5Component {...props} />);

    expect(wrapper.html()).toBe(null);
  });

  it("should render html after call to BFF", async () => {
    fetchMock.mockResponseOnce("<h1>test response</h1>");

    const props = {
      cmsContext: { id: "CQ5Global_header", journey: "ADDLINE" },
    };
    const wrapper = shallow(<CQ5Component {...props} />);
   
    await expect(fetchMock.mock.calls.length).toEqual(1)

    // expect(axios.get).toHaveBeenCalledWith(
    // "/stubs/CQ5Global_header.html?journey=ADDLINE"
    // );
  });
});
