import fetch from "isomorphic-fetch";
import CMSContext from "./context/CMSContext";

type mapping = {
  [key: string]: string
}

const componentsToURLsMapping: mapping = {
  CQ5Global_header:
    "content/ee-shop/consumer/personalization/l0/product/watch/_jcr_content/slot-one-par.html",
  CQ5LoginBannerComponent:
    "content/ee-shop/consumer/personalization/l0/product/watch/_jcr_content/slot-two-par.html",
};

const getCMSComponent = async (cmsContext: CMSContext) => {
  try {
    const componentUrl: any = componentsToURLsMapping[cmsContext.componentId];
    const url = `http://localhost:18080/${componentUrl}?journey=${cmsContext.journey}`;

    const response = await fetch(url);
    const content = await response.text();

    return content;
  } catch (e) {
    console.error(e);
  }
};

export default getCMSComponent;
