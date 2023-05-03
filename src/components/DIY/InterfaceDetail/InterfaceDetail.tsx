import React, {useEffect, useState} from 'react';
import {Card, Col, Descriptions, message, Modal, Row, Tag} from 'antd';
import {atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactJson from 'react-json-view'

interface Props {
  detail: API.InterfaceDetailVo;
}


const InterfaceDetail: React.FC<Props> = ({detail}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleImageClick = () => {
    setModalVisible(true);
  };
  let {requestHeader, requestParam, responseHeader} = detail;
  try {
    requestHeader = JSON.parse(detail.requestHeader as string)
    responseHeader = JSON.parse(detail.responseHeader as string)
    requestParam = JSON.parse(detail.requestParam as string)
  } catch (error) {
    // message.error("服务器内部异常")
  }

  return (
    <Card title={detail.name} >
      <Row gutter={16} justify="center" align="middle">
        <Col xs={24} sm={24} md={10} lg={8} xl={6}>
          <div style={{textAlign: 'center'}}>
            <img
              src={detail.background}
              alt={detail.name}
              style={{maxWidth: '100%', height: 'auto', cursor: 'pointer'}}
              onClick={handleImageClick}
            />
            <Modal visible={modalVisible} footer={null} onCancel={() => setModalVisible(false)}>
              <img
                src={detail.background}
                alt={detail.name}
                style={{maxWidth: '150%', maxHeight: '80vh'}}
              />
            </Modal>
          </div>
        </Col>
        <Col xs={24} sm={24} md={14} lg={16} xl={18}>
          <Descriptions bordered column={1}>
            {/*<Descriptions.Item label="接口服务名称">{detail.name}</Descriptions.Item>*/}
            <Descriptions.Item label="描述">{detail.description}</Descriptions.Item>
            <Descriptions.Item label="接口地址">{detail.url}</Descriptions.Item>
            <Descriptions.Item label="请求方法"><Tag
              color={detail.method == "GET" ? '#1E90FF' : '#00FF7F'}>{detail.method}</Tag> </Descriptions.Item>
            <Descriptions.Item label="接口分类">{detail.tag}</Descriptions.Item>
            <Descriptions.Item label="是否免费">
              <Tag color={detail.isFree ? '#5BD8A6' : '#FFC107'}>{detail.isFree ? '免费' : '付费'}</Tag>
            </Descriptions.Item>
            <Descriptions.Item label="发布者">{detail.userName}</Descriptions.Item>
            <Descriptions.Item label="请求头">
              <ReactJson language={'json'} style={atomDark} name={'请求头'} src={requestHeader}/>
            </Descriptions.Item>
            <Descriptions.Item label="请求参数">
              <ReactJson language="json" style={atomDark} name={'请求参数'} src={requestParam}/>
            </Descriptions.Item>
            <Descriptions.Item label="响应头">
              <ReactJson language="json" style={atomDark} name={'响应头'} src={responseHeader}/>
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </Card>
  );
};

export default InterfaceDetail;
