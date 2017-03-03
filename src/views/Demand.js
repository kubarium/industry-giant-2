import {Form, FormControl, FormGroup, InputGroup} from 'react-bootstrap'
import React, {Component} from 'react';

import {TiChartLine} from 'react-icons/lib/ti/'

//TiLeaf, TiWeatherSunny, TiWeatherSnow, TiWeatherCloudy, 




export default class Demand extends Component {
/*
    onChange = (event) => {
        const value = RegExp(/\d+/,"g").test(event.target.value) ? event.target.value : 0 

        let seasonalDemand = this.state.seasonalDemand
        seasonalDemand[event.target.id] = parseInt(value, 10)
        this.setState({seasonalDemand})

        this.calculateTotal()

    }*/
    onChange = (event) => this.props.onChange(RegExp(/\d+/,"g").test(event.target.value) ? event.target.value : 0 )
        
    render() {
        return (
            <Form className="demand" bsSize="sm">
                <FormGroup>
                    <InputGroup>
                        <InputGroup.Addon><TiChartLine/></InputGroup.Addon>
                    <FormControl
                            id="fluctuation"
                            type="number"
                            min="0"
                            max="150"
                            value={this.props.demand}
                            onChange={this.onChange}/>
                        {/*<InputGroup.Addon><TiLeaf/></InputGroup.Addon>
                        <FormControl
                            id="spring"
                            type="number"
                            min="0"
                            max="150"
                            value={this.state.seasonalDemand.spring}
                            onChange={this.onChange}/>
                        <InputGroup.Addon><TiWeatherSunny/></InputGroup.Addon>
                        <FormControl
                            id="summer"
                            type="number"
                            min="0"
                            max="150"
                            value={this.state.seasonalDemand.summer}
                            onChange={this.onChange}/>
                        <InputGroup.Addon><TiWeatherCloudy/></InputGroup.Addon>
                        <FormControl
                            id="fall"
                            type="number"
                            min="0"
                            max="150"
                            value={this.state.seasonalDemand.fall}
                            onChange={this.onChange}/>
                        <InputGroup.Addon><TiWeatherSnow/></InputGroup.Addon>
                        <FormControl
                            id="winter"
                            type="number"
                            min="0"
                            max="150"
                            value={this.state.seasonalDemand.winter}
                            onChange={this.onChange}/>*/}
                    </InputGroup>
                </FormGroup>
            </Form>
        )
    }
}
