import React, {Component} from 'react';
import data from './data.json'
import {FormControl, FormGroup} from 'react-bootstrap'

export default class Products extends Component {

    constructor(props) {
        super(props)

        this.state = {
            ...this.props,
            value: 0
        }
    }
    onChange = (event) => {
        const value = event.target.value
        this.setState({value})

        if (value) 
            this.props.onChange(value)
    }
    componentWillMount() {
        this.setState({
            value: Object.keys(data)[0]
        })
    }
    componentDidMount() {
        this
            .props
            .onChange(this.refs.products.props.value)
    }
    render() {
        let products = Object
            .keys(data)
            .map(item => <option key={item} value={item}>{item}</option>)

        return (
            <FormGroup>
                <FormControl
                    ref="products"
                    value={this.state.value}
                    componentClass="select"
                    onChange={this.onChange}>
                    {products}
                </FormControl>
            </FormGroup>
        )
    }
}
