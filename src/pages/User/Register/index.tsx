import Footer from '@/components/Footer';
import {getFakeCaptcha} from '@/services/ant-design-pro/login';
import {loginUsingPOST, registerUsingPOST} from '@/services/api-plantform_bankend/yonghuxiangguanjiekou';
import {
  AlipayCircleOutlined,
  LockOutlined,
  MobileOutlined,
  TaobaoCircleOutlined,
  UserOutlined,
  WeiboCircleOutlined,
} from '@ant-design/icons';
import {
  LoginForm,
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
} from '@ant-design/pro-components';
import {useEmotionCss} from '@ant-design/use-emotion-css';
import {FormattedMessage, Helmet, history, Link, SelectLang, useIntl, useModel} from '@umijs/max';
import {Alert, message, Tabs} from 'antd';
import React, {useState} from 'react';
import {flushSync} from 'react-dom';
import Settings from '../../../../config/defaultSettings';

const ActionIcons = () => {
  const langClassName = useEmotionCss(({token}) => {
    return {
      marginLeft: '8px',
      color: 'rgba(0, 0, 0, 0.2)',
      fontSize: '24px',
      verticalAlign: 'middle',
      cursor: 'pointer',
      transition: 'color 0.3s',
      '&:hover': {
        color: token.colorPrimaryActive,
      },
    };
  });

  return (
    <>
      <AlipayCircleOutlined key="AlipayCircleOutlined" className={langClassName}/>
      <TaobaoCircleOutlined key="TaobaoCircleOutlined" className={langClassName}/>
      <WeiboCircleOutlined key="WeiboCircleOutlined" className={langClassName}/>
    </>
  );
};

const Lang = () => {
  const langClassName = useEmotionCss(({token}) => {
    return {
      width: 42,
      height: 42,
      lineHeight: '42px',
      position: 'fixed',
      right: 16,
      borderRadius: token.borderRadius,
      ':hover': {
        backgroundColor: token.colorBgTextHover,
      },
    };
  });

  return (
    <div className={langClassName} data-lang>
      {SelectLang && <SelectLang/>}
    </div>
  );
};

const LoginMessage: React.FC<{
  content: string;
}> = ({content}) => {
  return (
    <Alert
      style={{
        marginBottom: 24,
      }}
      message={content}
      type="error"
      showIcon
    />
  );
};

const Login: React.FC = () => {
  const [userLoginState, setUserLoginState] = useState<API.BaseResponse>({});
  const [type, setType] = useState<string>('account');

  const containerClassName = useEmotionCss(() => {
    return {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      backgroundImage:
      // "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
        "url('https://cdn.pixabay.com/photo/2016/04/12/22/35/watercolour-1325656_960_720.jpg')",
      backgroundSize: '100% 100%',
    };
  });

  const intl = useIntl();

  const handleSubmit = async (values: API.RegisterParam) => {
    try {
      // 注册
      const msg = await registerUsingPOST({...values});
      console.log(msg)
      if (msg.code == 200) {
        message.success("注册成功!")
        history.push('/user/login')
        return;
      } else {
        message.error(msg.description)
      }
    } catch (error) {
      const defaultLoginFailureMessage = intl.formatMessage({
        id: 'pages.register.failure',
        defaultMessage: '注册失败，请重试！',
      });
      message.error(defaultLoginFailureMessage);
    }
  };
  const {status: message, type: loginType} = userLoginState;

  const logo = (
    <div style={{display: 'flex', alignItems: 'left'}}>
      <img
        src="http://oss.dhx.icu/dhx/image-20230429160829057-removebg-preview-16827558960873.png"
        alt="logo"
        style={{width: '120px', height: '60px', marginRight: '20px'}}
      />
    </div>
  );
  const title = (
    <span
      style={{
        fontSize: '24px',
        fontWeight: 'bold',
        marginLeft: '50px',
        background: '-webkit-linear-gradient(left, #FF00FF, #8A2BE2)', // 设置渐变
        WebkitBackgroundClip: 'text', // 设置文本填充为渐变色
        WebkitTextFillColor: 'transparent', // 设置字体颜色为透明，以显示渐变背景色
      }}
    >
      注册
      <br/>
    </span>
  );
  const subTitle = (
    <span
      style={{
        fontSize: '14px',
        fontWeight: 'bold',
        marginBottom: '-50px',
        marginTop: '40px',
        background: '-webkit-linear-gradient(left,#6FFF8B, #4169E1 )', // 设置渐变
        WebkitBackgroundClip: 'text', // 设置文本填充为渐变色
        WebkitTextFillColor: 'transparent', // 设置字体颜色为透明，以显示渐变背景色
      }}
    >
      TurboAPI 致力于为开发者与企业用户提供安全、可靠、稳定的接口服务!
    </span>
  );
  return (
    <div className={containerClassName}>
      <Helmet>
        <title>
          {intl.formatMessage({
            id: 'menu.register',
            defaultMessage: '注册页',
          })}
          - {Settings.title}
        </title>
      </Helmet>
      <Lang/>
      <div
        style={{
          flex: '1',
          padding: '32px 0',
        }}
      >
        <LoginForm
          style={{margin: -14}}
          contentStyle={{
            minWidth: 280,
            maxWidth: '75vw',
          }}
          submitter={{
            searchConfig: {
              submitText: '注册'
            }
          }}
          logo={logo}
          title={title}
          subTitle={subTitle}
          initialValues={{
            autoLogin: true,
          }}
          onFinish={async (values) => {
            await handleSubmit(values as API.RegisterParam);
          }}
        >
          <Tabs
            activeKey={type}
            onChange={setType}
            centered
            items={[
              {
                key: 'account',
                label: intl.formatMessage({
                  id: 'pages.register.accountLogin.tab',
                  defaultMessage: '账户密码注册',
                }),
              },
            ]}
          />
          {message === 'error' && loginType === 'account' && (
            <LoginMessage
              content={intl.formatMessage({
                id: 'pages.login.accountLogin.errorMessage',
                defaultMessage: '账户或密码不符合规范',
              })}
            />
          )}
          {type === 'account' && (
            <>
              <ProFormText
                name="userName"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined/>,
                }}
                placeholder={intl.formatMessage({
                  id: 'pages.login.username.placeholder',
                  defaultMessage: '请输入账户名',
                })}
                rules={[
                  {
                    required: true,
                    pattern: /^[\\u4e00-\\u9fa5a-zA-Z0-9]{6,12}$/,
                    message: (
                      <FormattedMessage
                        id="pages.login.username.required"
                        defaultMessage="请输入用户名!"
                      />
                    ),
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined/>,
                }}
                placeholder={intl.formatMessage({
                  id: 'pages.register.password.placeholder',
                  defaultMessage: '请输入密码',
                })}
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.register.password.required"
                        defaultMessage="请输入密码！"
                      />
                    ),
                  },
                ]}
              />
              <ProFormText.Password
                name="checkPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined/>,
                }}
                placeholder={intl.formatMessage({
                  id: 'pages.register.password.placeholder',
                  defaultMessage: '确认密码',
                })}
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.login.password.required"
                        defaultMessage="请输入密码！"
                      />
                    ),
                  },
                ]}
              />
              <ProFormText>
                <Link style={{color:'#0001FD'}} to="/user/login">
                  <span>使用已有账户登录</span>
                </Link>
              </ProFormText>
            </>
          )}
        </LoginForm>
      </div>
      <Footer backgroundColor={"rgba(0, 0, 0, 0)"}/>
    </div>
  );
};

export default Login;
