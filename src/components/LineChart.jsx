import React from 'react'
import { Col, Row, Typography } from 'antd'
const { Title } = Typography;

const LineChart = ({ cryptoDetails, currentPrice, coinName }) => {

    return (
        <>
            <Row className='chart-header'>
                <Title level={2} className='chart-title'>{coinName} Price Chart</Title>
                <Col className='price-container'>
                    <Title level={5} className='price-change'>{cryptoDetails?.change}%</Title>
                    <Title level={5} className='current-price'>Current {coinName} Price: $ {currentPrice}</Title>
                </Col>
            </Row>
            {/* <Line /> */}
        </>
    )
}

export default LineChart