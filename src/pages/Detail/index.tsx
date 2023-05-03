import React, {useEffect, useState} from 'react';
import {
  getInterfaceDetailUsingGET,
  invokeInterfaceOLUsingPOST
} from '@/services/api-plantform_bankend/interfacekongzhiceng';
import {useParams} from "react-router";
import InterfaceDetail from "@/components/DIY/InterfaceDetail/InterfaceDetail";
import {Button, Card, Divider, Form, Input, message} from 'antd';
import {history} from "@@/core/history";
import { Space, Spin } from 'antd';

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
    createTime: '2023-05-01T01:41:17.000+00:00'
  });

  const params = useParams();
  const [invokeResult, setInvokeResult] = useState<any>();
  const [invokeLoading, setInvokeLoading] = useState(false);
  const [interfaceLoading, setInterfaceLoading] = useState(true);


  const {id} = useParams<{ id?: string }>(); // 将类型定义修改为{id?: string}
  useEffect(() => {
    async function fetchDetailData() {
      if (id) {
        const response = await getInterfaceDetailUsingGET(id);
        setDetailData(response.data);
      }
    }
    fetchDetailData();
  }, [id]);

  return (
    <div>
      <InterfaceDetail detail={detailData} />
    </div>
  );
};
export default Detail;
