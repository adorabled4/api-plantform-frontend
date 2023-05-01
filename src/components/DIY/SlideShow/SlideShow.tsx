import { Carousel } from 'antd';

const imgStyle = {
  width: '100%',
  height: '62vh',
  // height: 'auto',
  borderRadius: '10px', // 设置圆角半径
};

const SlideShow = () => {
  return (
    <div style={{ width: '77%' }}>
      <Carousel autoplay autoplaySpeed={2000} pauseOnHover={true}>
        <div>
          <img src="/ppt/ppt_1.jpg" alt="ppt 1" style={imgStyle} />
        </div>
        <div>
          <img src="/ppt/ppt_2.jpg" alt="ppt 2" style={imgStyle} />
        </div>
        <div>
          <img src="/ppt/ppt_3.jpg" alt="ppt 3" style={imgStyle} />
        </div>
      </Carousel>
    </div>
  );
};

export default SlideShow;
