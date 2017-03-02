import {Button, ButtonGroup} from 'react-bootstrap'
import React, {Component} from 'react';

import ActionTypes from '../ActionTypes';
import classNames from 'classnames'
import {connect} from 'react-redux'

//import {store} from '../Store'
const mapStateToProps = (state) => {
    return {products: state.products}
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
class Stores extends Component {
  onChange = (event) => {
    var btnClass = classNames({
      'btn': true,
      'btn-default': true,
      'active': !RegExp(/active/, "g").test(event.currentTarget.getAttribute("class"))
    });
    event
      .currentTarget
      .setAttribute("class", btnClass)

    //store.dispatch({type: ActionTypes.STORE_CHANGE, index: event.currentTarget.value})
  }
  render() {
    return (
      <ButtonGroup bsSize="small">
        {this.props.stores
          .map(store => <Button
            active={store.active}
            value={store.index}
            key={store.name}
            onClick={this.onChange}><img src={`icons/${store.name}.png`} alt={store.name}/></Button>)}
      </ButtonGroup>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Stores)
