import fetch from "isomorphic-fetch";

const DEFAULT_JOURNEY = "ACQUISITION";

const componentsToURLsMapping = {
  CQ5Global_header:
    "content/ee-shop/consumer/personalization/l0/product/watch/_jcr_content/slot-one-par.html",
  CQ5LoginBannerComponent:
    "content/ee-shop/consumer/personalization/l0/product/watch/_jcr_content/slot-two-par.html",
};

const getCMSComponent = async ({ id, journey = DEFAULT_JOURNEY }) => {
  try {
    const componentUrl = componentsToURLsMapping[id];
    const url = `http://localhost:18080/${componentUrl}?journey=${journey}`;

    const response = await fetch(url);
    const content = await response.text();

    return content;
  } catch (e) {
    console.error(e);
  }
};

export default getCMSComponent;
