/**
 * Created by wl on 16/4/13.
 */
import React, { PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { Form, Input, Button, Checkbox } from 'antd';
import styles from './styles.css';

const FormItem = Form.Item;

class LoginForm extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
    this._handleSubmit = this._handleSubmit.bind(this);
  }
  _handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!!err) {
        return false;
      } else {
        const passWord = this.props.form.getFieldsValue().password;
        const userName = this.props.form.getFieldsValue().userName;
        this.props.loginAction({userName, passWord});
      }
    });

  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.loginForm2} >
        <Form className={styles.myForm} onSubmit={this._handleSubmit}>
          <h3 className={ styles.formTitle } >后台运营管理系统</h3>
          <FormItem
            style={{ marginTop: 20}}
            wrapperCol={{ span: 15, offset: 5 }}
          >
            {getFieldDecorator('userName', {
                rules: [{
                  required: true,
                  whitespace: true,
                  message: '请输入用户名',
                }]
              })(
                <Input
                  type="text"
                  placeholder="用户名"
                  style={{ height: 45 }}
                />
              )}
          </FormItem>
          <FormItem
            wrapperCol={{ span: 15, offset: 5 }}
          >
            {getFieldDecorator('password', {
              rules: [{
                required: true,
                whitespace: true,
                message: '请输入密码',
              }]
            })(
              <Input
                type="password"
                placeholder="密码"
                style={{ height: 45 }}
              />
            )}
          </FormItem>
          <FormItem wrapperCol={{ span: 15, offset: 5 }} >
            <Button
              type="primary"
              htmlType="submit"
              className={styles.loginButton}
              htmlType="submit"
              style={{
                marginTop: '20px',
                height: 45,
                fontSize: '20px',
              }}
            >
              登录
            </Button>
          </FormItem>
          <FormItem wrapperCol={{ span: 15, offset: 5 }} className={styles.forget}>
            忘记密码?请直接联系后台工作人员
          </FormItem>
        </Form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  loginAction: PropTypes.func.isRequired,
  form: PropTypes.any,
};

export default Form.create()(LoginForm);
