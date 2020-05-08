import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import getCMSContent from "../../api/CMSService";

const CQ5Component = (props) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    getCMSContent({
      id: props.cmsContext.id,
      journey: props.cmsContext.journey,
    }).then(setContent);
  }, []);

  return (
    <div
      id={props.cmsContext.id}
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  );
};

CQ5Component.propTypes = {
  cmsContext: PropTypes.shape({
    id: PropTypes.string.isRequired,
    journey: PropTypes.string,
  }),
};

export default CQ5Component;
