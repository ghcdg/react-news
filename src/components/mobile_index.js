import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import {Tabs, Carousel} from 'antd';
const TabPane = Tabs.TabPane;
import MobileList from './mobile_list';

export default class MobileIndex extends React.Component {
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
				<MobileHeader></MobileHeader>
				<Tabs>
					<TabPane tab='头条' key='1'>
            <div>       
                <Carousel {...settings}>
                  <div><a href='https://sports.qq.com/a/20130428/000505_all.htm'><img src={ require('../images/carousel_1.jpg') } alt='carousel_1'/></a></div>
                  <div><a href='https://china.findlaw.cn/info/xzss/ssfg/ssf/1246253.html'><img src={ require('../images/carousel_2.jpg') } alt='carousel_2'/></a></div>
                  <div><a href='https://sports.163.com/18/0911/12/DRE1NUFT0005877U.html'><img src={ require('../images/carousel_3.jpg') } alt='carousel_3'/></a></div>
                  <div><a href='https://tech.qq.com/a/20180911/046544.htm'><img src={ require('../images/carousel_4.jpg') } alt='carousel_4'/></a></div>
                </Carousel>
				    </div>
						<MobileList count={20} type='top'/>
					</TabPane>
					<TabPane tab='社会' key='2'>
						<MobileList count={20} type='shehui'/>
					</TabPane>
					<TabPane tab='国内' key='3'>
						<MobileList count={20} type='guonei'/>
					</TabPane>
					<TabPane tab='国际' key='4'>
						<MobileList count={20} type='guoji'/>
					</TabPane>
					<TabPane tab='娱乐' key='5'>
						<MobileList count={20} type='yule'/>
					</TabPane>
				</Tabs>
				<MobileFooter></MobileFooter>
			</div>
		);
	}
}
