import './App.css';

import { Col, Grid, Row } from 'react-bootstrap'
import React, { Component } from 'react';

import Date from './views/Date'
import Ingredients from './views/Ingredients'
import Products from './Products'
import Space from 'react-nbsp'
import Stores from './views/Stores'

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 onClick={()=>localStorage.removeItem("products")}>Industry Giant 2 Profit Calculator</h2>
        </div>
        <Grid>
          <Row className="filter">
            <Col xs={ 12 } sm={ 12 } lg={ 10 } lgOffset={ 1 } md={ 10 } mdOffset={ 1 }>
            <Date />
            </Col>
          </Row>
          <Row className="filter">
            <Col xs={ 12 } sm={ 12 } lg={ 10 } lgOffset={ 1 } md={ 10 } mdOffset={ 1 }>
            <Ingredients />
            </Col>
          </Row>
          <Row className="filter">
            <Col xs={ 12 } sm={ 12 } lg={ 10 } lgOffset={ 1 } md={ 10 } mdOffset={ 1 }> Sold At
            <Space/>
            <Stores />
            </Col>
          </Row>
          <Row>
            <Col xs={ 12 } sm={ 12 } lg={ 10 } lgOffset={ 1 } md={ 10 } mdOffset={ 1 }>
            <Products />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}


