
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
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      width: 100,
    }, {
      title: '用户ID',
      dataIndex: 'id',
      key: 'id',
    }, {
      title: '用户昵称',
      dataIndex: 'nickName',
      key: 'nickName',
    }, {
      title: '用户手机号',
      dataIndex: 'phone',
      key: 'phone',
    }, {
      title: '认证技能',
      dataIndex: 'skills',
      key: 'skills',
    }, {
      title: '抽成比例',
      dataIndex: 'percentage',
      key: 'percentage',
    }];
  }
  _renderDataSource(datas) {
    const dataSource = [];
    if(datas) {
    datas.forEach((data, index) => {
      dataSource.push({
        key: index,
        id: data.get('id'),
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
