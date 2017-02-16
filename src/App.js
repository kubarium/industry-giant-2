import './App.css';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

import {Col, Grid, Row} from 'react-bootstrap'
import React, {Component} from 'react';
import Slider, {Handle} from 'rc-slider'

import Ingredients from './views/Ingredients'
import Products from './Products'
import Tooltip from 'rc-tooltip'
import Utils from './Utils'

const marks = {
  1900: 1900,
  1914: 1914,
  1928: 1928,
  1942: 1942,
  1956: 1956,
  1970: 1970
}

const handle = (props) => {
  const {value, dragging, index} = props;
  return (
    <Tooltip overlay={value} visible={dragging} placement="top" key={index}>
      <Handle {...props}/>
    </Tooltip>
  );
};

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: 1970,
      products: []
    }
  }
  onDateChange = (date) => {
    this.setState({date})

    this.filterProducts(Object.assign({}, {
      ...this.refs.ingredients.state
    }, {date}))
  }
  onIngredientsChange = (ingredients) => this.filterProducts(Object.assign({}, {
    ingredients
  }, {date: this.state.date}))

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.date === this.state.date || nextState.products !== this.state.products
  }

  filterProducts = (filter) => this.setState({
    products: Utils.Filter(filter)
  })

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Industry Giant 2 Profit Calculator</h2>
        </div>
        <Grid>
          <Row className="filter">
            <Col xs={12} sm={12} lg={10} lgOffset={1} md={10} mdOffset={1}><Slider
              ref="date"
              min={1900}
              max={1970}
              marks={marks}
              handle={handle}
              defaultValue={this.state.date}
              onAfterChange={this.onDateChange}/></Col>
          </Row>
          <Row className="filter">
            <Col xs={12} sm={12} lg={10} lgOffset={1} md={10} mdOffset={1}>
              <Ingredients ref="ingredients" onChange={this.onIngredientsChange}/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} lg={10} lgOffset={1} md={10} mdOffset={1}><Products ref="products" products={this.state.products}/></Col>
          </Row>
        </Grid>
      </div>
    )
  }
}