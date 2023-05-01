import React, {useState} from 'react';
import {Card, Col, Descriptions, Modal, Row, Tag} from 'antd';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import jsonFormat from 'json-format';
interface Props {
  detail: API.InterfaceDetailVo;
}


const InterfaceDetail: React.FC<Props> = ({detail}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleImageClick = () => {
    setModalVisible(true);
  };

  return (
    <Card title={detail.name}>
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
            <Descriptions.Item label="分类">{detail.tag}</Descriptions.Item>
            <Descriptions.Item label="Is Free">
              <Tag color={detail.isFree ? '#5BD8A6' : '#FFC107'}>{detail.isFree ? '免费' : '付费'}</Tag>
            </Descriptions.Item>
            <Descriptions.Item label="发布者">{detail.userName}</Descriptions.Item>
            <Descriptions.Item label="请求头">
              <SyntaxHighlighter language="json" style={atomDark}>
                {JSON.stringify(detail.requestHeader, null, 4)}
              </SyntaxHighlighter>
            </Descriptions.Item>
            <Descriptions.Item label="请求参数">
              <SyntaxHighlighter language="json" style={atomDark}>
                {JSON.stringify(detail.requestParam, null, 4)}
              </SyntaxHighlighter>
            </Descriptions.Item>
            <Descriptions.Item label="响应头">
              <SyntaxHighlighter language="json" style={atomDark}>
                {JSON.stringify(detail.responseHeader, null, 4)}
              </SyntaxHighlighter
              ></Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </Card>
  );
};

export default InterfaceDetail;
