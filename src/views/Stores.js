import {Button, ButtonGroup} from 'react-bootstrap'
import React, {Component} from 'react';

import ActionTypes from '../ActionTypes';
import classNames from 'classnames'
import {store} from '../Store'

export default class Ingredients extends Component {
  onChange = (event) => {
    var btnClass = classNames({
      'btn': true,
      'btn-default': true,
      'active': !RegExp(/active/, "g").test(event.currentTarget.getAttribute("class"))
    });
    event
      .currentTarget
      .setAttribute("class", btnClass)

    store.dispatch({type: ActionTypes.STORE_CHANGE, index: event.currentTarget.value})
  }
  render() {
    return (
      <ButtonGroup bsSize="small">
        {store
          .getState()
          .stores
          .map(store => <Button
            active={store.active}
            value={store.index}
            key={store.name}
            onClick={this.onChange}><img src={`icons/${store.name}.png`} alt={store.name}/></Button>)}
      </ButtonGroup>
    )
  }
}
