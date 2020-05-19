import fetch from "isomorphic-fetch";
import { CmsContext } from "./context/CmsContext";

type mapping = {
  [key: string]: string
}

const componentsToURLsMapping: mapping = {
  CQ5Global_header:
    "content/ee-shop/consumer/personalization/l0/product/watch/_jcr_content/slot-one-par.html",
  CQ5LoginBannerComponent:
    "content/ee-shop/consumer/personalization/l0/product/watch/_jcr_content/slot-two-par.html",
};

const getCMSComponent = async (cmsContext: CmsContext) => {
  try {
    const { componentId, journey } = cmsContext;
    let queryParams = Object.entries(cmsContext).map(([key, val]) => `${key}=${val}`).join('&');

    const componentUrl: any = componentsToURLsMapping[componentId];
    const url = `${process.env.REACT_APP_CMS_ENDPOINT_URL}/${componentUrl}?${queryParams}`;

    const response = await fetch(url);
    const content = await response.text();

    return content;
  } catch (e) {
    console.error(e);
  }
};

export default getCMSComponent;
