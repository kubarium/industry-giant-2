import {Checkbox, Col, Grid, Row} from 'react-bootstrap'
import React, {Component} from 'react';

import ActionTypes from '../ActionTypes';
import {connect} from 'react-redux'

//import {store} from '../Store'
const mapStateToProps = (state) => {
    return {ingredients: state.ingredients}
}

const mapDispatchToProps = (dispatch) => {
    return {
        /*addRecipient: () => {
            dispatch(Actions.addRecipient())
        },
        updateRecipient: (recipient) => {
            dispatch(Actions.updateRecipient(recipient))
        },
        deleteRecipient: (index) => {
            dispatch(Actions.deleteRecipient(index))
        }*/
    }
}
 class Ingredients extends Component {
    onChange = (event) => {
        //dispatch({type: ActionTypes.TOGGLE_INGREDIENT, index: event.target.value})
    }
    render() {
        const ingredients = this.props
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

export default connect(mapStateToProps, mapDispatchToProps)(Ingredients)
