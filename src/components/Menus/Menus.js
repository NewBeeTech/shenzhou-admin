import React, { PropTypes } from 'react';
import shalloCompare from 'react-addons-shallow-compare';
import { Menu, Icon } from 'antd';
import MenusHeader from './MenusHeader';
import { push } from 'react-router-redux';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';
import styles from '../../assets/stylesheets/Menus/Menus.css';
import userInfoStorage from '../../core/UserInfoStorage';

const SubMenu = Menu.SubMenu;
const Item = Menu.Item;

class Menus extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };
  state = {
    current: '技术支持',
  };
  _handleClick(e) {
    this.setState({
      current: e.key,
    });
    if (e.key === '技术支持') {
      this.props.dispatch(push(RoutingURL.SupportList()));
    } else if (e.key === '公告列表') {
      this.props.dispatch(push(RoutingURL.DynamicList()));
    }
  }
  render() {
    const role = this.props.role || userInfoStorage.getItem('role');
    return (
      <div>
        <MenusHeader />
          <div style={{ height: '85vh' }}>
            <Menu
              theme="dark"
              onClick={(e) => this._handleClick(e)}
              mode="inline"
            >
              <Item
                key="技术支持"
              >
                技术支持
              </Item>
              <Item
                key="公告列表"
              >
                公告列表
              </Item>
            </Menu>
        </div>
      </div>
    );
  }
}

export default Menus;
