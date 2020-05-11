const DEFAULT_JOURNEY = "ACQUISITION";

export default class CMSContext {
  componentId: string;
  journey?: string;

  constructor(componentId: string, journey: string = DEFAULT_JOURNEY) {
    this.componentId = componentId;
    this.journey = journey;
  }
}
