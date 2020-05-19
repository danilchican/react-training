import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import getCMSComponent from "../../api/CmsService";
import { CmsContext } from "../../api/context/CmsContext";

type ComponentProps = {
  cmsContext: CmsContext
}

const CQ5Component = (props: ComponentProps) => {
  const [content, setContent]: any = useState(null);

  useEffect(() => {
    getCMSComponent(props.cmsContext).then(setContent);
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
