import React, {Component} from 'react';
import {ListGroupItem, Grid, Row, Col} from 'react-bootstrap'
import Demand from './Demand'
import Space from './Space'
import data from './data.json'

export default class Product extends Component {

    constructor(props) {
        super(props)

        this.state = {
            ...this.props.data
        }
    }
    
    cost = (product) => data[product]
        .composition
        .map(item => this.cost(item))
        .reduce((lastCost, newCost) => lastCost + newCost, data[product].cost)

    updateInformation = (totalDemand) => {
        const totalCost = this.cost(this.state.name)
        const profit = this.state.price - totalCost
        const averageProfit = totalDemand
            ? parseInt(profit / totalDemand, 10)
            : 0

        this.setState({totalCost, profit, averageProfit, totalDemand})

    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.totalDemand === undefined || nextState.totalDemand !== this.state.totalDemand
    }

    render() {
        return (
            <ListGroupItem>
                <Grid fluid className="header">
                    <Row>
                        <Col md={5} lg={5} sm={4}>
                            <h4>{this.state.name}<Space/>
                                ({this.state.date})
                            </h4>
                        </Col>
                        <Col md={7} lg={7} sm={8}>
                            <Demand onChange={this.updateInformation}/></Col>
                    </Row>
                </Grid>
                <Grid fluid>
                    <Row>
                        <Col md={3} lg={3} sm={3} xs={3}>
                            <strong>Price:</strong><Space/>{this.state.price}</Col>
                        <Col md={3} lg={3} sm={3} xs={3}>
                            <strong>Total Cost:</strong><Space/>{this.state.totalCost}</Col>
                        <Col md={3} lg={3} sm={3} xs={3}>
                            <strong>Profit:</strong><Space/>{this.state.profit}</Col>
                        <Col md={3} lg={3} sm={3} xs={3}>
                            <strong>Avg Price:</strong><Space/>{this.state.averageProfit}</Col>
                    </Row>
                </Grid>
            </ListGroupItem>
        )
    }
}
