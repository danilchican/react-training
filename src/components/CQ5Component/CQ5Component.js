import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import getCMSContent from "../../api/CMSService";

const CQ5Component = ({ cmsContext: { id, journey } }) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    getCMSContent({ id, journey }).then(setContent);
  }, []);

  return <div id={id} dangerouslySetInnerHTML={{ __html: content }}></div>;
};

CQ5Component.propTypes = {
  cmsContext: PropTypes.shape({
    id: PropTypes.string.isRequired,
    journey: PropTypes.string,
  }),
};

export default CQ5Component;
