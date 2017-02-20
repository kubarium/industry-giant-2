import 'rc-tooltip/assets/bootstrap.css';
import 'rc-slider/assets/index.css';

import React, { Component } from 'react';
import Slider, { Handle } from 'rc-slider'

import ActionTypes from '../ActionTypes';
import Tooltip from 'rc-tooltip'
import { store } from '../Store'

const handle = (props) => {
  const {value, dragging, index} = props;
  return (
    <Tooltip overlay={ value } visible={ dragging } placement="top" key={ index }>
      <Handle {...props}/>
    </Tooltip>
    );
};
export default class Date extends Component {
  constructor(props){
    super(props)
    this.state = {
      min:1900,
      max:2019,
      divider:8
    }
  }
  marks = () => {
  const max = this.state.max
  const min = this.state.min
  let divider = this.state.divider
  const interval =  Math.floor((max-min)/(divider-1))
  let output = {}
  while(divider){
    const date = min+(--divider*interval)
    output[date] = date
  }
  output[max] = max
  return output
  }
  onChange = (date) => {
    store.dispatch({
      type: ActionTypes.DATE_CHANGE,
      date
    })
  }
  render() {
    return (
      <Slider ref="date" min={ this.state.min} max={ this.state.max } marks={ this.marks() } handle={ handle } defaultValue={ store.getState().date } onAfterChange={ this.onChange }
      />
    )
  }
}
