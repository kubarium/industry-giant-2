import './App.css';

import {Clearfix, Col, Grid, Row, Well} from 'react-bootstrap'
import React, {Component} from 'react';

import Date from '../containers/Date'
import Ingredients from '../containers/Ingredients'
import Products from '../containers/Products'
import Sort from '../containers/Sort'
import Stores from '../containers/Stores'

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 onClick={() => localStorage.removeItem("products")}>Industry Giant 2 Profit Calculator</h1>
        </div>
        <Grid>
          <Row className="filter">
            <Col xs={12} sm={12} lg={10} lgOffset={1} md={10} mdOffset={1}>
              <Well>
                <h3>Available Before {this.props.date}</h3>
                <Date/>
              </Well>
            </Col>
          </Row>
          <Row className="filter">
            <Col xs={12} sm={12} lg={10} lgOffset={1} md={10} mdOffset={1}>
              <Well>
                <h3>Ingredients</h3>
                <Ingredients/>
              </Well>
            </Col>
          </Row>
          <Row className="filter">
            <Col xs={12} sm={12} lg={10} lgOffset={1} md={10} mdOffset={1}>
              <Row>
                <Col>
                  <h3>Products</h3>
                </Col>
              </Row>
              <Row>
                <Col lg={8} xs={7} md={8}>
                  <p>Sold At</p>
                  <Stores/>
                </Col>
                {/* <Clearfix visibleXsBlock visibleMdBlock/> */}
                <Col lg={4} xs={5} md={4}>
                  <p>Sort By {this.props.sortBy}</p>
                  <Sort/>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} lg={10} lgOffset={1} md={10} mdOffset={1}>
              <Products/>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
