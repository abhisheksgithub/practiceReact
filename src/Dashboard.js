import React, { Component } from 'react'
import Header from './Internal/Header'
import Child1 from './Internal/Child1'
import Child2 from './Internal/Child2'

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Jack',
        }
        this.changeValue = this.changeValue.bind(this)
    }

    changeValue(value) {
        this.setState({ name: value})
    }

    render() {
        return (
        <>
            <Child1 name={this.state.name}/>
            <Child2 name={this.state.name} change={this.changeValue}/>
        </>
        )
    }
}

// Parent component (state = name ('Tommy')) => c1, c2; c1( label (Jack) ), c2( textbox (Jack), button )