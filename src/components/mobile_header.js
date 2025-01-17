import React from 'react';
import {
	Icon,
	Tabs,
	message,
	Form,
	Input,
	Button,
	Modal
} from 'antd';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
import {Link} from 'react-router';

class MobileHeader extends React.Component {
	constructor() {
		super();
		this.state = {
			current: 'top',
			modalVisible: false,
			action: 'login',
			hasLogined: false,
			userNickName: '',
			userid: 0
		};
  }
  
	setModalVisible(value)
	{
		this.setState({modalVisible: value});
  }
  
	componentWillMount() {
		if (localStorage.userid != '') {
			this.setState({hasLogined: true});
			this.setState({userNickName: localStorage.userNickName, userid: localStorage.userid});
		}
  }
  
	handleClick(e) {
		if (e.key = 'register') {
			this.setState({current: 'register'});
			this.setModalVisible(true);
		} else {
			{
				this.setState({current: e.key});
			}
		}
  }
  
	handleSubmit(e)
	{
		//页面开始向 API 进行提交数据
		e.preventDefault();
		var myFetchOptions = {
			method: 'GET'
		};
		var formData = this.props.form.getFieldsValue();
		fetch('https://newsapi.gugujiankong.com/Handler.ashx?action=' + this.state.action + '&username=' + formData.userName + '&password=' + formData.password + '&r_userName=' + formData.r_userName + '&r_password=' + formData.r_password + '&r_confirmPassword=' + formData.r_confirmPassword, myFetchOptions).then(response => response.json()).then(json => {
			this.setState({userNickName: json.NickUserName, userid: json.UserId});
		});
		if (this.state.action == 'login') {
			this.setState({hasLogined: true});
		}
		message.success('请求成功！');
		this.setModalVisible(false);
  }
  
	login() {
		this.setModalVisible(true);
  }
  
	callback(key) {
		if (key == 1) {
			this.setState({action: 'login'});
		} else if (key == 2) {
			this.setState({action: 'register'});
		}
  }
  
	render() {
		const { getFieldDecorator} = this.props.form;
		const userShow = this.state.hasLogined
			? <Link to={`/usercenter`}>
					<Icon type='inbox'/>
				</Link>
			: <Icon type='setting' onClick={this.login.bind(this)}/>
		return (
			<div id='mobileheader'>
				<header>
          <a href='/'>
          <img src={ require('../images/logo.png') } alt='logo'/>
						<span>ReactNews3</span>
					</a>
					{userShow}
				</header>
				<Modal wrapClassName='vertical-center-modal' visible={this.state.modalVisible} onCancel={()=>this.setModalVisible(false)} onOk={()=>this.setModalVisible(false)} okText='关闭'>
                    <Tabs type='card'>
                        <TabPane tab='注册' key='2'>
                            <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                                <FormItem label='用户名'>
                                    {getFieldDecorator('userName', {
                                        rules: [{ required: true, message: 'Please input your username!' }]
                                    })(
                                        <Input prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='用户名' />
                                    )}
                                </FormItem>
                                <FormItem label='密码'>
                                    {getFieldDecorator('password', {
                                        rules: [{ required: true, message: 'Please input your Password!' }]
                                    })(
                                        <Input prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />} type='password' placeholder='密码' />
                                    )}
                                </FormItem>
                                <FormItem label='确认密码'>
                                    {getFieldDecorator('confirmPassword', {
                                        rules: [{ required: true, message: 'Please confirm your Password!' }]
                                    })(
                                        <Input prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />} type='password' placeholder='确认密码' />
                                    )}
                                </FormItem>
                                <FormItem>
                                    <Button type='primary' htmlType='submit' className='login-form-button'>
                                        注册
                                    </Button>
                                </FormItem>
                            </Form>
                        </TabPane>
                    </Tabs>
                </Modal>
			</div>
		);
  }
}
export default MobileHeader = Form.create({})(MobileHeader);
