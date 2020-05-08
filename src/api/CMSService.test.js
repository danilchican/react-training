jest.mock("isomorphic-fetch");

import getCMSContent from "./CMSService";
import fetch from "isomorphic-fetch";

describe("CMS service should work properly", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should call BFF with proper params and return response", async () => {
    fetch.mockReturnValue(
      Promise.resolve(new Response("<h1>BFF response html</h1>"))
    );

    let response = null;

    await getCMSContent({
      id: "testComponentId",
      journey: "TEST_JOURNEY",
    }).then((content) => (response = content));

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      "http://localhost:3000/stubs/testComponentId.html?journey=TEST_JOURNEY"
    );
    expect(response).toBe("<h1>BFF response html</h1>");
  });

  it("should call BFF with default journey when such passed param is null", async () => {
    fetch.mockReturnValue(
      Promise.resolve(new Response("<h1>BFF another response html</h1>"))
    );

    let response = null;

    await getCMSContent({ id: "testComponentId" }).then(
      (content) => (response = content)
    );

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      "http://localhost:3000/stubs/testComponentId.html?journey=ACQUISITION"
    );
    expect(response).toBe("<h1>BFF another response html</h1>");
  });
});
