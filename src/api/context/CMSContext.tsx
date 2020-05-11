const DEFAULT_JOURNEY = "ACQUISITION";

class CMSContext {
  componentId: string;
  journey?: string;

  constructor(componentId: string, journey: string = DEFAULT_JOURNEY) {
    this.componentId = componentId;
    this.journey = journey;
  }
}

export default CMSContext;
