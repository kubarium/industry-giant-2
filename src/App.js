import './App.css';

import { Clearfix, Col, Grid, Row } from 'react-bootstrap'
import React, { Component } from 'react';

import Date from './views/Date'
import Ingredients from './views/Ingredients'
import Products from './Products'
import Sort from './views/Sort'
import Stores from './views/Stores'

//import {store} from './Store'

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 onClick={ () => localStorage.removeItem("products") }>Industry Giant 2 Profit Calculator</h2>
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
            <Col xs={ 12 } sm={ 12 } lg={ 10 } lgOffset={ 1 } md={ 10 } mdOffset={ 1 }>
            <Row>
              <Col lg={ 8 } xs={ 12 } md={ 9 }>
              <p>Sold At</p>
              <Stores />
              </Col>
              <Clearfix visibleXsBlock visibleMdBlock />
              <Col lg={ 4 } xs={ 12 } md={ 3 }>
                  <p>Sort By</p>
              <Sort />
              </Col>
            </Row>
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


