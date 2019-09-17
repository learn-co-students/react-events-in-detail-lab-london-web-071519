// Code DelayedButton Component Here

import React, {Component} from 'react'

export default class DelayedButton extends Component {

    handleClickEvent = event => {
        event.persist()
        this.props.onDelayedClick(event)
    }

    render() {
        return (
            <button onClick={event => setTimeout(() => this.handleClickEvent(event), this.props.delay)}></button>
        )
    }
}