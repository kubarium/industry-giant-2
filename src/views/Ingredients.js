import {Checkbox, Col, Grid, Row} from 'react-bootstrap'
import React, {Component} from 'react';

import ActionTypes from '../ActionTypes';
import {store} from '../Store'

export default class Ingredients extends Component {
    onChange = (event) => {
        store.dispatch({type: ActionTypes.TOGGLE_INGREDIENT, ingredient: event.target.value})
    }
    render() {
        const ingredients = store
            .getState()
            .ingredients
            .map(ingredient => <Col
                key={ingredient.index}
                xs={6}
                xsOffset={0}
                sm={3}
                smOffset={1}
                lg={3}
                lgOffset={0}
                md={3}
                mdOffset={0}>
                <Checkbox onChange={this.onChange} value={ingredient.index}>
                    {ingredient.name}
                </Checkbox>
            </Col>)

        return (
            <Grid fluid>
                <Row>
                    {ingredients}
                </Row>
            </Grid>
        )
    }
}
