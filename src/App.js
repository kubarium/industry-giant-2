import React, {Component} from 'react';
import './App.css';
import Products from './Products'

import {Grid, Row, Col} from 'react-bootstrap'

export default class App extends Component {
 
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Industry Giant 2 Profit Calculator</h2>
        </div>
        <Grid>
          <Row>
            <Col xs={12} sm={12} lg={10} lgOffset={1} md={10} mdOffset={1}><Products/></Col>
          </Row>
        </Grid>
      </div>
    )
  }
}