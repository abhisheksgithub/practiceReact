import React from 'react'

export default class Child1 extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>{this.props.name}</>
        )
    }
}