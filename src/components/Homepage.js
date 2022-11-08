import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Link } from 'react-router-dom';
import {Loader, Cryptocurrencies} from './index';
const {Title} = Typography;

const Homepage = () => {
  const {data, isFetching} = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  
  if(isFetching)return <Loader/>
  return (
    <div>
      <Title level={2} className="heading">Global Crypto Stats</Title>
      <Row gutter={[32, 32]}>
        <Col span={12} key={1}><Statistic title="Total Cryptocurrencies"  value={globalStats?.total}/></Col>
        <Col span={12} key={2}><Statistic title="Total Exchanges" value={millify(globalStats?.totalExchanges)} /></Col>
        <Col span={12} key={3}><Statistic title="Total Market Cap:"  value={`$${millify(globalStats?.totalMarketCap)}`}/></Col>
        <Col span={12} key={4}><Statistic title="Total 24h Volume" value={`$${millify(globalStats?.total24hVolume)}`}/></Col>
        <Col span={12} key={5}><Statistic title="Total coins"  value={globalStats?.totalCoins}/></Col>
        <Col span={12} key={6}><Statistic title="Total Markets"  value={millify(globalStats?.totalMarkets)}/></Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Cryptos In The World</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
      </div>
      <Cryptocurrencies simplified/>
    </div>
  )
}

export default Homepage
