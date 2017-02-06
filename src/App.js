import React, {Component} from 'react';
import './App.css';
import Products from './Products'
import Ingredients from './Ingredients'

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
      ingredients: [],
      date: 1970
    }
  }
  onDateChange = (date) => this.setState({date})
  onIngredientsChange = (ingredients) => this.setState({ingredients})

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
              step={1}
              min={1900}
              max={1970}
              marks={marks}
              handle={handle}
              defaultValue={this.state.date}
              onChange={this.onDateChange}/></Col>
          </Row>
          <Row className="filter">
            <Col xs={12} sm={12} lg={10} lgOffset={1} md={10} mdOffset={1}>
              <Ingredients onChange={this.onIngredientsChange}/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} lg={10} lgOffset={1} md={10} mdOffset={1}><Products
              ingredients={this.state.ingredients}
              dateRange={[1900,this.state.date]}/></Col>
          </Row>
        </Grid>
      </div>
    )
  }
}