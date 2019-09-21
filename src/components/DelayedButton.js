// Code DelayedButton Component Here
import React, {Component} from 'react';
export default class DelayedButton extends Component {
  handleClick = (ev) => {
    setTimeout(() => {
      ev.persist();
      this.props.onDelayedClick(ev);
    }, this.props.delay);
  };
  render() {
    return <button onClick={this.handleClick}>DB</button>;
  }
}
