import getCMSContent from "./CMSService";
import fetchMock, { enableFetchMocks } from "jest-fetch-mock";

enableFetchMocks();

describe("CMS service should work properly", () => {
  beforeEach(() => {
    fetchMock.doMock();
  });

  it("should render nothing when it's fetching data", async () => {
    fetchMock.mockOnce("response");
    let response = null;

    await getCMSContent("testComponentId", "TEST_JOURNEY", (content) => {
      console.log(2222);
      console.log(content);
      response = content;
    });

    // expect(fetchMock).resolves.toBe("<h1>test response</h1>");
    // expect(fetchMock.mock.calls.length).toEqual(1)
  });
});
