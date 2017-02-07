import React, {Component} from 'react';
import './App.css';
import Products from './Products'
import Ingredients from './Ingredients'
import Utils from './Utils'

import Slider, {Handle} from 'rc-slider'
import Tooltip from 'rc-tooltip'
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

import {Grid, Row, Col} from 'react-bootstrap'

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
    }, {
      date
    }, {sik: false}))
  }
  onIngredientsChange = (ingredients) => this.filterProducts(Object.assign({}, {
    ingredients
  }, {
    date: this.state.date
  }, {sik: true}))

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.date === this.state.date
  }

  filterProducts = (filter) => {
    console.log(filter)

    this.setState({
      products: Utils.filterByDate(filter.date)
    })
    /*

    if (this.props.filter.ingredients.length) {
      products = Utils.filterByIngredients(products, this.props.filter.ingredients)
      // products = products.filter(product =>
      // Utils.breakdownToRawIngredients(product))
    }*/
  }

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
              onChange={this.onDateChange}/></Col>
          </Row>
          <Row className="filter">
            <Col xs={12} sm={12} lg={10} lgOffset={1} md={10} mdOffset={1}>
              <Ingredients ref="ingredients" onChange={this.onIngredientsChange}/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} lg={10} lgOffset={1} md={10} mdOffset={1}><Products products={this.state.products}/></Col>
          </Row>
        </Grid>
      </div>
    )
  }
}