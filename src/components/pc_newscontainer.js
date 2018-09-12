import React from 'react';
import { Row, Col, Card } from 'antd';
import {Tabs, Carousel} from 'antd';
const TabPane = Tabs.TabPane;
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';
import PCProduct from './pc_products';

//获取图片相关的数据
var imageDatas=require('../data/imageDatas.json');
//传入图片数据，利用自执行函数，将图片名信息转化成图片URL路径信息,最后返回图片数组
imageDatas=(function getImageURL(imageDatasArr){
    for(let  i = 0, j = imageDatasArr.length;i < j;i++){
    let singleImageData=imageDatasArr[i];
    singleImageData.imageURL=require('../images/'+singleImageData.fileName);
    imageDatasArr[i]=singleImageData;
  }
  return imageDatasArr;
})(imageDatas);

export default class PCNewsContainer extends React.Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			autoplay: true
    };
		return (
			<div>
				<Row>
					<Col span={2}></Col>
					<Col span={20} className='container'>

						<div className='leftContainer'>
              <Card title='今日推荐' bordered={false} style={{ width: 380 }}>
                  <div className='carousel'>
                    <Carousel {...settings}>
                      <div><a href='https://sports.qq.com/a/20130428/000505_all.htm' target='_blank'><img src={imageDatas[1].imageURL}/></a></div>
                      <div><a href='https://china.findlaw.cn/info/xzss/ssfg/ssf/1246253.html' target='_blank'><img src={imageDatas[2].imageURL}/></a></div>
                      <div><a href='https://sports.163.com/18/0911/12/DRE1NUFT0005877U.html' target='_blank'><img src={imageDatas[3].imageURL}/></a></div>
                      <div><a href='https://tech.qq.com/a/20180911/046544.htm' target='_blank'><img src={imageDatas[4].imageURL}/></a></div>
                    </Carousel>
                  </div>
              </Card>
							<PCNewsImageBlock count={6} type='guoji' width='380px' cartTitle='国际新闻' imageWidth='112px'/>
						</div>

            <div className='tabs_news'>
              <Tabs className='tabs_news_tab'>
                <TabPane tab="头条" key="1">
                  <PCNewsBlock count={22} type="top" width="100%" bordered="false" />
                </TabPane>
                <TabPane tab="社会" key="2">
                  <PCNewsBlock count={22} type="shehui" width="100%" bordered="false" />
                </TabPane>
                <TabPane tab="体育" key="3">
                  <PCNewsBlock count={22} type="tiyu" width="100%" bordered="false" />
                </TabPane>
                <TabPane tab="科技" key="4">
                  <PCNewsBlock count={22} type="keji" width="100%" bordered="false" />
                </TabPane>
                <TabPane tab="时尚" key="5">
                  <PCNewsBlock count={22} type="shishang" width="100%" bordered="false" />
                </TabPane>
                <TabPane tab="国内" key="6">
                  <PCNewsBlock count={22} type="guonei" width="100%" bordered="false" />
                </TabPane>
                <TabPane tab="国际" key="7">
                  <PCNewsBlock count={22} type="guoji" width="100%" bordered="false" />
                </TabPane>
                <TabPane tab="娱乐" key="8">
                  <PCNewsBlock count={22} type="yule" width="100%" bordered="false" />
                </TabPane>
              </Tabs>
            </div>
      
            <div className='tabs_product'>
              <Card title='获取第三方数据在此展示(来自网易)' bordered={false} style={{ width: 300 }}>
                  <PCProduct/>
              </Card>
            </div>

						<div>
							<PCNewsImageBlock count={14} type='guonei' width='100%' cartTitle='国内新闻' imageWidth='132px'/>
							<PCNewsImageBlock count={21} type='yule' width='100%' cartTitle='娱乐新闻' imageWidth='132px'/>
						</div>
					</Col>
					<Col span={2}></Col>
				</Row>
			</div>
		);
	}
}
