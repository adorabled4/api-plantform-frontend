import React from 'react';
import { Descriptions } from 'antd';

interface Props {
  detail: API.InterfaceDetailVo;
}

const InterfaceDetail: React.FC<Props> = ({ detail }) => {
  return (
    <Descriptions title={detail.name} bordered>
      <Descriptions.Item label="ID">{detail.id}</Descriptions.Item>
      <Descriptions.Item label="URL">{detail.url}</Descriptions.Item>
      <Descriptions.Item label="Method">{detail.method}</Descriptions.Item>
      <Descriptions.Item label="Tag">{detail.tag}</Descriptions.Item>
      <Descriptions.Item label="Is Free">{detail.isFree ? 'Yes' : 'No'}</Descriptions.Item>
      <Descriptions.Item label="Call Times">{detail.callTimes}</Descriptions.Item>
      <Descriptions.Item label="Create Time">{detail.createTime}</Descriptions.Item>
      <Descriptions.Item label="User Name">{detail.userName}</Descriptions.Item>
      <Descriptions.Item label="Background">{detail.background}</Descriptions.Item>
      <Descriptions.Item label="Description">{detail.description}</Descriptions.Item>
      <Descriptions.Item label="Request Header">{detail.requestHeader}</Descriptions.Item>
      <Descriptions.Item label="Request Param">{detail.requestParam}</Descriptions.Item>
      <Descriptions.Item label="Response Header">{detail.responseHeader}</Descriptions.Item>
    </Descriptions>
  );
};

export default InterfaceDetail;
