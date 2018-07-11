
import React, { PropTypes } from 'react';
import { Form, Input, Button, Col, Row, Select } from 'antd';
import Immutable from 'immutable';
import mainStyles from '../../assets/stylesheets/Common.css';
import amumu from 'amumu';

const FormItem = Form.Item;
const Option = Select.Option;

@amumu.decorators.PureComponent
@amumu.redux.ConnectStore
class UserListSearch extends React.Component {
  showOption(data) {
    const views = [];
    if(data) {
      data.map((item, key) => {
        views.push(<Option value={item.get('id')} key={key}>{item.get('name')}</Option>)
      })
    }
    return views;
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <Form
        horizontal
        className="advanced-search-form"
      >
        <Row>
          <Col span="8" >
            <FormItem
              label="用户ID："
              {...formItemLayout}
            >
              {getFieldDecorator('id', {
                  initialValue: this.props.searchData.get('id'),
                  onChange: (e) => {
                    this.props.changeAction(
                    'UserReducer/searchData/id', e.target.value);
                  },
                })(
                <Input
                  placeholder="ID"
                />
              )}
            </FormItem>
          </Col>
          <Col span="8" >
            <FormItem
              label="用户手机号："
              {...formItemLayout}
            >
              {getFieldDecorator('phone', {
                  initialValue: this.props.searchData.get('phone'),
                  onChange: (e) => {
                    this.props.changeAction(
                    'UserReducer/searchData/phone', e.target.value);
                  },
                })(
                <Input
                  placeholder="手机号："
                />
              )}
            </FormItem>
          </Col>
          
          <Col span="8" >
            <FormItem
              label="用户昵称："
              {...formItemLayout}
            >
              {getFieldDecorator('nickName', {
                  initialValue: this.props.searchData.get('nickName'),
                  onChange: (e) => {
                    this.props.changeAction(
                    'UserReducer/searchData/nickName', e.target.value);
                  },
                })(
                <Input
                  placeholder="用户昵称："
                />
              )}
            </FormItem>
          </Col>
          
          <Col span="8" >
            <FormItem
              label="认证技能："
              {...formItemLayout}
            >
              {getFieldDecorator('skills', {
                  initialValue: this.props.searchData.get('skills'),
                  onChange: (e) => {
                    this.props.changeAction(
                    'UserReducer/searchData/skills', e);
                  },
                })(
                <Select>
                   <Option value={''}>请选择</Option>
                   {this.showOption(this.props.skillList)}
                </Select>
              )}
            </FormItem>
          </Col>
        </Row>
        <Row style={{ marginTop: '10px' }} >
          <Col span="13" offset="10" style={{ textAlign: 'right' }} >
            <Button
              type="ghost"
              className={ mainStyles.whiteButton }
              style={{ marginRight: '20px' }}
              onClick={() => {
                this.props.changeAction(
                   'UserReducer/searchData', Immutable.Map({ 
                     nickName: '',
                     phone: '',
                     id: '',
                     skills: '',
                     pageNum: 1,
                     pageSize: 10,
                   })
                );
                this.props.form.setFieldsValue({ 
                  nickName: '',
                  phone: '',
                  id: '',
                  skills: '',
                })
                this.props.searchAction({ pageNum: 1, pageSize: 10 });
              }}
            >
              重置
            </Button>
            <Button
              style={{ marginRight: '20px' }}
              className={ mainStyles.blueButton }
              type="primary"
              htmlType="submit"
              onClick={() => {
                this.props.searchAction(this.props.searchData.toJS());
              }}
            >
              筛选</Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default Form.create()(UserListSearch);
