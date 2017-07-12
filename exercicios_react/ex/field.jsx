import React, { Component } from 'react'

class Field extends Component { // nao obrigado a colocar o export default aqui

    constructor(props) { 
        super(props)
        this.state = { value: props.initialValue }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) { // metodo responsavel por manipular quando houver uma mundança no FIELD
        this.setState({ value: event.target.value }) // target é o proprio input. Tudo que for digitado vai esta na variavel "value"
    }

    render() { // metodo obrigatorio
        return (
            <div>
                <label>{this.state.value}</label><br /> 
                <input onChange={this.handleChange} value={this.state.value} />
            </div>
        )
    }
}

export default Field 