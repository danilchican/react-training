import fetch from "isomorphic-fetch";

const DEFAULT_JOURNEY = "ACQUISITION";

const getCMSComponent = async (id, journey, callback) => {
  let _journey = journey ? journey : DEFAULT_JOURNEY;

  console.log(111);
  await fetch(`http://localhost:3000/stubs/${id}.html?journey=${_journey}`)
    .then((response) => {
      console.log(3333);
      return response.text();
    })
    .then(callback)
    .catch((error) => {
      console.log(444);
      console.log(error);
    });
};

export default getCMSComponent;
