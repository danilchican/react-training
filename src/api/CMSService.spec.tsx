jest.mock("isomorphic-fetch");

import getCMSContent from "./CMSService";
import fetch from "isomorphic-fetch";
import CMSContext from "./context/CMSContext";

describe("CMS service should work properly", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should call BFF with proper params and return response", async () => {
    (fetch as jest.Mock).mockReturnValue(
      Promise.resolve(new Response("<h1>BFF response html</h1>"))
    );

    const cmsContext = new CMSContext("CQ5Global_header", "TEST_JOURNEY");
    let response = null;

    await getCMSContent(cmsContext).then((content) => (response = content));

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      "http://localhost:18080/content/ee-shop/consumer/personalization/l0/product/watch/_jcr_content/slot-one-par.html?journey=TEST_JOURNEY"
    );
    expect(response).toBe("<h1>BFF response html</h1>");
  });

  it("should call BFF with default journey when such passed param is null", async () => {
    (fetch as jest.Mock).mockReturnValue(
      Promise.resolve(new Response("<h1>BFF another response html</h1>"))
    );

    const cmsContext = new CMSContext("CQ5LoginBannerComponent");
    let response = null;

    await getCMSContent(cmsContext).then((content) => (response = content));

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      "http://localhost:18080/content/ee-shop/consumer/personalization/l0/product/watch/_jcr_content/slot-two-par.html?journey=ACQUISITION"
    );
    expect(response).toBe("<h1>BFF another response html</h1>");
  });
});
