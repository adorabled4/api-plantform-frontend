import {PlusOutlined, HomeOutlined, ContactsOutlined, ClusterOutlined} from '@ant-design/icons';
import {Card, Col, Divider, Input, message, Modal, Row, Space, Tag, TagType} from 'antd';
import React, {useState, useRef, createContext} from 'react';
import {GridContent} from '@ant-design/pro-layout';
import {useRequest} from 'umi';
import type {RouteChildrenProps} from 'react-router';
import CallCharts from './components/CallCharts';
import {currentUserUsingGET} from "@/services/api-plantform_bankend/yonghuxiangguanjiekou";
import {tabKeyType} from "@/pages/User/AccountCenter/data";
import {history} from "@@/core/history";
import {Button} from "antd/lib";

const operationTabList = [
  {
    key: 'callCharts',
    tab: (
      <span>
        接口调用统计 <span style={{fontSize: 14}}></span>
      </span>
    ),
  },
];


const AccountCenter: React.FC<RouteChildrenProps> = () => {


  const [tabKey, setTabKey] = useState<tabKeyType>('articles');
  const [showKeys, setShowKeys] = useState(false);
  const [showSecretKey, setShowSecretKey] = useState(false);

  const copyRef = useRef(false);
  const [isAKCopied, setAKIsCopied] = useState(false);
  const [isSKCopied, setSKIsCopied] = useState(false);

  const handleCopy = (text: string, setIsCopied: React.Dispatch<React.SetStateAction<boolean>>) => () => {
    navigator.clipboard.writeText(text)
      .then(() => setIsCopied(true))
      .catch((error) => console.error('Failed to copy text: ', error));
  };

  const handleShowSK = () => {
    setShowSecretKey(true);
  };

  // 关闭弹窗
  const handleClose = () => {
    setShowKeys(false);
    setShowSecretKey(false);
    setAKIsCopied(false);
    setSKIsCopied(false);
  };
  //  获取用户信息
  const {data: currentUser, loading} = useRequest(() => {
    return currentUserUsingGET();
  });

  //  渲染用户信息
  const renderUserInfo = ({userName, userAccount}: Partial<API.UserVo>) => {
    return (
      // <div className={styles.detail}>
      <div>
        <p>
          <ContactsOutlined
            style={{
              marginRight: 8,
            }}
          />
          {userName}
        </p>
        <p>
          <ClusterOutlined
            style={{
              marginRight: 8,
            }}
          />
          {userAccount}
        </p>
      </div>
    );
  };

  // 渲染tab切换
  const renderChildrenByTabKey = (tabValue: tabKeyType) => {
    if (tabValue === 'callCharts') {
      return (<CallCharts/>);
    } else {
      return (<CallCharts/>);
    }
  };

  // 点击“申请专属AccessKey/SecretKey”按钮时触发，切换弹窗显示状态
  const handleShowKeys = () => {
    setShowKeys(true);
  };

  const ShowAKSK = (currentUser: API.UserVo) => {
    return (
      <Modal title="Please save your AK/SK carefully!!" visible={showKeys} onCancel={handleClose}
             footer={[<Button key="ok" onClick={handleClose}>OK</Button>]}>
        <Card style={{backgroundColor: '#fff', padding: '20px'}}>
          <Button onClick={handleShowSK}>查看 SecretKey</Button>
          <p>AccessKey: <Tag color={'#F23A1A'}>{currentUser.accessKey}</Tag>
            <Button ref={copyRef} onClick={handleCopy(currentUser.accessKey,setAKIsCopied)}>{isAKCopied ? '已复制' : '复制AK'}</Button>
          </p>
          {currentUser.secretKey && showSecretKey && (
            <div style={{marginTop: 20}}>
              <p>SecretKey: <Tag color={'#F23A1A'}>{currentUser.secretKey}</Tag>
                <Button ref={copyRef} onClick={handleCopy(currentUser.secretKey,setSKIsCopied)}>{isSKCopied ? '已复制' : '复制SK'}</Button>
              </p>
            </div>
          )}
        </Card>
      </Modal>
    );
  };
  return (
    <GridContent>
      <Row gutter={24}>
        <Col lg={7} md={24}>
          <Card bordered={false} style={{
            height: 505,
            marginBottom: 24,
            marginLeft: 72,
            background: 'linear-gradient(to bottom, #87CEFA, #FFC0CB)'
          }} loading={loading}>
            {!loading && currentUser && (
              <div style={{marginLeft: 22}}>
                <div>
                  <div style={{}}>
                    <img alt="" src={currentUser.avatarUrl} style={{
                      objectFit: 'cover',
                      width: '104px',
                      height: '104px',
                      marginBottom: '20px',
                      borderRadius: '23px' // 图片宽度的一半
                    }}/>
                  </div>
                  {renderUserInfo(currentUser)}
                  <Tag color={'#453Fab'}>{currentUser?.gender === 1 ? "男" : "女"}丨{currentUser.phone}</Tag>
                  <br/>
                  <div style={{marginTop: 10}}>
                    <Tag color={'#F23A1A'}>邮箱: {currentUser.email}</Tag>
                  </div>
                  <div style={{marginTop: 20}}>
                    <Button color={'#F23A1A'} onClick={handleShowKeys}>申请专属AccessKey/SecretKey</Button>
                  </div>
                  <br/>
                </div>
                <Divider dashed/>
                <Divider style={{marginTop: 16}} dashed/>
                {/* onCancel={() => setShowKeys(false)}*/}
                {ShowAKSK(currentUser)}
              </div>
            )}
          </Card>
        </Col>
        <Col lg={17} md={24}>
          <Card
            bordered={false}
            tabList={operationTabList}
            defaultActiveTabKey={'callCharts'}
            activeTabKey={tabKey}
            onTabChange={(_tabKey: string) => {
              setTabKey(_tabKey as tabKeyType);
            }}
          >
            {renderChildrenByTabKey(tabKey)}
          </Card>
        </Col>
      </Row>
    </GridContent>
  );
};
export default AccountCenter;
