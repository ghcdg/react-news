import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import {Tabs, Carousel} from 'antd';
const TabPane = Tabs.TabPane;
import MobileList from './mobile_list';
import imageDatas from './get_images';

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
						<div className='carousel'>
							<Carousel {...settings}>
                  <div><img src={imageDatas[1].imageURL}/></div>
									<div><img src={imageDatas[2].imageURL}/></div>
									<div><img src={imageDatas[3].imageURL}/></div>
									<div><img src={imageDatas[4].imageURL}/></div>
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