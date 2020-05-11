const DEFAULT_JOURNEY = "ACQUISITION";

class CMSContext {
  constructor(componentId, journey = DEFAULT_JOURNEY) {
    this.componentId = componentId;
    this.journey = journey;
  }
}

export default CMSContext;
