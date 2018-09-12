import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import PCIndex from './components/pc_index';
import PCNewsDetails from './components/pc_news_details';
import MobileNewsDetails from './components/mobile_news_details';
import MobileIndex from './components/mobile_index';
import PCUserCenter from './components/pc_usercenter';
import MobileUserCenter from './components/mobile_usercenter';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';
import './styles/pc.css';
import './styles/mobile.css';

const pcRouter=(
  <div>
      <Route path="/" component={PCIndex}></Route>
      <Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
      <Route path="/usercenter" component={PCUserCenter}></Route>
  </div>
);

const mobileRouter=(
  <div>
      <Route path="/" component={MobileIndex}></Route>
      <Route path="/details/:uniquekey" component={MobileNewsDetails}></Route>
      <Route path="/usercenter" component={MobileUserCenter}></Route>
  </div>
);

export default class Root extends React.Component {
	render() {
		return (
			<div>
				<MediaQuery query='(min-device-width: 1224px)'>
					<Router history={hashHistory}>
						{pcRouter}
					</Router>
				</MediaQuery>
				<MediaQuery query='(max-device-width: 1224px)'>
					<Router history={hashHistory}>
            {mobileRouter}
					</Router>
				</MediaQuery>
			</div>
		);
	}
}

// Render the main component into the dom
ReactDOM.render(<Root />, document.getElementById('app'));
