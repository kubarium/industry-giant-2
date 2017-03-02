import {Button, ButtonGroup} from 'react-bootstrap'
import React, {Component} from 'react';

import ActionTypes from '../ActionTypes';
import Tooltip from 'rc-tooltip'
import {connect} from 'react-redux'

//import {store} from '../Store'
const mapStateToProps = (state) => {
    return {products: state.products}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSortChange: () => {
            //dispatch({type: ActionTypes.SORT_CHANGE, index: event.currentTarget.value})
        }
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

class Sort extends Component {
    /*constructor(props) {
        super(props)
        this.state = {
            sortings: store
                .getState()
                .sortings
        }
    }
    componentDidMount() {
        store.subscribe(() => this.setState({
            sortings: store
                .getState()
                .sortings
        }))
    }*/
    render() {
        return (
            <ButtonGroup bsSize="small">
                {this.props
                    .sortings
                    .map(sorting => <Tooltip
                        overlay={sorting.active.toString()}
                        trigger={['click', 'hover']}
                        placement="top"
                        key={sorting.index}>
                        <Button
                            active={sorting.active}
                            value={sorting.index}
                            onClick={(event) => this.onSortChange}><img src={`icons/${sorting.icon}.png`} alt={sorting.icon}/></Button>
                    </Tooltip>)}
            </ButtonGroup>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sort)
