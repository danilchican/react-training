const DEFAULT_JOURNEY = "ACQUISITION";

const getCMSComponent = async (id, journey, callback) => {
  let _journey = journey ? journey : DEFAULT_JOURNEY;

  fetch(`/stubs/${id}.html?journey=${_journey}`)
    .then((response) => {
      return response.text();
    })
    .then(callback);
};

export default getCMSComponent;
