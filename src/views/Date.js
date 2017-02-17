import 'rc-tooltip/assets/bootstrap.css';
import 'rc-slider/assets/index.css';

import React, { Component } from 'react';
import Slider, { Handle } from 'rc-slider'

import ActionTypes from '../ActionTypes';
import Tooltip from 'rc-tooltip'
import { store } from '../Store'

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
    <Tooltip overlay={ value } visible={ dragging } placement="top" key={ index }>
      <Handle {...props}/>
    </Tooltip>
    );
};
export default class Date extends Component {

  onChange = (date) => {
    store.dispatch({
      type: ActionTypes.DATE_CHANGE,
      date
    })
  }
  render() {
    return (
      <Slider ref="date" min={ 1900 } max={ 1970 } marks={ marks } handle={ handle } defaultValue={ store.getState().date } onAfterChange={ this.onChange }
      />
    )
  }
}
