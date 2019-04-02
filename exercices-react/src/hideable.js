import React, { Component } from 'react';

export function hideable(InnerComponent) {
  class HideableComponent extends Component {
    static displayName = `hideable(${InnerComponent.displayName || InnerComponent.name})`;

    render() {
      const { on, ...outerProps} = this.props;
      return (
        <div>
          <InnerComponent {...outerProps} />
          <button>{on ? 'Off' : 'On'}</button>
        </div>
      )
    }
  }

  return HideableComponent;
}
