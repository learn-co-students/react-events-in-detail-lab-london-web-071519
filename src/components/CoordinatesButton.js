// Code CoordinatesButton Component Here
import React, {Component} from 'react';
export default class CoordinatesButton extends Component {
  handleClick = (ev) => {
    this.props.onReceiveCoordinates([ev.screenX, ev.screenY]);
  };
  render() {
    return <button onClick={this.handleClick}>CB</button>;
  }
}
