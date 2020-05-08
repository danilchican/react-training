/* eslint-disable import/first */
jest.mock("isomorphic-fetch");
import fetch from "isomorphic-fetch";
import getCMSContent from "./CMSService";

describe("CMS service should work properly", () => {
  beforeEach(() => {
    fetch.mockReturnValue(Promise.resolve(new Response('Hi')));
  });

  it("should render nothing when it's fetching data", async () => {
    let response = null;
    await getCMSContent({id: "testComponentId", journey: "TEST_JOURNEY"});
    expect(fetch).toHaveBeenCalledTimes(1); 
  });
});
