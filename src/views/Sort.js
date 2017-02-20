import { Button, ButtonGroup } from 'react-bootstrap'
import React, { Component } from 'react';

import ActionTypes from '../ActionTypes';
import { store } from '../Store'

export default class Ingredients extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sortings: [{
                by: "name",
                icon: "AZ",
                active: true
            }, {
                by: "totalProfit",
                icon: "Total Profit",
                active: false
            }]
        }
    }
    onChange = (event) => {
        const sortings = this.state.sortings
        sortings.forEach(element => element.active = element.by === event.currentTarget.value)
        this.setState({
            sortings
        })

        store.dispatch({
            type: ActionTypes.SORT_CHANGE,
            sort: event.currentTarget.value
        })
    }
    render() {
        return (
            <ButtonGroup bsSize="small">
              { this.state.sortings.map(sort => <Button active={ sort.active } value={ sort.by } key={ sort.by } onClick={ this.onChange }><img src={ `icons/${sort.icon}.png` } alt={ sort.icon } /></Button>) }
            </ButtonGroup>
        )
    }
}
