import React, {Component} from 'react';
import './App.css';
import data from './data.json'
import Products from './Products'
import Seasonal from './Demand'
import {
  ListGroupItem,
  ListGroup,
  Grid,
  Row,
  Col,
  Well
} from 'react-bootstrap'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: {},
      totalDemand: 0
    }
  }

  cost = (product) => data[product]
    .composition
    .map(item => this.cost(item))
    .reduce((lastCost, newCost) => lastCost + newCost, data[product].cost)

  onProductChange = (product) => {
    this.setState({product: data[product], name: product})
    this.updateInformation(product)
  }

  onDemandChange = (totalDemand) => {
    this.setState({totalDemand})
    if (this.state.name) 
      this.updateInformation(this.state.name)
  }

  updateInformation = (product) => {
    let totalCost = this.cost(product)

    this.setState({
      name: product,
      product: Object.assign({}, data[product], {
        profit: data[product].price - totalCost,
        totalCost: totalCost,
        averageProfit: this.state.totalDemand !== 0
          ? parseInt((data[product].price - totalCost) / this.state.totalDemand,10)
          : "N/A"
      })
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return Object
      .keys(nextState.product)
      .length > 0 && this.state.product !== nextState.product && this.state.name !== nextState.name
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Industry Giant 2 Profit Calculator</h2>
        </div>
        <Well>
          <Grid>
            <Row className="show-grid">
              <Col xs={4} md={3}><Products onChange={this.onProductChange}/></Col>
              <Col xs={4} md={5}>
                <ListGroup>
                  <ListGroupItem>Total Cost:{this.state.product.totalCost}</ListGroupItem>
                  <ListGroupItem>Price:{this.state.product.price}</ListGroupItem>
                  <ListGroupItem>Profit:{this.state.product.profit}</ListGroupItem>
                  <ListGroupItem>Average Profit:{this.state.product.averageProfit}</ListGroupItem>
                  <ListGroupItem>Date:{this.state.product.date}</ListGroupItem>
                </ListGroup>
              </Col>
              <Col xs={4} md={4}>
                <Seasonal onChange={this.onDemandChange}/>
              </Col>
            </Row>
          </Grid>
        </Well>

      </div>
    )
  }
}