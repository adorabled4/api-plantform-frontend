import InterfaceDetail from '@/components/DIY/InterfaceDetail/InterfaceDetail';
import {
  getInterfaceDetailUsingGET,
  invokeInterfaceOLUsingPOST,
} from '@/services/api-plantform_bankend/interfacekongzhiceng';
import { history } from '@@/core/history';
import { Button, Card, Divider, Form, Input, message, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Detail: React.FC = () => {
  const [detailData, setDetailData] = useState<API.InterfaceDetailVo>({
    id: 1001,
    name: '随机诗句',
    description: '',
    isFree: 1,
    url: 'http://localhost:88/dev-api/api/apiinterface/poet/random',
    method: 'GET',
    requestParam: '{}',
    requestHeader: '{}',
    responseHeader: '{}',
    userName: '前端菜狗在线踩坑',
    callTimes: 154,
    tag: '趣味娱乐',
    background: 'http://oss.dhx.icu/dhx/poet.png',
    createTime: '2023-05-01T01:41:17.000+00:00',
  });

  const params = useParams();
  const [invokeResult, setInvokeResult] = useState<any>();
  const [invokeLoading, setInvokeLoading] = useState(false);
  const [interfaceLoading, setInterfaceLoading] = useState(true);

  const { id } = useParams<{ id?: string }>(); // 将类型定义修改为{id?: string}
  useEffect(() => {
    async function fetchDetailData() {
      if (id) {
        const response = await getInterfaceDetailUsingGET(id);
        if (response.data) {
          setDetailData(response.data);
          setInterfaceLoading(false);
        } else {
          history.push(`/404`);
        }
      }
    }

    fetchDetailData();
  }, [id]);

  // 在线调用接口
  const onFinish = async (values: any) => {
    if (!params.id) {
      message.error('接口不存在');
      return;
    }
    try {
      const requestBody = {
        interfaceId: id,
        params: null,
      };
      try {
        // 如果用户输入了参数 ,那么进行赋值以及相应的转换
        if (values.params) {
          console.log(values.params);
          requestBody.params = JSON.parse(JSON.stringify(values.params));
        }
      } catch (error: any) {
        console.log(error);
        message.error('请输入正确的JSON格式参数!');
        return;
      }
      // 这里需要取出values的params,  因为value 本身通过表单传输, 类似于一个map
      // console.log(values.params)
      setInvokeLoading(true);
      console.log('requestBody: ', requestBody);
      const response = await invokeInterfaceOLUsingPOST(requestBody);
      console.log(response);
      setInvokeResult(response.data);
      // message.success('请求成功');
    } catch (error: any) {}
    setInvokeLoading(false);
  };

  return (
    <div>
      <Spin size={'large'} spinning={interfaceLoading}>
        <InterfaceDetail detail={detailData} />
      </Spin>
      <Divider />
      <Card title="在线测试">
        <Form name="invoke" layout="vertical" onFinish={onFinish}>
          <Form.Item label="请求参数" name="params">
            <Input.TextArea defaultValue={'请输入JSON格式参数~~'} />
          </Form.Item>
          <Form.Item wrapperCol={{ span: 16 }}>
            <Button type="primary" htmlType="submit">
              调用
            </Button>
          </Form.Item>
          {/*<Form.Item>*/}
          {/*  <ReactJson name={"参数格式预览"} src={JSON.parse(formValues.params as string)} theme={"google"}/>*/}
          {/*</Form.Item>*/}
        </Form>
      </Card>
      <Divider />
      <Card title="返回结果" loading={invokeLoading}>
        <div>
          <p>返回结果：</p>
          <pre>{JSON.stringify(invokeResult, null, 2)}</pre>
        </div>
      </Card>
    </div>
  );
};
export default Detail;
