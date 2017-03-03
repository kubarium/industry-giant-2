import { Checkbox, Col, Grid, Row } from 'react-bootstrap'
import React, { Component } from 'react';

export default class Ingredients extends Component {
    render() {
        return (
            <Grid fluid>
              <Row>
                { this.props
                      .ingredients
                      .map(ingredient => <Col key={ ingredient.index } xs={ 6 } xsOffset={ 0 } sm={ 3 } smOffset={ 1 } lg={ 3 }
                                           lgOffset={ 0 } md={ 3 } mdOffset={ 0 }>
                                         <Checkbox onChange={ (event) => this.props.toggleIngredient(event.target.value) } value={ ingredient.index }>
                                           { ingredient.name }
                                         </Checkbox>
                                         </Col>) }
              </Row>
            </Grid>
        )
    }
}

