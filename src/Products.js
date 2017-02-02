import React, {Component} from 'react';
import data from './data.json'
import {FormControl, FormGroup, ListGroup, ListGroupItem} from 'react-bootstrap'
import Demand from './Demand'

export default class Products extends Component {

    constructor(props) {
        super(props)

        this.state = {
            ...this.props,
            value: 0
        }
    }
    cost = (product) => data[product]
        .composition
        .map(item => this.cost(item))
        .reduce((lastCost, newCost) => lastCost + newCost, data[product].cost)

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
        /*this
            .props
            .onChange(this.refs.products.props.value)*/
    }
    render1() {
        let products = Object
            .keys(data)
            .map(item => <option key={item} value={item}>{item}
                ({data[item].date}) - Price:{data[item].price}
                - Total Cost:{this.cost(item)}
                - Profit:{data[item].price - this.cost(item)}</option>)

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
    render() {
        const products = Object
            .keys(data)
            .map(item => <ListGroupItem key={item}>
                <div>
                    <h4>{item}
                        - {data[item].date}
                    </h4><Demand/>
                </div>
                <div>
                    <strong>Price:
                    </strong>{data[item].price}
                    <strong>Total Cost:
                    </strong>{this.cost(item)}
                    <strong>Profit:
                    </strong>{data[item].price - this.cost(item)}
                </div>
            </ListGroupItem>)

        return (
            <ListGroup>
                {products}
            </ListGroup>
        )
    }
}
