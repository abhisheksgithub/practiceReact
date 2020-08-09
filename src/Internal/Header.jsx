import React from 'react'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
        <><h1>Header, { `${this.props.age} ${this.props.birth}` } </h1></>
        )
    }
}