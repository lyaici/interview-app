import React, { Component } from "react";

class RenderCounter extends Component {
  renderCount = 1; // commence à 1 pour le rendu initial

  componentDidUpdate() {
    this.renderCount += 1;
  }

  render() {
    return <div>Render Count: {this.renderCount}</div>;
  }
}

export default RenderCounter;
