import React from "react";
import { render, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import axios from "axios";
import CQ5Component from "./CQ5Component";
import { waitForElement } from "@testing-library/react";

configure({ adapter: new Adapter() });

afterEach(() => {
  axios.get.mockClear();
});

// TODO investigate approach about using 'axios-mock-adapter' lib
const mockCall = () => {
  axios.get.mockResolvedValueOnce({
    data: "<h1>Content from BFF</h1>",
  });
};

it("should render nothing when it's fetching data", () => {
  mockCall();

  const props = { cmsContext: { id: "CQ5Global_header", journey: "ADDLINE" } };
  const wrapper = render(<CQ5Component {...props} />);

  expect(wrapper.html()).toBe(null);
});

it("should render html after call to BFF", async () => {
  mockCall();

  const props = { cmsContext: { id: "CQ5Global_header", journey: "ADDLINE" } };
  const wrapper = render(<CQ5Component {...props} />);

  expect(axios.get).toHaveBeenCalledTimes(1);
  expect(axios.get).toHaveBeenCalledWith(
    "/stubs/CQ5Global_header.html?journey=ADDLINE"
  );
});
