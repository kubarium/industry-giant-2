import React, {Component} from 'react';
import {ListGroupItem, Grid, Row, Col} from 'react-bootstrap'
import Demand from './Demand'
import Space from './Space'
import data from './data.json'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';

const marks = {
    .5: "50%",
    .6: "60%",
    .7: "70%",
    .8: "80%",
    .9: "90%",
    1.0: "100%",
    1.1: "110%",
    1.2: "120%",
    1.3: "130%",
    1.4: "140%",
    1.5: "150%"
}

export default class Product extends Component {

    constructor(props) {
        super(props)

        this.state = {
            ...this.props.data,
            priceAdjustment: 1
        }
    }

    cost = (product) => data[product]
        .composition
        .map(item => this.cost(item))
        .reduce((lastCost, newCost) => lastCost + newCost, data[product].cost)

    decimalFormatter = (number) => number>1000000 ? (number / 1000000).toFixed(2) + "M" : number >1000 ? (number / 1000).toFixed(2) + "K" : number
        

    updateInformation = (totalDemand) => {
        const totalCost = this.cost(this.state.name)
        const adjustedPrice = parseInt(this.state.price * this.state.priceAdjustment,10)
        const profit = adjustedPrice - totalCost
        const totalProfit = profit * totalDemand

        this.setState({totalCost, profit, totalProfit, totalDemand, adjustedPrice})

    }

    onPriceChange = (priceAdjustment) => this.setState({priceAdjustment})

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.totalDemand === undefined || nextState.totalDemand !== this.state.totalDemand || nextState.priceAdjustment !== this.state.priceAdjustment || nextState.adjustedPrice !== this.state.adjustedPrice
    }

    render() {

        return (
            <ListGroupItem>
                <Grid fluid>
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
                <Grid fluid className="price">
                    <Row>
                        <Col md={3} lg={3} sm={3} xs={3}>
                            <strong>Price:</strong><Space/>{this.decimalFormatter(this.state.adjustedPrice)}
                        </Col>
                        <Col md={9} lg={9} sm={9} xs={9}>
                            <Slider
                                ref="slider"
                                dots
                                step={.1}
                                min={.5}
                                max={1.5}
                                defaultValue={this.state.priceAdjustment}
                                marks={marks}
                                onChange={this.onPriceChange}/>
                        </Col>
                    </Row>
                </Grid>
                <Grid fluid>
                    <Row>
                        <Col md={3} lg={3} sm={3} xs={3}>
                            <strong>Total Cost:</strong><Space/>{this.decimalFormatter(this.state.totalCost)}</Col>
                        <Col md={3} lg={3} sm={3} xs={3}>
                            <strong>Profit:</strong><Space/>{this.decimalFormatter(this.state.profit)}</Col>
                        <Col md={3} lg={3} sm={3} xs={3}>
                            <strong>Total Profit:</strong><Space/>{this.decimalFormatter(this.state.totalProfit)}</Col>
                        <Col md={3} lg={3} sm={3} xs={3}></Col>
                    </Row>
                </Grid>
            </ListGroupItem>
        )
    }
}
