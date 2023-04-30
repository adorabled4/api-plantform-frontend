import { ProList } from '@ant-design/pro-components';
import { Tag } from 'antd';

const dataSource = [
  {
    name: '语雀的天空',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '我是一条测试的描述',
  },
  {
    name: 'Ant Design',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '我是一条测试的描述',
  },
  {
    name: '蚂蚁金服体验科技',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '我是一条测试的描述',
  },
  {
    name: 'TechUI',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '我是一条测试的描述',
  },
  {
    name: 'TechUI',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '我是一条测试的描述',
  },
];

const headerTitle = (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '24px',
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
      padding: '10px',
      borderRadius: '5px',
      background: 'linear-gradient(to right, #ff416c, #ff4b2b, #ff416c)',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <span
      style={{
        position: 'relative',
        zIndex: 1,
        // animation, // 在这里使用 animation 变量
      }}
    >
      接口调用排行榜
    </span>
    <span
      style={{
        position: 'absolute',
        zIndex: 0,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to right, #00bfff, #1e90ff)',
        // animation, // 在这里使用 animation 变量
        opacity: 0.7,
      }}
    ></span>
  </div>
);

export default () => (
  <div style={{ backgroundColor: '#f5f5f5' }}>
    <ProList<any>
      style={{ backgroundColor: '#FFF234' }}
      onRow={(record: any) => {
        return {
          onMouseEnter: () => {
            console.log(record);
          },
          onClick: () => {
            console.log(record);
          },
        };
      }}
      rowKey="name"
      headerTitle={headerTitle}
      // tooltip="实时统计接口调用"
      dataSource={dataSource}
      showActions="hover"
      showExtra="hover"
      metas={{
        title: {
          dataIndex: 'name',
          render: (text, row, index) => {
            return (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ marginRight: 10 }}>{index + 1}.</div>
                <div>{text}</div>
              </div>
            );
          },
        },
        avatar: {
          dataIndex: 'image',
        },
        description: {
          dataIndex: 'desc',
          render: (text) => {
            return <div style={{ color: '#999' }}>{text}</div>;
          },
        },
        subTitle: {
          render: () => {
            return (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Tag color="blue">Web Design</Tag>
                <Tag color="#5BD8A6">UI Design</Tag>
              </div>
            );
          },
        },
        actions: {
          render: (text, row) => [
            // <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="link">
            //   链路
            // </a>,
            // <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="warning">
            //   报警
            // </a>,
            <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="view">
              查看
            </a>,
          ],
        },
      }}
    />
  </div>
);
