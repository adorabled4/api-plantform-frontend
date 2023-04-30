import {PageContainer, ProCard} from '@ant-design/pro-components';
import {theme, message} from 'antd';
import React, {useState, useEffect} from 'react';
import {getInterfaceListUsingGET} from '@/services/api-plantform_bankend/interfacekongzhiceng';
import {useModel} from '@umijs/max';
import Button from 'antd/lib/button';
import BasicInfo from "@/components/DIY/InterfaceInfo/InterfaceInfo";

const Welcome: React.FC = () => {
  const {token} = theme.useToken();
  const {initialState} = useModel('@@initialState');
  const [interfaceData, setInterfaceData] = useState<any[]>([]); // 定义存储接口数据的state
  const [page, setPage] = useState<number>(1); // 当前页数

  useEffect(() => {
    fetchData(page); // 初始化页面时立即调用接口获取数据
  }, []);

  function fetchData(page: number) {
    const params = {
      current: page,
      pageSize: 10,
    };
    getInterfaceListUsingGET(params)
      .then((res) => {
        if (res && res.data) {
          // @ts-ignore 取消该处的语法提示
          setInterfaceData((prevData) =>
            page === 1 ? res.data : prevData.concat(res.data)
          ); // 根据当前页数，更新接口数据
        }
      })
      .catch((err) => {
        message.error('请求失败！' + err.description);
      });
  }

  function handleScroll() {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop; // 获取滚动条垂直偏移量
    const windowHeight =
      document.documentElement.clientHeight || document.body.clientHeight; // 获取窗口高度
    const scrollHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight; // 获取文档总高度

    if (scrollTop + windowHeight >= scrollHeight - 20) {
      setPage((prevPage) => prevPage + 1); // 更新页数
      fetchData(page + 1); // 加载更多数据
    }
  }

  return (
    <div style={{height: '100vh', overflowY: 'auto'}}>
      <PageContainer style={{height: "100%"}}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
          onScrollCapture={handleScroll}
        >
          {interfaceData.map((item, index) => (
              <BasicInfo data={item}/>
          ))}
          <div/>
          {interfaceData.length > 0 && (
            <ProCard
              bordered={false}
              style={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                minWidth: "300px",
                flexBasis: "48%",
                marginBottom: "16px",
              }}
            >
              加载中...
            </ProCard>
          )}
        </div>
      </PageContainer>
    </div>
  );
};

export default Welcome;
