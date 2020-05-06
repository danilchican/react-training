import React, { Component } from "react";
import axios from "axios";
import Wrapper from "../../hoc/Wrapper/Wrapper";

class CQ5Component extends Component {
  state = {
    content: null,
  };

  componentWillMount() {
    axios
      .get(`/stubs/${this.props.id}.html`)
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
          dangerouslySetInnerHTML={{
            __html: this.state.content,
          }}
        ></div>
      );
    }

    return <Wrapper>{content}</Wrapper>;
  }
}

export default CQ5Component;
