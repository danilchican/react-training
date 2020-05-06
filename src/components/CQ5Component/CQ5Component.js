import React, { Component } from "react";
import axios from "axios";
import Wrapper from "../../hoc/Wrapper/Wrapper";
import PropTypes from "prop-types";

class CQ5Component extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: null,
      cmsContext: {
        id: props.cmsContext.id,
        journey: "ACQUISITION",
      },
    };

    if (this.props.cmsContext.journey) {
      this.state.cmsContext.journey = this.props.cmsContext.journey;
    }
  }

  componentDidMount() {
    axios
      .get(
        `/stubs/${this.state.cmsContext.id}.html?journey=${this.state.cmsContext.journey}`
      )
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
          id={this.state.cmsContext.id}
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
