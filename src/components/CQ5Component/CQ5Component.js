import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import getCMSContent from "../../api/CMSService";

const CQ5Component = (props) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    getCMSContent(props.cmsContext.id, props.cmsContext.journey, (content) => {
      setContent(
        <div
          id={props.cmsContext.id}
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      );
    });
  }, []);

  return <React.Fragment>{content}</React.Fragment>;
};

CQ5Component.propTypes = {
  cmsContext: PropTypes.shape({
    id: PropTypes.string.isRequired,
    journey: PropTypes.string,
  }),
};

export default CQ5Component;
