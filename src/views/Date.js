import 'rc-tooltip/assets/bootstrap.css';
import 'rc-slider/assets/index.css';

import {Col, Grid, Row} from 'react-bootstrap'
import React, {Component} from 'react';
import Slider, {Handle} from 'rc-slider'

import Tooltip from 'rc-tooltip'

const handle = (props) => {
  const {value, dragging, index} = props;
  return (
    <Tooltip overlay={value} visible={dragging} placement="top" key={index}>
      <Handle {...props}/>
    </Tooltip>
  );
};
export default class Date extends Component {
  constructor(props) {
    super(props)
    this.state = {
      min: 1900,
      max: 2019,
      divider: 8
    }
  }
  marks = () => {
    const max = this.state.max
    const min = this.state.min
    let divider = this.state.divider
    const interval = Math.floor((max - min) / (divider - 1))
    let output = {}
    while (divider) {
      const date = min + (--divider * interval)
      output[date] = date
    }
    output[max] = max
    return output
  }
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col>
            <Slider
              min={this.state.min}
              max={this.state.max}
              marks={this.marks()}
              handle={handle}
              defaultValue={this.props.date}
              onAfterChange={(date) => this.props.dateChange(date)}/></Col>
        </Row>
      </Grid>
    )
  }
}
