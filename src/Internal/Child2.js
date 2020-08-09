import React from 'react'

export default class Child2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name : '' }
    }

    handleChange = (val) => { this.setState({name: val})}


    render() {
        return (
            <>
                <input type="text" value={this.state.name} onChange={(evt) => this.handleChange(evt.target.value)} />
                <input type="button" value="change" onClick={() => this.props.change(this.state.name)}/>
            </>
        )
    }
}