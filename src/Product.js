import 'rc-slider/assets/index.css';

import { Clearfix, Col, Grid, Image, ListGroupItem, Row } from 'react-bootstrap'
import React, { Component } from 'react';
import { TiStarFullOutline, TiStarOutline } from 'react-icons/lib/ti/'

import Demand from './views/Demand'
import Slider from 'rc-slider'
import Space from 'react-nbsp'

const marks = {
    .5: "50%",
    .6: "60%",
    .7: "70%",
    .8: "80%",
    .9: "90%",
    1.0: "100%",
    1.1: "110%",
    1.2: "120%",
    1.3: "130%",
    1.4: "140%",
    1.5: "150%"
}

export default class Product extends Component {

    decimalFormatter = (number) => number > 1000000
        ? (number / 1000000).toFixed(2) + "M"
        : number > 1000
            ? (number / 1000).toFixed(2) + "K"
            : number

    onPriceChange = (priceAdjustment) => this.setState({
        priceAdjustment
    })

    render() {
        return (
            <ListGroupItem>
              <Grid fluid>
                <Row>
                  <Col md={ 12 } lg={ 4 } sm={ 12 }>
                  <h4>{ this.props.product.isWorthIt
                        ? <TiStarFullOutline/>
                        : <TiStarOutline/> }
                        <Space/>
                        <Image circle src={ `icons/${this.props.product.name}.png` } title={ this.props.product.name } alt={ this.props.product.name } />
                        <Space/>
                        { this.props.product.name }
                        <Space/>
                        ({ this.props.product.date })
                        </h4>
                  <Space/>
                  <Clearfix visibleLgBlock/>
                  <span className="ingredients">{ this.props.product.composition.join(', ') }</span>
                  </Col>
                  <Clearfix visibleSmBlock visibleMdBlock/>
                  <Col md={ 2 } lg={ 2 } sm={ 4 }>
                  <Demand product={ this.props.product } />
                  </Col>
                  <Col md={ 5 } lg={ 5 } sm={ 4 }>Manufactured At
                  <Space/>
                  <img src={ `icons/${this.props.product.manufacturedAt}.png` } title={ this.props.product.manufacturedAt } alt={ this.props.product.manufacturedAt } /></Col>
                  <Col md={ 5 } lg={ 5 } sm={ 4 }>Sold At
                  <Space/>
                  <img src={ `icons/${this.props.product.soldAt}.png` } title={ this.props.product.soldAt } alt={ this.props.product.soldAt } /></Col>
                </Row>
              </Grid>
              <Grid fluid className="price">
                <Row>
                  <Col md={ 3 } lg={ 3 } sm={ 3 } xs={ 3 }>
                  <strong>Price:</strong>
                  <Space/>
                  { this.decimalFormatter(this.props.product.price) }
                  </Col>
                  <Col md={ 9 } lg={ 9 } sm={ 9 } xs={ 9 }>
                  <Slider ref="slider" dots step={ .1 } min={ .5 } max={ 1.5 } defaultValue={ 1 } marks={ marks }
                    onChange={ this.onPriceChange } />
                  </Col>
                </Row>
              </Grid>
              <Grid fluid>
                <Row>
                  <Col md={ 3 } lg={ 3 } sm={ 3 } xs={ 3 }>
                  <strong>Total Cost:</strong>
                  <Space/>
                  <Clearfix visibleXsBlock/>
                  { this.decimalFormatter(this.props.product.totalCost) }
                  </Col>
                  <Col md={ 2 } lg={ 2 } sm={ 2 } xs={ 2 }>
                  <strong>Unit Profit:</strong>
                  <Space/>
                  <Clearfix visibleXsBlock/>
                  { this.decimalFormatter(this.props.product.profit) }
                  </Col>
                  <Col md={ 4 } lg={ 4 } sm={ 4 } xs={ 4 }>
                  <strong>Total Profit:</strong>
                  <Space/>
                  <Clearfix visibleXsBlock/>
                  { this.decimalFormatter(this.props.product.totalProfit) }
                  </Col>
                  <Col md={ 3 } lg={ 3 } sm={ 3 } xs={ 3 }></Col>
                </Row>
              </Grid>
            </ListGroupItem>
        )
    }
}
