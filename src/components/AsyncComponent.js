import React from "react";

export default function asyncComponent(importComponent) {
  class AsyncComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        acomponent: null
      }
    }

    async componentDidMount() {
      const component = await importComponent();
      // const { default: component } = await importComponent();
      this.setState({
        acomponent: component.default
        // component: component
      })
    }

    render() {
      const Component = this.state.acomponent;
      return Component ? <Component {...this.props}/> : null;
    }
  }
  return AsyncComponent;
}