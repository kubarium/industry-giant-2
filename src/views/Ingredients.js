import React, {Component} from 'react';
import {Checkbox, Grid, Row, Col} from 'react-bootstrap'
import Utils from './Utils'

export default class Ingredients extends Component {
    componentWillMount() {
        this.state = {
            ingredients: Utils.rawIngredients
        }

        this
            .props
            .onChange(Utils.rawIngredients)

    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextState.ingredients !== this.state.ingredients
    }

    onChange = (event) => {
        let ingredients = this.state.ingredients
        const ingredient = event.target.value

        event.target.checked
            ? ingredients.push(ingredient)
            : ingredients.splice(ingredients.indexOf(ingredient), 1)

        this
            .props
            .onChange(ingredients)
    }
    render() {
        const ingredients = this
            .state
            .ingredients
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
