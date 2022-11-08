import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi';
const {Title} = Typography;

const Homepage = () => {
  const {data, isFetching} = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  console.log(globalStats)
  if(isFetching)return <h1>Loading</h1>
  return (
    <div>
      <Title level={2} className="heading">Global Crypto Stats</Title>
      <Row gutter={[32, 32]}>
        <Col span={12}><Statistic title="Total Cryptocurrencies"  value={globalStats.total}/></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="Total Market Cap:"  value={`$${millify(globalStats.totalMarketCap)}`}/></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={`$${millify(globalStats.total24hVolume)}`}/></Col>
        <Col span={12}><Statistic title="Total coins"  value={globalStats.totalCoins}/></Col>
        <Col span={12}><Statistic title="Total Markets"  value={millify(globalStats.totalMarkets)}/></Col>
      </Row>
    </div>
  )
}

export default Homepage
