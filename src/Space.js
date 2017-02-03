import React, {Component} from 'react'

export default class Space extends Component {
    render() {
        let count = this.props.count
        let space = ""
        do
        {
            space = space.concat('\u00A0')
        }
        while (--count) 

            return (
                <span>{space}</span>
            )
    }
}