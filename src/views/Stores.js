import {Button, ButtonGroup} from 'react-bootstrap'
import React, {Component} from 'react';

import Media from 'react-media'
import Tooltip from 'rc-tooltip'

export default class Stores extends Component {
  render() {
    return (
      <ButtonGroup bsSize={<Media query="(max-width: 640px)">{matches => matches ? ("small") : ("xsmall")}</Media>}>
            {this
        .props
        .stores
        .map(store => <Tooltip
          overlay={store.name}
          trigger={['click', 'hover']}
          placement="bottom"
          key={store.index}>
          <Button
            active={store.active}
            value={store.index}
            key={store.name}
            onClick={(event) => this.props.storeChange(event.currentTarget.value)}><img src={`icons/${store.name}.png`} alt={store.name}/></Button>
        </Tooltip>)}
          </ButtonGroup>
    )
  }
}
