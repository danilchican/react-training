jest.mock("isomorphic-fetch");

import getCMSContent from "./CMSService";
import fetch from "isomorphic-fetch";

describe("CMS service should work properly", () => {
  it("should call custom callback passed into func and return data from BFF", async () => {
    fetch.mockReturnValue(
      Promise.resolve(new Response("<h1>BFF response html</h1>"))
    );

    let response = null;

    await getCMSContent("testComponentId", "TEST_JOURNEY", (content) => {
      response = content;
    });

    expect(response).toBe("<h1>BFF response html</h1>");
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      "http://localhost:3000/stubs/testComponentId.html?journey=TEST_JOURNEY"
    );
  });
});
