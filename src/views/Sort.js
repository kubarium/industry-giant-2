import {Button, ButtonGroup} from 'react-bootstrap'
import React, {Component} from 'react';

import Tooltip from 'rc-tooltip'

export default class Sort extends Component {

    render() {
        return (
            <ButtonGroup bsSize="xsmall">
                {this
                    .props
                    .sortings
                    .map(sorting => <Tooltip
                        overlay={sorting.icon}
                        trigger={['click', 'hover']}
                        placement="bottom"
                        key={sorting.index}>
                        <Button
                            active={sorting.active}
                            value={sorting.index}
                            onClick={(event) => this.props.sortChange(event.currentTarget.value)}><img src={`icons/${sorting.icon}.png`} alt={sorting.icon}/></Button>
                    </Tooltip>)}
            </ButtonGroup>
        )
    }
}
