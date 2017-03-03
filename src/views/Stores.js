import { Button, ButtonGroup } from 'react-bootstrap'
import React, { Component } from 'react';

export default class Stores extends Component {
  render() {
    return (
      <ButtonGroup bsSize="xsmall">
        { this.props.stores
            .map(store => <Button active={ store.active } value={ store.index } key={ store.name } onClick={ (event) => this.props.storeChange(event.currentTarget.value) }><img src={ `icons/${store.name}.png` } alt={ store.name } /></Button>) }
      </ButtonGroup>
    )
  }
}
