import { Col, Row } from 'antd';
import Layout from 'antd/es/layout/layout';
import React from 'react';

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
        </Row>
      </Layout>
    </div>
  );
}

export default App;
