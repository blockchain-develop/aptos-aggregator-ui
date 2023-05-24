import { Col, Row } from 'antd';
import Layout from 'antd/es/layout/layout';
import React from 'react';
import { WalletSelector } from '@aptos-labs/wallet-adapter-ant-design';
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";

function App() {
  return (
    <div>
      <Layout>
        <Row align="middle">
          <Col span={10} offset={2}>
            <h1> Our todolist</h1>
          </Col>
          <Col span={12} style={{textAlign: "right", paddingRight: "200px"}}>
            <h1> Connect Wallet</h1>
          </Col>
          <Col span={12} style={{textAlign: "right", paddingRight: "200px"}}>
            <WalletSelector />
          </Col>
        </Row>
      </Layout>
    </div>
  );
}

export default App;
