import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Static, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoAPI'

const { Title } = Typography;

const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery('hello');

    console.log(data)

    return (
        <>
            <Title level={2} className='heading'>Global Crypto Stars</Title>
            <Row>
                <Col span={12}> <Statistic title='Total Cryptocurrencies' value='5' /></Col>
                <Col span={12}> <Statistic title='Total Exchange' value='5' /></Col>
                <Col span={12}> <Statistic title='Total Market Cap' value='5' /></Col>
                <Col span={12}> <Statistic title='Total 24h volume' value='5' /></Col>
                <Col span={12}> <Statistic title='Total Markets' value='5' /></Col>

            </Row>

        </>
    )
}

export default Homepage