import 'rc-slider/assets/index.css';

import {
  Clearfix,
  Col,
  Grid,
  Image,
  ListGroupItem,
  Row,
} from 'react-bootstrap'
import React, {Component} from 'react';
import {TiStarFullOutline, TiStarOutline} from 'react-icons/lib/ti/'

import Demand from './Demand'
import NumericInput from 'react-numeric-input';
import Slider from 'rc-slider'
import Space from 'react-nbsp'
import classNames from 'classnames'

export default class Product extends Component {
  marks = () => {
    const max = 150
    const min = 50
    let divider = 11
    const interval = Math.floor((max - min) / (divider - 1))
    let output = {}
    while (divider) {
      const mark = min + (--divider * interval)
      output[mark] = mark + "%"
    }
    output[max] = max
    return output
  }
  decimalFormatter = (number) => number > 1000000
    ? (number / 1000000).toFixed(2) + "M"
    : number > 1000
      ? (number / 1000).toFixed(2) + "K"
      : number

  render() {
    return (
      <ListGroupItem>
        <Grid fluid>
          <Row>
            <Col md={10} lg={10} sm={10} xs={9} className="product-title">
              <h4>{this.props.product.isWorthIt
                  ? <TiStarFullOutline/>
                  : <TiStarOutline/>}
                <Space/>
                <Image
                  circle
                  src={`icons/${this.props.product.name}.png`}
                  title={this.props.product.name}
                  alt={this.props.product.name}/>
                <Space/> {this.props.product.name}
                <Space/>
                ({this.props.product.date})
              </h4>
              <Space/>
              <Clearfix visibleXsBlock/>
              <span className="ingredients">{this
                  .props
                  .product
                  .composition
                  .join(', ')}</span>
            </Col>
            <Col
              md={2}
              lg={2}
              sm={2}
              xs={3}
              className={classNames({
              "demand-form": true,
              "highlight": this.props
                .sortByDemand
            })}>
              <Demand demand={this.props.product.demand} onChange={this.props.onDemandChange}/>
            </Col>
          </Row>
        </Grid>
        <Grid fluid className="price">
          <Row>
            <Col md={3} lg={3} sm={3} xs={12}>
              <Row>
                <Col md={12} lg={12} sm={12} xs={5}>
                  <strong>Price Adjuster:</strong>
                  <Space/>
                </Col>
                <Col xs={6} xsOffset={1}>
                  <NumericInput
                    readOnly
                    mobile
                    className="price-adjuster-numeric form-control"
                    min={50}
                    max={150}
                    step={10}
                    format={(num) => num + "%"}
                    value={this.props.product.priceAdjustment}
                    onChange={(price)=>this.props.onPriceChange(price)}/>
                </Col>
              </Row>
            </Col>
            <Col md={9} lg={9} sm={9} xs={12}>
              <Slider
                className="price-adjuster-slider"
                dots
                min={50}
                max={150}
                step={10}
                value={this.props.product.priceAdjustment}
                marks={this.marks()}
                onChange={(price)=>this.props.onPriceChange(price)}/>
            </Col>
          </Row>
        </Grid>
        <Grid fluid>
          <Row>
            <Col md={3} lg={3} sm={3} xs={3}>
              <strong>Price:</strong>
              <Space/>
              <Clearfix visibleXsBlock/> {this.decimalFormatter(this.props.product.price)}
            </Col>
            <Col
              md={3}
              lg={3}
              sm={3}
              xs={3}
              className={classNames({
              "highlight": this.props
                .sortByTotalCost
            })}>
              <strong>Total Cost:</strong>
              <Space/>
              <Clearfix visibleXsBlock/> {this.decimalFormatter(this.props.product.totalCost)}
            </Col>
            <Col md={3} lg={3} sm={3} xs={3}>
              <strong>Unit Profit:</strong>
              <Space/>
              <Clearfix visibleXsBlock/> {this.decimalFormatter(this.props.product.profit)}
            </Col>
            <Col
              md={3}
              lg={3}
              sm={3}
              xs={3}
              className={classNames({
              "highlight": this.props
                .sortByTotalProfit
            })}>
              <strong>Total Profit:</strong>
              <Space/>
              <Clearfix visibleXsBlock/> {this.decimalFormatter(this.props.product.totalProfit)}
            </Col>
          </Row>
        </Grid>
      </ListGroupItem>
    )
  }
}
