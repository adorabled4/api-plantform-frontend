import { ProLayoutProps } from '@ant-design/pro-components';

// @ts-ignore
/**
 * @name
 */
const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  colorPrimary: '#FF7F50',
  layout: 'top',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  waterMarkProps: null, // 不显示 用户名的水印
  colorWeak: false,
  title: 'TurboAPI',
  pwa: true,
  logo: 'http://oss.dhx.icu/dhx/image-20230428152350863.png',
  iconfontUrl: '',
  token: {
    // 参见ts声明，demo 见文档，通过token 修改样式
    //https://procomponents.ant.design/components/layout#%E9%80%9A%E8%BF%87-token-%E4%BF%AE%E6%94%B9%E6%A0%B7%E5%BC%8F
  },
};

export default Settings;
/*

{
  "navTheme": "light",
  "colorPrimary": "#1890ff",
  "layout": "top",
  "contentWidth": "Fixed",
  "fixedHeader": false,
  "fixSiderbar": true,
  "pwa": true,
  "logo": "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
  "token": {},
  "splitMenus": false
}
珊瑚橙：#FF7F50 (橙色调)
天青蓝：#87CEEB (淡蓝色调)
靛青紫：#4B0082 (深紫色调)
鲜艳黄：#FFD700 (明黄色调)
薰衣草紫：#E6E6FA (淡紫色调)
 */
