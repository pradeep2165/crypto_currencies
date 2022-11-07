import { Typography, Row, Col, Statistic } from 'antd'
import React from 'react'
const {Title} = Typography;
const Homepage = () => {
  return (
    <div>
      <Title level={2} className="heading">Global Crypto Stats</Title>
      <Row gutter={[32, 32]}>
        <Col span={12}><Statistic title="Total Cryptocurrencies"  value={7869}/></Col>
        <Col span={12}><Statistic title="Total Exchanges"  /></Col>
        <Col span={12}><Statistic title="Total Market Cap:"  /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" /></Col>
        <Col span={12}><Statistic title="Total Cryptocurrencies"  /></Col>
        <Col span={12}><Statistic title="Total Markets"  /></Col>
      </Row>
    </div>
  )
}

export default Homepage
