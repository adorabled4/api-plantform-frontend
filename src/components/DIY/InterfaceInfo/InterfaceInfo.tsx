import React, {useEffect, useState} from "react";
import styled from 'styled-components';

type InterfaceBasicInfoProps = {
  data: API.InterfaceBasicInfoVo; // InterfaceBasicInfoVo 类型的数据
};
const BasicInfoContainer = styled.div`
  margin: 0 auto;
  max-width: 600px;
  padding: 20px;
  background: radial-gradient(circle, ${getRandomColor()}, ${getRandomColor()});
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 28px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    margin-bottom: 5px;
  }

  strong {
    font-weight: bold;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
    margin-top: 10px;
  }
`;
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
const BasicInfo: React.FC<InterfaceBasicInfoProps> = ({ data }) => {
  const { name = '', isFree = 0, method = '', description = '', createTime = '', userName = '' } = data;
  const [backgroundColor, setBackgroundColor] = useState<string>(getRandomColor());
  useEffect(() => {
    let timer: any = null;
    timer = setInterval(() => {
      setBackgroundColor(getRandomColor());
    }, 100);
    return () => clearInterval(timer);
  }, []);
  return (
    <BasicInfoContainer  >
      <h2>{name}</h2>
      <p><strong></strong> {description}</p>
      {!!isFree && <p><strong>Free:</strong> Yes</p>}
      {!isFree && <p><strong>Free:</strong> No</p>}
      <p><strong>请求方式:</strong> {method.toUpperCase()}</p>
      <p><strong>发布者:</strong> {userName}</p>
      <strong><p>{createTime}</p></strong>
    </BasicInfoContainer>
  );
};

export default BasicInfo;
