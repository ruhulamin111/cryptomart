import { Card, Col, Row } from 'antd'
import millify from 'millify'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoAPI'

const Cryptocurrencies = ({ simplified }) => {
    const count = simplified ? 10 : 100;
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count)
    const [cryptos, setCryptos] = useState(cryptosList?.data?.coins)
    if (isFetching) return 'Loading...'

    return (
        <>
            <Row gutter={[32, 32]} className='crypto-card-container'>
                {cryptos?.map((currency, index) => (
                    <Col xs={24} sm={12} lg={6} className='crypto-card' key={index}>
                        <Link to={`/crypto/${currency.id}`}>
                            <Card title={`${currency.rank}. ${currency.name}`} extra={<img className='crypto-image' src={currency.iconUrl} alt='' />} hoverable>
                                <p>Price : {millify(currency.price)}</p>
                                <p>Market Cap : {millify(currency.marketCap)}</p>
                                <p>Daily Change : {millify(currency.change)} %</p>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Cryptocurrencies;
