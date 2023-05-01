import SiderTop from '@/components/DIY/SiderTop';
import SlideShow from '@/components/DIY/SlideShow/SlideShow';
import {PageContainer} from '@ant-design/pro-components';
import {useModel} from '@umijs/max';
import {Button, Card, Col, message, Row, theme} from 'antd';
import React, {useEffect, useState} from 'react';
import {getInterfaceListUsingGET} from "@/services/api-plantform_bankend/interfacekongzhiceng";

/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */
type InterfaceBasicInfoProps = {
  data: API.InterfaceBasicInfoVo; // InterfaceBasicInfoVo 类型的数据
};
const InfoCard: React.FC<InterfaceBasicInfoProps> = ({data}) => {
  const {id, name = '', isFree = 0, method = '', description = '', createTime = '', userName = ''} = data ?? {};
  const {useToken} = theme;
  const {token} = useToken();
  // 定义鼠标悬停时的样式
  const hoverStyle = { // transform 是变歪
    transform: 'translateY(-5px) scale(1.05) rotate(-0deg)',
    boxShadow: '0px 16px 24px rgba(0, 0, 0, 0.2)',
  };
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      style={{
        // backgroundColor: token.colorBgContainer,
        borderRadius: '8px',
        minHeight:'25vh',
        fontSize: '14px',
        color: token.colorTextSecondary,
        lineHeight: '22px',
        padding: '16px 19px',
        minWidth: '220px',
        flex: 1,
        transform: 'rotate(-0deg)',
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
          {id}
        </div>
        <div style={{fontWeight: 500}}>{name}</div>
      </div>
      <div style={{marginTop: '12px'}}>{description}</div>
      <div
        style={{
          marginTop: '12px',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <a
          href={id}
          target="_blank"
          rel="noopener noreferrer"
          style={{color: token.colorTextLink}}
        >
          Learn more
        </a>
      </div>
    </div>
  );
};

const Index: React.FC = () => {
  const {token} = theme.useToken();
  const {initialState} = useModel('@@initialState');
  // 获取接口 信息
  const [interfaceData, setInterfaceData] = useState<any[]>([]); // 定义存储接口数据的state
  const [page, setPage] = useState<number>(1); // 当前页数
  useEffect(() => {
    fetchData(page); // 初始化页面时立即调用接口获取数据
  }, []);

  function fetchData(page: number) {
    const params = {
      current: page,
      pageSize: 12,
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

  return (
    //  padding 调整页面 两边的间距
    // backgroundColor:'linear-gradient(to right, #00bBBB, #100Fff)'
    <PageContainer style={{
      padding: '0 16px',
      background: 'linear-gradient(to bottom, #a2d5f2, #f9b7c3, #fddcc4, #a2d5f2)',
      maxWidth: '18000px',
    }}>
      <div style={{
        backgroundColor: '#F0F8FF',
        padding: '24px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'left',
        border: '3px solid #E6E6FA',
      }}>
        <h2 style={{marginBottom: '16px'}}>欢迎使用TurboAPI!</h2>
        <p style={{fontSize: '18px', lineHeight: '1.5',alignContent:'left',backgroundColor:'a2d5f2'}}>
          「TurboAPI」是一款高效、可靠和安全的接口开放平台后端，为广大用户提供高质量、可靠、安全的接口服务，帮助用户轻松实现各种功能和数据交互，提高工作效率和用户体验。我们致力于通过高端的技术和优质的服务，为您的业务发展提供坚实的支持和保障。无论您是企业用户还是个人用户，「TurboAPI」都能为您提供最佳的接口解决方案。
        </p>
      </div>
      <br/>
      <div>
        <Row gutter={0}>
          <Col span={15}>
            <div style={{height: '70vh', marginRight: '-150px'}}>
              <SlideShow/>
              {/*  幻灯片 */}
            </div>
          </Col>
          <Col span={9}>
            <div style={{height: '65vh', marginLeft: '-30px'}}>
              <SiderTop/>
              {/*  接口调用榜单 */}
            </div>
          </Col>
        </Row>
      </div>
      <div>
        {}
      </div>
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
            fontFamily: 'cursive', // 将字体系列设置为草书体，使其更有趣
            fontSize: '28px', // 将字体大小设置为28像素
            fontWeight: 'bold', // 将字体粗细程度设置为粗体
            color: 'white', // 将文本颜色设置为白色，以便与渐变背景产生对比
            background: 'linear-gradient(135deg, #f7b733 0%, #fc4a1a 100%, #13547a 100%)', // 将背景颜色设置为渐变的阳光橘子玻璃气水色
            border: 'none', // 去掉边框
            borderRadius: '5px', // 圆角半径为5像素
            padding: '10px', // 内边距为10像素
            display: 'inline-block', // 将元素设置为行内块级元素
            transition: 'transform 0.2s ease-in-out', // 添加一个过渡动画效果
            marginLeft: '10px', // 添加10像素的左边距以分隔两个元素
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)', // 添加文本阴影效果，使其更有趣
            letterSpacing: '4px', // 添加更大的字母间距，使其更有趣
            textTransform: 'uppercase', // 将文本转换为大写字母，使其更有趣
            }}
        >
          知识类接口 Question API
        </div>


        <p
          style={{
            fontSize: '14px',
            color: token.colorTextSecondary,
            lineHeight: '22px',
            marginTop: 16,
            marginBottom: 32,
            width: '65%',
            // background: 'linear-gradient(135deg, #f7b733, #fc4a1a)',
            // WebkitBackgroundClip: 'text',
            // WebkitTextFillColor: 'transparent',
            // animation: 'flow 5s linear infinite',
          }}
        >
          旨在提供与人工智能相关的知识和信息。这些接口可以帮助开发人员在应用程序中集成各种人工智能技术，例如自然语言处理、机器学习、语音识别、图像识别等等。
        </p>
        <Row style={{maxWidth: '15000px'}}>
          <Col span={7} style={{marginRight: '16px'}}>
            <InfoCard data={interfaceData[0]}/>
          </Col>
          <Col span={7} style={{marginRight: '16px'}}>
            <InfoCard data={interfaceData[1]}/>
          </Col>
          <Col span={7} style={{marginRight: '16px'}}>
            <InfoCard data={interfaceData[2]}/>
          </Col>
        </Row>
      </div>
      <br/>
      <br/>
      {/*=================================================================================================*/}
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
            fontFamily: 'cursive', // 将字体系列设置为草书体，使其更有趣
            fontSize: '28px', // 将字体大小设置为28像素
            fontWeight: 'bold', // 将字体粗细程度设置为粗体
            color: 'white', // 将文本颜色设置为白色，以便与渐变背景产生对比
            background: 'linear-gradient(135deg, #ff69b4 0%, #00bfff 100%)', // 将背景颜色设置为渐变粉蓝色
            border: 'none', // 去掉边框
            borderRadius: '5px', // 圆角半径为5像素
            padding: '10px', // 内边距为10像素
            display: 'inline-block', // 将元素设置为行内块级元素
            transition: 'transform 0.2s ease-in-out', // 添加一个过渡动画效果
            marginLeft: '10px', // 添加10像素的左边距以分隔两个元素
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)', // 添加文本阴影效果，使其更有趣
            letterSpacing: '4px', // 添加更大的字母间距，使其更有趣
            textTransform: 'uppercase', // 将文本转换为大写字母，使其更有趣
          }}
        >
          功能类接口 Function API
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
          旨在提供各种实用功能和服务，例如地理位置、支付、电子邮件、短信、推送通知等。这些接口可以帮助开发人员快速集成应用程序所需的功能，而无需从头开始构建。
        </p>
        <Row style={{maxWidth: '15000px'}}>
          <Col span={7} style={{marginRight: '16px'}}>
            <InfoCard data={interfaceData[3]}/>
          </Col>
          <Col span={7} style={{marginRight: '16px'}}>
            <InfoCard data={interfaceData[4]}/>
          </Col>
          <Col span={7} style={{marginRight: '16px'}}>
            <InfoCard data={interfaceData[5]}/>
          </Col>
        </Row>
      </div>
      <br/>
      <br/>

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
            fontFamily: 'cursive', // 将字体系列设置为草书体，使其更有趣
            fontSize: '28px', // 将字体大小设置为28像素
            fontWeight: 'bold', // 将字体粗细程度设置为粗体
            color: 'white', // 将文本颜色设置为白色，以便与渐变背景产生对比
            background: 'linear-gradient(135deg, #86a8e7 0%, #7f7fd5 100%)', // 将背景颜色设置为渐变的水草科技蓝天金鱼色
            border: 'none', // 去掉边框
            borderRadius: '5px', // 圆角半径为5像素
            padding: '10px', // 内边距为10像素
            display: 'inline-block', // 将元素设置为行内块级元素
            transition: 'transform 0.2s ease-in-out', // 添加一个过渡动画效果
            marginLeft: '10px', // 添加10像素的左边距以分隔两个元素
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)', // 添加文本阴影效果，使其更有趣
            letterSpacing: '4px', // 添加更大的字母间距，使其更有趣
            textTransform: 'uppercase', // 将文本转换为大写字母，使其更有趣
          }}
        >
          智能类接口 Intellect API
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
          旨在提供各种智能服务和功能，例如情感分析、语音识别、人脸识别、自然语言处理、推荐系统等。这些接口可以帮助开发人员构建智能化应用程序，提供更加智能的体验和服务。
        </p>
        <Row style={{maxWidth: '15000px'}}>
          <Col span={7} style={{marginRight: '16px'}}>
            <InfoCard data={interfaceData[6]}/>
          </Col>
          <Col span={7} style={{marginRight: '16px'}}>
            <InfoCard data={interfaceData[7]}/>
          </Col>
          <Col span={7} style={{marginRight: '16px'}}>
            <InfoCard data={interfaceData[8]}/>
          </Col>
        </Row>
      </div>
      {/*</Card>*/}
      <br/>
      <br/>
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
            fontFamily: 'cursive',
            fontSize: '28px',
            fontWeight: 'bold',
            color: 'white',
            background: 'linear-gradient(135deg, #78d5a3 0%, #ffd54f 100%)', // 修改背景颜色为渐变的幸福方便青草阳光色
            border: 'none',
            borderRadius: '5px',
            padding: '10px',
            display: 'inline-block',
            transition: 'transform 0.2s ease-in-out',
            marginLeft: '10px',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
            letterSpacing: '4px',
            textTransform: 'uppercase',
          }}
        >
          生活类接口 Lifestyle API
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
          旨在提供各种与生活相关的服务和功能，例如天气预报、健康管理、美食推荐、旅游指南等。这些接口可以帮助开发人员构建生活化应用程序，提供更加贴近用户生活的服务和体验。
        </p>
        <Row style={{maxWidth: '15000px'}}>
          <Col span={7} style={{marginRight: '16px'}}>
            <InfoCard data={interfaceData[9]}/>
          </Col>
          <Col span={7} style={{marginRight: '16px'}}>
            <InfoCard data={interfaceData[10]}/>
          </Col>
          <Col span={7} style={{marginRight: '16px'}}>
            <InfoCard data={interfaceData[11]}/>
          </Col>
        </Row>
      </div>
      {/*</Card>*/}
    </PageContainer>
  );
};

export default Index;
