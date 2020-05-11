import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import getCMSContent from "../../api/CMSService";

const CQ5Component = (props: any) => {
  const [content, setContent]: any = useState(null);

  useEffect(() => {
    getCMSContent(props.cmsContext).then(setContent);
  }, []);

  return (
    <div
      id={props.cmsContext.componentId}
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  );
};

CQ5Component.propTypes = {
  cmsContext: PropTypes.shape({
    componentId: PropTypes.string.isRequired,
    journey: PropTypes.string,
  }),
};

export default CQ5Component;
