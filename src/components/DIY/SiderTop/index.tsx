import {ProList} from '@ant-design/pro-components';
import {Avatar, Button, Tag} from 'antd';
import {getRankInterfacesUsingGET} from "@/services/api-plantform_bankend/interfacekongzhiceng";
import React, {ReactText, useEffect, useState} from "react";
import {UserOutlined} from "@ant-design/icons";
import {history} from "@@/core/history";

const headerTitle = (
  <div
    style={{
      height: '50px',
      width: '500px',
      display: 'flex',
      // paddingLeft:'4',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '20px',
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
      padding: '1px',
      borderRadius: '10px',
      background: 'linear-gradient(to right, #ff416c, #ff4b2b, #ff416c)',
      color: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <span
      style={{
        position: 'relative',
        alignItems: 'center',
        alignContent: 'center',
        zIndex: 1,
        // paddingLeft:4,
        // animation, // 在这里使用 animation 变量
      }}
    >
      接口调用排行榜
    </span>
    <span
      style={{
        // position: 'absolute',
        position: 'absolute',
        zIndex: 0,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to right, #00bBBB, #100Fff)', // 调节背景渐变
        // animation, // 在这里使用 animation 变量
        opacity: 0.7,
      }}
    ></span>
  </div>
);
import { PageLoading } from "@ant-design/pro-layout";

export default function InterfaceRank() {
  const [interfaceData, setInterfaceData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await getRankInterfacesUsingGET();
      // 将获取到的数据保存到 state 中
      if (Array.isArray(response.data)) {
        // @ts-ignore
        setInterfaceData(response.data);
      } else {
        setInterfaceData([]);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  const handleTagClick = (id: number) => {
    history.push(`/detail/${id}`);
  };

  return (
    <div style={{ backgroundColor: "#f5f5f5", borderRadius: "100px" }}>
      {/*<PageLoading spinning={loading} />*/}
        <ProList<any>
          style={{ backgroundColor: "#FFF234", borderRadius: "100px" }}
          loading={loading}
          onRow={(record: any) => {
            return {
              onMouseEnter: () => {
                // handleTagClick(record.id)
                // console.log(record);
              },
              onClick: () => {
                handleTagClick(record.id)
                console.log(record);
              },
            };
          }}
          rowKey="name"
          headerTitle={headerTitle}
          dataSource={interfaceData}
          showActions="hover" // 鼠标覆盖
          showExtra="hover"
          metas={{
            title: {
              dataIndex: "name",
              render: (text, row, index) => {
                return (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ marginRight: 10 }}>{index + 1}.</div>
                    <div>{text} </div>
                  </div>
                );
              },
            },
            description: {
              dataIndex: "description",
              render: (text) => {
                return <div style={{ color: "#999" }}>{text}</div>;
              },
            },
            subTitle: {
              dataIndex: "callTimes",
              render: (calltime, record) => {
                return (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Tag color="blue">call:{calltime}次 </Tag>
                    <Tag color="#5BD8A6">{record.method}</Tag>
                    <Tag
                      color={record.isFree ? "#5BD8A6" : "#FFC107"}
                    >
                      {record.isFree ? "免费" : "付费"}
                    </Tag>
                  </div>
                );
              },
            },
            actions: {
              render: (text, record) => [
                // <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="link">
                //   链路
                // </a>,
                // <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="warning">
                //   报警
                // </a>,
                <div
                  style={{
                    backgroundColor: "#a3ddec",
                    display: "inline-block",
                    padding: "8px 16px",
                    borderRadius: "4px",
                    textDecoration: "none",
                    color: "#fff",
                    boxShadow:
                      "0 2px 0 rgba(0, 0, 0, 0.045), 0 6px 8px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <a
                    color={"#FFFFFF"}
                    onClick={() =>
                      handleTagClick(record.id.toString())
                    }
                  >
                    查看
                  </a>
                </div>,
              ],
            },
          }}
        />
    </div>
  );
}

