import React, { PropTypes } from 'react';
import DynamicInfoHeader from './DynamicInfoHeader';
import Immutable from 'immutable';
import * as Contentstyles from '../../assets/stylesheets/FromContent.css';
import * as styles from './style.css';
import * as LoginAction from '../../actions/LoginAction';
import { push } from 'react-router-redux';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';
import amumu from 'amumu';
import { message, Form, Input, Select, Cascader, InputNumber, DatePicker, Icon, Upload, Row, Col, Button } from 'antd';
import moment from 'moment';
import { UploadFileToOSS } from '../../core/WS/WSHandler';

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}
function checkedFile(file) {
  const isPic = (file.type === 'image/jpeg' || file.type ===  'image/png' || file.type ===  'image/gif');
  if (!isPic) {
    message.error('图片格式错误!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('图片请小于2MB!');
  }
  return isPic && isLt2M;
}

@amumu.redux.ConnectStore
@amumu.decorators.Loading('pc')
class DynamicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: '',
    };
  }
  componentWillMount() {
    if(this.props.params.id){
      // this.props.dispatch(LoginAction.getExperienceInfo({id: this.props.params.id}));
      // this.setState({
      //   headImg: this.props.experienceInfo.get('headImg'),
      // });
    } else {
      this.clearExperience();
    }
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.dynamicInfo.get('img') !== nextProps.dynamicInfo.get('img') && nextProps.dynamicInfo.get('img')) {
      this.setState({
        img: nextProps.dynamicInfo.get('img'),
      });
      // console.log(nextProps.dynamicInfo.get('img'))
    }
  }
  /**
   * 回退
   * @param dispatch
   * @private
   */
  _goBackAction = (dispatch: Function) => () => {
    dispatch(push(RoutingURL.DynamicList()));
  }
  _goUpdateAction = (dispatch: Function) => (id: string) => {
    dispatch(push(RoutingURL.DynamicInfo(id, true)));
  }
  _updateAction = (dispatch) => (params: {}) => {
    console.log('params:', params)
    if (this.props.dynamicInfo.get('id')) {
      const param = {
        id: this.props.dynamicInfo.get('id'),
        img: this.props.dynamicInfo.get('img'),
        title: params.title,
        content: JSON.stringify(params.content)
      }
      dispatch(LoginAction.updateDynamic(param));
    } else {
      const param = {
        img: this.props.dynamicInfo.get('img'),
        title: params.title,
        content: JSON.stringify(params.content)
      }
      dispatch(LoginAction.addDynamic(param));
    }
  }
  clearExperience() {
    this.props.changeAction('LoginReducer/dynamicInfo',
    Immutable.fromJS({
    }));
  }
  componentWillUnmount() {
    if(this.props.params.id){
      this.clearExperience();
    } else {
    }
  }
  beforeHeadImgUpload(file) {
    if(checkedFile(file)) {
      const result = UploadFileToOSS({
        filename: file.name,
        file,
      });
      result.then(fileInfo => {
        if (fileInfo.fileURL) {
          // console.log('上传成功');
          getBase64(file, (imgURL) =>
          this.setState({headImg: imgURL}));
          this.props.changeAction('LoginReducer/dynamicInfo/img', fileInfo.fileURL);
        } else {
          // 上传失败的图片显示
          console.log('上传失败');
        }
      });
    }
  }
  beforeContentImgUpload(file, index) {
    if(checkedFile(file)) {
      const result = UploadFileToOSS({
        filename: file.name,
        file,
      });
      result.then(fileInfo => {
        if (fileInfo.fileURL) {
          const content = this.props.form.getFieldValue('content');
          // console.log('上传成功');
          // getBase64(file, (imgURL) => {
          //   content[index].content = imgURL;
          //   this.props.form.setFieldsValue({
          //     content,
          //   });
          // })
          content[index].content = fileInfo.fileURL;
           this.props.form.setFieldsValue({
             content,
           });
        } else {
          // 上传失败的图片显示
          console.log('上传失败');
        }
      });
    }
  }
  renderSelect(list, value) {
    const view = [];
    if(list.size) {
      const newList = list.toJS();
      newList.map((item, index) => {
        view.push(
          <Option value={item['id']} key={index}>{item[value]}</Option>
        );
      })
    }
    return view;
  }
  renderYearsSelect() {
    const view = [];
    for(let i = 1988; i <= 2017; i++ ) {
      view.push(
        <Option value={i} key={i}>{i}年</Option>
      );
    }
    return view;
  }
  remove = (k) => {
   const { form } = this.props;
   // can use data-binding to get
   const content = form.getFieldValue('content');
   // We need at least one passenger
   if (content.length === 1) {
     return;
   }

   // can use data-binding to set
   form.setFieldsValue({
     content: content.filter(key => key !== k),
   });
  };
  add = (type) => {
    const { form } = this.props;
    // can use data-binding to get
    const content = form.getFieldValue('content');
    content.push({
      type,
      content: '',
    });
    // can use data-binding to set
    // important! notify form to detect changes
    // console.log(content);
    form.setFieldsValue({
      content,
    });
  };
  renderContent(type, content, index) {
    if(type === 1) {
      return(<Input.TextArea
        autosize={{ minRows: 6 }}
        type="textarea"
        placeholder="输入正文"
        style={{ width: '95%', marginRight: 12 }}
      />);
    } else if (type === 3) {
      return(
        <div>
          <Upload
            className={styles.avatarUploader}
            name="avatar"
            showUploadList={false}
            // action="//jsonplaceholder.typicode.com/posts/"
            beforeUpload={(file) => this.beforeContentImgUpload(file, index)}
          >
            {
              content ?
                <img src={content} alt="" className={styles.avatar} /> :
                <Icon type="plus" className={styles.avatarUploaderTrigger} />
            }
          </Upload>
          <span>(宽度670)</span>
        </div>

      );
    }
  }
  render() {
    const { getFieldDecorator, getFieldValue, getFieldsValue } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 8 },
    };
    const formItemLayout1 = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const formItemLayout2 = {
      labelCol: { span: 4 },
      wrapperCol: { span: 18 },
    };
    const formItemLayout3 = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    };
    const formItemLayoutWithOutLabel = {
      wrapperCol: { span: 20, offset: 4 },
    };
    getFieldDecorator('content', {
      initialValue: this.props.dynamicInfo.get('content') ?
      this.props.dynamicInfo.get('content').toJS() : [{type:1,content:''}]
    });
    const content = getFieldValue('content');
    const formItems = content.map((item, index) => {
      return (
        <FormItem
          {...(index === 0 ? formItemLayout3 : formItemLayoutWithOutLabel)}
          label={index === 0 ? '正文' : ''}
          required={false}
          key={index}
        >
          <Row>
            <Col span={22}>
              {getFieldDecorator(`names-${index}`, {
                initialValue: item.content,
                // validateTrigger: ['onChange', 'onBlur'],
                // rules: [{
                //   required: true,
                //   message: '请填写内容或者删除该表单',
                // }],
                onChange: e => {
                  if(item.type == 1 || item.type == 2) {
                    try {
                      content[index].content = e.target.value;
                      this.props.form.setFieldsValue({
                        content,
                      });
                    } catch(e) {
                      // console.warn(e);
                    }
                  }
                },
              })(
                this.renderContent(item.type, item.content, index)
              )}
            </Col>
            <Col span={2}>
              {content.length > 1 ? (
                <Icon
                  // className="dynamic-delete-button"
                  className={Contentstyles.deleteButton}
                  type="minus-circle-o"
                  disabled={content.length === 1}
                  onClick={() => this.remove(item)}
                />
              ) : null}
            </Col>
          </Row>
        </FormItem>
      );
    });
    return (
      <div className={ Contentstyles.content }>
        <div className={ Contentstyles.contentHeader }>
          <DynamicInfoHeader
            id={this.props.params.id}
            form={this.props.form}
            editing={this.props.location.query.editing}
            goBackAction={this._goBackAction(this.props.dispatch)}
            goUpdateAction={this._goUpdateAction(this.props.dispatch)}
            updateAction={this._updateAction(this.props.dispatch)}
            // params={this.props.articleInfo.toJS()}
            params={{ ...this.props.form.getFieldsValue(), style: 1 }}
          />
        </div>
        <div className={ Contentstyles.contentContainer }>
          <Form
            className={ Contentstyles.contentBox }
          >
            {this.props.params.id ?
            <div>
              <div className={ Contentstyles.formHeader } >
                系统信息
              </div>
              <div className={ Contentstyles.formContent } >
                <FormItem
                  {...formItemLayout}
                  label="题目ID"
                >
                  {getFieldDecorator('id', {
                    initialValue: this.props.dynamicInfo.get('id'),
                    })(
                    <text>{this.props.dynamicInfo.get('id')}</text>
                  )}

                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="更新时间"
                >
                  <text>{this.props.dynamicInfo.get('updateTime')}</text>
                </FormItem>
              </div>
            </div> : ''}
            <div className={ Contentstyles.formHeader } >
              正文信息
            </div>
            <div className={ Contentstyles.formContent } >
              <FormItem
                {...formItemLayout}
                label="头图(750*360)"
              >
                {getFieldDecorator('img', {
                  initialValue: this.state.img,
                  })(
                  <Upload
                    className={styles.avatarUploader}
                    name="avatar"
                    showUploadList={false}
                    beforeUpload={(file) =>this.beforeHeadImgUpload(file)}
                  >
                    {
                      this.props.dynamicInfo.get('img') ?
                        <img src={this.props.dynamicInfo.get('img')} alt="" className={styles.avatar} /> :
                        <Icon type="plus" className={styles.avatarUploaderTrigger} />
                    }
                  </Upload>
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="标题"
              >
                {getFieldDecorator('title', {
                  initialValue: this.props.dynamicInfo.get('title'),
                  rules: [{
                    required: true,
                    message: '请输入标题',
                  }],
                  onChange: (e) => {
                    this.props.changeAction(
                    'LoginReducer/dynamicInfo/title', e.target.value);
                  },
                  })(
                    <Input
                      placeholder="请输入标题"
                    />
                )}
              </FormItem>
              {formItems}
              <FormItem {...formItemLayoutWithOutLabel}>
                <Button type="primary" onClick={() => this.add(1)} style={{ width: '120px' }}>
                  <Icon type="plus" />添加正本
                </Button>
                <Button type="primary" onClick={() => this.add(3)} style={{ width: '120px', marginLeft: 20 }}>
                  <Icon type="plus" />添加图片
                </Button>
              </FormItem>
              {/* <FormItem
                {...formItemLayout}
                label="正文"
              >
                {getFieldDecorator('content', {
                  initialValue: this.props.experienceInfo.get('content'),
                  onChange: (e) => {
                    this.props.changeAction(
                    'ArticleReducer/articleInfo/content', e.target.value);
                  },
                  })(
                    <Input
                      placeholder="请输入正文"
                    />
                )}
              </FormItem> */}
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default Form.create()(DynamicInfo);
