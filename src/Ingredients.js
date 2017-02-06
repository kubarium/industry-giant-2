import React, {Component} from 'react';
import Utils from './Utils'
import {Checkbox, Grid, Row, Col} from 'react-bootstrap'

export default class Ingredients extends Component {
    constructor(props) {
        super(props)

    }

    componentWillMount() {
        this.state = {
            ingredients: Utils.RawIngredients()
        }

        this
            .props
            .onChange(this.state.ingredients)

    }

    onChange = (event) => {
        let ingredients = this.state.ingredients
        const ingredient = event.target.value

        event.target.checked
            ? ingredients.push(ingredient)
            : ingredients.splice(ingredients.indexOf(ingredient), 1)

        this.setState({ingredients})

        this
            .props
            .onChange(ingredients)
    }
    render() {
        const ingredients = Utils
            .RawIngredients()
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
