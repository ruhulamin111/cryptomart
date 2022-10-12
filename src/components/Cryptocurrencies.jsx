import { Card, Col, Row } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoAPI'

const Cryptocurrencies = () => {
    const { data: cryptosList, isFetching } = useGetCryptosQuery()
    const [cryptos, setCryptos] = useState(cryptosList?.data?.coins)
    console.log(cryptos);

    return (
        <>
            <Row gutter={[32, 32]} className='crypto-card-container'>
                {cryptos.map((currency, index) => (
                    <Col xs={24} sm={12} lg={6} className='crypto-card' key={index}>
                        <Link to={`/crypto/${currency.id}`}>
                            <Card title={`${currency.rank}. ${currency.name}`} extra={<img className='crypto-image' src={currency.iconUrl} alt='' />}>

                            </Card>
                        </Link>
                    </Col>
                ))}

            </Row>
        </>
    )
}

export default Cryptocurrencies