import React, { Component } from "react";
import axios from "axios";
import Wrapper from "../../hoc/Wrapper/Wrapper";
import PropTypes from "prop-types";

class CQ5Component extends Component {
  state = {
    content: null,
  };

  componentWillMount() {
    // TODO fix cmsContext
    
    axios
      .get(`/stubs/${this.props.cmsContext.id}.html`)
      .then((res) => {
        this.setState({ content: res.data });
      })
      .catch((res) => {
        console.log(res);
      });
  }

  render() {
    let content = null;

    if (this.state.content) {
      content = (
        <div
          id={this.props.cmsContext.id}
          dangerouslySetInnerHTML={{
            __html: this.state.content,
          }}
        ></div>
      );
    }

    return <Wrapper>{content}</Wrapper>;
  }
}

CQ5Component.propTypes = {
  cmsContext: PropTypes.shape({
    id: PropTypes.string.isRequired,
    journey: PropTypes.string,
  }),
};

export default CQ5Component;
