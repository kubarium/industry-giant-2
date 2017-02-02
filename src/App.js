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
    const totalCost = this.cost(product)
    const profit = data[product].price - totalCost
    const averageProfit = this.state.totalDemand === 0 ? profit * 0 : profit / this.state.totalDemand

    this.setState({
      name: product,
      product: Object.assign({}, data[product], {
        totalCost,
        profit,
        averageProfit
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
              <Col xs={4} md={8} mdOffset={2}><Products onChange={this.onProductChange}/></Col>
              
            </Row>
          </Grid>
        </Well>

      </div>
    )
  }
}