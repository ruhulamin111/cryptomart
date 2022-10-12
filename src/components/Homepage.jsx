import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Static, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoAPI'
import Cryptocurrencies from './Cryptocurrencies'
import News from './News'

const { Title } = Typography;

const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery('hello');
    if (isFetching) return 'Loadding...'
    const globalStats = data?.data?.stats;

    return (
        <>
            <Title level={2} className='heading'>Global Crypto Stars</Title>
            <Row>
                <Col span={12}> <Statistic title='Total Cryptocurrencies' value={globalStats.total} /></Col>
                <Col span={12}> <Statistic title='Total Exchange' value={millify(globalStats.totalExchanges)} /></Col>
                <Col span={12}> <Statistic title='Total Market Cap' value={millify(globalStats.totalMarketCap)} /></Col>
                <Col span={12}> <Statistic title='Total 24h volume' value={millify(globalStats.total24hVolume)} /></Col>
                <Col span={12}> <Statistic title='Total Markets' value={millify(globalStats.totalMarkets)} /></Col>
            </Row>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Title>
                <Title level={3} className="show-more"><Link to='/cryptocurrencies'>Show more</Link></Title>
            </div>
            <Cryptocurrencies simplified />
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="show-more"><Link to='/news'>Show more</Link></Title>
            </div>
            <News simplified />

        </>
    )
}

export default Homepage