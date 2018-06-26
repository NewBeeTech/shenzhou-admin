
import React, { PropTypes } from 'react';
import { Table, Popconfirm } from 'antd';
import Immutable from 'immutable';
import styles from '../../assets/stylesheets/Common.css';
import { push } from 'react-router-redux';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';
import amumu from 'amumu';


@amumu.redux.ConnectStore
class UserListTable extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.columns = [{
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    }, {
      title: '用户昵称',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    }, {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
    }, {
      title: '描述',
      dataIndex: 'desc',
      key: 'desc',
    }, {
      title: '提交时间',
      dataIndex: 'createTime',
      key: 'createTime',
    }];
  }
  _renderDataSource(datas) {
    const dataSource = [];
    if(datas) {
    datas.forEach((data, index) => {
      dataSource.push({
        key: index,
        id: data.get('id'),
        name: data.get('name'),
        email: data.get('email'),
        title: data.get('title'),
        desc: data.get('desc'),
        createTime: data.get('createTime'),
      });
    });
    }
    return dataSource;
  }
  render() {
    return (
      <div>
        <Table
          size="middle"
          columns={this.columns}
          dataSource={this._renderDataSource(this.props.dataSource)}
          pagination={false}
          bordered
          rowClassName={(record, index) => {
            if (index % 2 === 0) {
              return styles.rowColor;
            }
          }}
        />
      </div>
    );
  }
}

export default UserListTable;
