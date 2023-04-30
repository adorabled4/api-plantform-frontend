import SiderTop from '@/components/DIY/SiderTop';
import SlideShow from '@/components/DIY/SlideShow/SlideShow';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Card, Col, Row, theme } from 'antd';
import React, { useState } from 'react';

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
}> = ({ title, href, index, desc }) => {
  const { useToken } = theme;

  const { token } = useToken();

  // 定义鼠标悬停时的样式
  const hoverStyle = {
    transform: 'translateY(-5px) scale(1.05) rotate(-1deg)',
    boxShadow: '0px 16px 24px rgba(0, 0, 0, 0.2)',
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        backgroundColor: token.colorBgContainer,
        borderRadius: '8px',
        fontSize: '14px',
        color: token.colorTextSecondary,
        lineHeight: '22px',
        padding: '16px 19px',
        minWidth: '220px',
        flex: 1,
        transform: 'rotate(-1deg)',
        boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease-in-out',
        ...(isHovered && hoverStyle),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
            borderRadius: '50%',
            backgroundColor: token.colorBgPrimary,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '24px',
            fontWeight: 600,
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          {index}
        </div>
        <div style={{ fontWeight: 500 }}>{title}</div>
      </div>
      <div style={{ marginTop: '12px' }}>{desc}</div>
      <div
        style={{
          marginTop: '12px',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: token.colorTextLink }}
        >
          Learn more
        </a>
      </div>
    </div>
  );
};

const Welcome: React.FC = () => {
  const { token } = theme.useToken();
  const { initialState } = useModel('@@initialState');
  return (
    //  padding 调整页面 两边的间距
    <PageContainer style={{ padding: '0 128px' }}>
      <div>
        <Row gutter={0}>
          <Col span={16}>
            <div style={{ height: '65vh', marginRight: '-200px' }}>
              <SlideShow />
              {/*  幻灯片 */}
            </div>
          </Col>
          <Col span={8}>
            <div style={{ height: '60vh', marginLeft: '-28px' }}>
              <SiderTop />
              {/*  接口调用榜单 */}
            </div>
          </Col>
        </Row>
      </div>
      <div></div>
      <Card
        style={{
          borderRadius: 8,
        }}
        bodyStyle={{
          backgroundImage:
            initialState?.settings?.navTheme === 'realDark'
              ? 'background-image: linear-gradient(75deg, #1A1B1F 0%, #191C1F 100%)'
              : 'background-image: linear-gradient(75deg, #FBFDFF 0%, #F5F7FF 100%)',
        }}
      >
        <div
          style={{
            backgroundPosition: '100% -30%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '274px auto',
            backgroundImage:
              "url('https://gw.alipayobjects.com/mdn/rms_a9745b/afts/img/A*BuFmQqsB2iAAAAAAAAAAAAAAARQnAQ')",
          }}
        >
          <div
            style={{
              fontSize: '20px',
              color: token.colorTextHeading,
            }}
          >
            欢迎使用 TurboAPI
          </div>
          <p
            style={{
              fontSize: '14px',
              color: token.colorTextSecondary,
              lineHeight: '22px',
              marginTop: 16,
              marginBottom: 32,
              width: '65%',
            }}
          >
            Ant Design Pro 是一个整合了 umi，Ant Design 和 ProComponents
            的脚手架方案。致力于在设计规范和基础组件的基础上，继续向上构建，提炼出典型模板/业务组件/配套设计资源，进一步提升企业级中后台产品设计研发过程中的『用户』和『设计者』的体验。
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            <InfoCard
              index={1}
              href="https://umijs.org/docs/introduce/introduce"
              title="了解 umi"
              desc="umi 是一个可扩展的企业级前端应用框架,umi 以路由为基础的，同时支持配置式路由和约定式路由，保证路由的功能完备，并以此进行功能扩展。"
            />
            <InfoCard
              index={2}
              title="了解 ant design"
              href="https://ant.design"
              desc="antd 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。"
            />
            <InfoCard
              index={3}
              title="了解 Pro Components"
              href="https://procomponents.ant.design"
              desc="ProComponents 是一个基于 Ant Design 做了更高抽象的模板组件，以 一个组件就是一个页面为开发理念，为中后台开发带来更好的体验。"
            />
          </div>
        </div>
      </Card>
    </PageContainer>
  );
};

export default Welcome;
