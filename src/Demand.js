import React, {Component} from 'react';
import {Form, FormControl, FormGroup, InputGroup} from 'react-bootstrap'
import {TiLeaf, TiWeatherSunny, TiWeatherSnow, TiWeatherCloudy} from 'react-icons/lib/ti/'

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
    }
    componentDidMount(){
        this
            .props
            .onChange(this.state.total)
    }
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
        const value = RegExp(/\d+/,"g").test(event.target.value) ? event.target.value : 0 

        let seasonalDemand = this.state.seasonalDemand
        seasonalDemand[event.target.id] = parseInt(value, 10)
        this.setState({seasonalDemand})

        this.calculateTotal()

    }
    render() {
        return (
            <Form inline className="demand">
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            id="spring"
                            type="number"
                            min="0"
                            max="150"
                            value={this.state.seasonalDemand.spring}
                            onChange={this.onChange}/>
                        <InputGroup.Addon><TiLeaf/></InputGroup.Addon>
                        <FormControl
                            id="summer"
                            type="number"
                            min="0"
                            max="150"
                            value={this.state.seasonalDemand.summer}
                            onChange={this.onChange}/>
                        <InputGroup.Addon><TiWeatherSunny/></InputGroup.Addon>
                        <FormControl
                            id="fall"
                            type="number"
                            min="0"
                            max="150"
                            value={this.state.seasonalDemand.fall}
                            onChange={this.onChange}/>
                        <InputGroup.Addon><TiWeatherCloudy/></InputGroup.Addon>
                        <FormControl
                            id="winter"
                            type="number"
                            min="0"
                            max="150"
                            value={this.state.seasonalDemand.winter}
                            onChange={this.onChange}/>
                        <InputGroup.Addon><TiWeatherSnow/></InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
            </Form>
        )
    }
}
