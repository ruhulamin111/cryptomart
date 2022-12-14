import { Avatar, Card, Col, Row, Typography } from 'antd'
import moment from 'moment';
import React from 'react'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsAPI';
const { Text, Title } = Typography;

const News = ({ simplified }) => {
    const { data: cryptoNews } = useGetCryptoNewsQuery()
    if (!cryptoNews?.value) return 'Loading...';

    return (
        <>
            <Row gutter={[24, 24]}>
                {cryptoNews.value.map((news, index) => (
                    <Col key={index} xs={24} sm={12} lg={8}>
                        <Card hoverable className='news-card'>
                            <a target='_blank' href={news.url} rel="noreferrer">
                                <div className='news-image-container'>
                                    <Title className='news-title' level={4}>{news.name.slice(0, 20)}</Title>
                                    <img src={news?.image?.thumbnail?.contentUrl || 'no image'} alt="" style={{ maxWidth: '200px', maxHeight: '100px' }} />
                                </div>
                                <p>
                                    {news.description > 100 ? `${news.description.subString(0, 100)}...` : news.description}
                                </p>
                                <div className='provider-container'>
                                    <div>
                                        <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl} />
                                        <Text className='provider-name'>{news?.provider[0]?.name}</Text>
                                    </div>
                                    <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                                </div>
                            </a>
                        </Card>
                    </Col>))}
            </Row>
        </>
    )
}

export default News; 