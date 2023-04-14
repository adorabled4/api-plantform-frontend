import {PageContainer} from '@ant-design/pro-components';
import {Card, theme, message} from 'antd';
import React, {useState, useEffect} from 'react';
import {getInterfaceListUsingGET} from '@/services/api-plantform_bankend/interfacekongzhiceng';
import {useModel} from "@umijs/max";

/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */
const InfoCard: React.FC<{
  title: string;
  index: number;
  desc: string;
  href: string;
}> = ({title, href, index, desc}) => {
  const {useToken} = theme;

  const {token} = useToken();

  return (
    <div
      style={{
        backgroundColor: token.colorBgContainer,
        boxShadow: token.boxShadow,
        borderRadius: '8px',
        fontSize: '14px',
        color: token.colorTextSecondary,
        lineHeight: '22px',
        padding: '16px 19px',
        minWidth: '220px',
        flex: 1,
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '4px',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            lineHeight: '22px',
            backgroundSize: '100%',
            textAlign: 'center',
            padding: '8px 16px 16px 12px',
            color: '#FFF',
            fontWeight: 'bold',
            backgroundImage:
              "url('https://gw.alipayobjects.com/zos/bmw-prod/daaf8d50-8e6d-4251-905d-676a24ddfa12.svg')",
          }}
        >
          {index}
        </div>
        <div
          style={{
            fontSize: '16px',
            color: token.colorText,
            paddingBottom: 8,
          }}
        >
          {title}
        </div>
      </div>
      <div
        style={{
          fontSize: '14px',
          color: token.colorTextSecondary,
          textAlign: 'justify',
          lineHeight: '22px',
          marginBottom: 8,
        }}
      >
        {desc}
      </div>
      <a href={href} target="_blank" rel="noreferrer">
        了解更多 {'>'}
      </a>
    </div>
  );
};

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
      pageSize: 9,
    };
    getInterfaceListUsingGET(params)
      .then((res) => {
        if (res && res.data) {
          setInterfaceData((prevData) => prevData.concat(res.data)); // 将新数据和之前已有的数据合并
        }
      })
      .catch((err) => {
        message.error('请求失败！'+err.description);
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
    }
  }

  return (
    <PageContainer>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onScroll={handleScroll}
      >
        {interfaceData.map((item, index) => (
          <InfoCard
            title={item.title}
            desc={item.description}
            href={item.url}
            index={index + 1}
            key={item.id}
          />
        ))}
        {interfaceData.length > 0 && (
          <Card
            bordered={false}
            style={{
              backgroundColor: token.colorBgContainer,
              boxShadow: token.boxShadow,
              borderRadius: '8px',
              fontSize: '14px',
              color: token.colorTextSecondary,
              lineHeight: '22px',
              padding: '16px 19px',
              minWidth: '300px',
              flex: 1,
            }}
          >
            加载中...
          </Card>
        )}
      </div>
    </PageContainer>
  );
};

export default Welcome;
