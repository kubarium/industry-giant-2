import React, {Component} from 'react';
import {FormControl, FormGroup, InputGroup} from 'react-bootstrap'

export default class Demand extends Component {

    constructor(props) {
        super(props)

        this.state = {
            seasonalDemand: {
                spring: 5,
                summer: 5,
                fall: 5,
                winter: 5
            },
            total: 0
        }

    }
    componentWillMount() {
        this.calculateTotal()
    }/*
    componentDidMount(){
        this
            .props
            .onChange(this.state.total)
    }*/
    componentDidUpdate() {
        this
            .props
            .onChange(this.state.total)
    }
    calculateTotal = () => {
        this.setState({
            total: Object
                .keys(this.state.seasonalDemand)
                .map(season => this.state.seasonalDemand[season])
                .reduce((old, current) => old + current, 0)
        })
    }
    onChange = (event) => {
        let seasonalDemand = this.state.seasonalDemand
        seasonalDemand[event.target.id] = parseInt(event.target.value,10)
        this.setState({seasonalDemand})

        this.calculateTotal()

    }
    render() {
        return (
            <form>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            id="spring"
                            type="number"
                            min="0"
                            max="50"
                            value={this.state.seasonalDemand.spring}
                            onChange={this.onChange}/>
                        <InputGroup.Addon>Spring</InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            id="summer"
                            type="number"
                            min="0"
                            max="50"
                            value={this.state.seasonalDemand.summer}
                            onChange={this.onChange}/>
                        <InputGroup.Addon>Summer</InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            id="fall"
                            type="number"
                            min="0"
                            max="50"
                            value={this.state.seasonalDemand.fall}
                            onChange={this.onChange}/>
                        <InputGroup.Addon>Fall</InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            id="winter"
                            type="number"
                            min="0"
                            max="50"
                            value={this.state.seasonalDemand.winter}
                            onChange={this.onChange}/>
                        <InputGroup.Addon>Winter</InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
            </form>
        )
    }
}
