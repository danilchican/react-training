import getCMSContent from "./CMSService";

fetch = jest.fn(() => Promise.resolve());
// fetch = jest.fn().mockImplementationOnce(() => {
//   return new Promise((resolve, reject) => {
//     resolve({
//       ok: true,
//       status,
//       text: () => {
//         return 'response';
//       },
//     });
//   });
// });

describe("CMS service should work properly", () => {
  it("should render nothing when it's fetching data", async () => {
    // fetchMock.once("reeess");
    let response = null;

    await getCMSContent("testComponentId", "TEST_JOURNEY", (content) => {
      console.log(2222);
      console.log(content);
      response = content;
    });

    expect(response).toEq;
    // expect(fetchMock).resolves.toBe("<h1>test response</h1>");
    // expect(fetchMock.mock.calls.length).toEqual(1)
  });
});
