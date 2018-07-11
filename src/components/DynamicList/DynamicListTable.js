
import React, { PropTypes } from 'react';
import { Table, Popconfirm } from 'antd';
import Immutable from 'immutable';
import styles from '../../assets/stylesheets/Common.css';
import { push } from 'react-router-redux';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';
import amumu from 'amumu';


@amumu.redux.ConnectStore
class DynamicListTable extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.columns = [{
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
    },{
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    }, {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
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
        title: data.get('title'),
        createTime: data.get('createTime'),
        operation: (
          <div>
            <a
              style={{color: '#f60'}}
              onClick={(e) => {
                e.preventDefault();
                this.props.deleteBannerAction({id: data.get('id')});
              }}
            >
              删除
            </a> | <a
              style={{color: '#1890ff'}}
              onClick={(e) => {
                e.preventDefault();
                this.props.goUpdateAction(data)
              }}
            >
              修改
            </a>
          </div>
        ),
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

export default DynamicListTable;
