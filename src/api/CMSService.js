import fetch from "isomorphic-fetch";

const DEFAULT_JOURNEY = "ACQUISITION";

const getCMSComponent = async ({ id, journey = DEFAULT_JOURNEY }) => {
  try {
    const response = await fetch(
      `http://localhost:3000/stubs/${id}.html?journey=${journey}`
    );
    const content = await response.text();
    return content;
  } catch (e) {
    console.error(e);
  }
};

export default getCMSComponent;
