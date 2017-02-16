import {Checkbox, Col, Grid, Row} from 'react-bootstrap'
import React, {Component} from 'react';

import Utils from '../Utils'
import {store} from '../Store'

export default class Ingredients extends Component {
    componentWillMount() {

//console.log(store.getState())
        /*this
            .props
            .onChange(Utils.rawIngredients)*/

    }
    /*shouldComponentUpdate(nextProps, nextState) {
        return nextState.ingredients !== this.state.ingredients
    }*/

    onChange = (event) => {
        /*let ingredients = this.state.ingredients
        const ingredient = event.target.value

        event.target.checked
            ? ingredients.push(ingredient)
            : ingredients.splice(ingredients.indexOf(ingredient), 1)

        this
            .props
            .onChange(ingredients)*/
    }
    render() {
        const ingredients = store.getState().filter(product => product.raw).map(product=>product.name)
            .map(ingredient => <Col
                key={ingredient}
                xs={6}
                xsOffset={0}
                sm={3}
                smOffset={1}
                lg={3}
                lgOffset={0}
                md={3}
                mdOffset={0}>
                <Checkbox defaultChecked onChange={this.onChange} value={ingredient}>
                    {ingredient}
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
