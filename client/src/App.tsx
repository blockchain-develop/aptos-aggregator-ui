import {Layout, Button, Col, Row } from 'antd';
import { useState, useEffect } from 'react';
import { WalletSelector } from '@aptos-labs/wallet-adapter-ant-design';
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import { Provider, Network } from 'aptos';
import { useWallet } from '@aptos-labs/wallet-adapter-react';

const provider = new Provider(Network.DEVNET)


function App() {
  const { account } = useWallet();
  useEffect(() => {
    fetchList();
  }, [account?.address]);
  const [accountHasList, setAccountHasList] = useState<Boolean>(false);

  const fetchList = async() => {
    if (!account) return [];
    const moduleAddress = "0xcbddf398841353776903dbab2fdaefc54f181d07e114ae818b1a67af28d1b018";
    try {
      const ToolListResource = await provider.getAccountResource(account.address, `${moduleAddress}::todolist::TodoList`);
      setAccountHasList(true);
    } catch(e: any) {
      setAccountHasList(false);
    }
  }

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
      {!accountHasList && (
        <Row gutter={[0, 32]} style={{marginTop: "2rem"}}>
          <Col span={8} offset={8}>
            <Button block type="primary" style={{height:"40px", backgroundColor:"#3f67ff"}}>
              Add new list
            </Button>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default App;
