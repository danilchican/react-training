const DEFAULT_JOURNEY = "ACQUISITION";

export class CmsContext {
  componentId: string;
  journey?: string;
  
  // pdpContext
  // categoryContext
  // TODO refactor without classes

  constructor(componentId: string, journey: string = DEFAULT_JOURNEY) {
    this.componentId = componentId;
    this.journey = journey;
  }
}

export class CategoryCmsContext extends CmsContext {
  bundleType: string;

  constructor(componentId: string, bundleType: string, journey: string = DEFAULT_JOURNEY) {
    super(componentId, journey);

    this.bundleType = bundleType;
  }
}