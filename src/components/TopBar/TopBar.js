
import React, { PropTypes } from 'react';
import { Icon, Menu, Dropdown } from 'antd';
import styles from '../../assets/stylesheets/TopBar/TopBar.css';
import styleJS from '../../assets/stylesheets/TopBar/TopBar';
import { push } from 'react-router-redux';
import userInfoStorage from '../../core/UserInfoStorage';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';
import * as LoginAction from '../../actions/LoginAction';

class TopBar extends React.PureComponent {
  _logoutAction = () => {
    this.props.dispatch(LoginAction.getLOGOUT());
  }
  render() {
    const _handleClick = ({ key }) => {
      if (key === '1') {
        this._logoutAction();
      }
    };
    const menu = (
      <Menu onClick={({ key }) => _handleClick({ key })}>
        <Menu.Item key="1">退出登录</Menu.Item>
      </Menu>
    );
    return (
      <div className={styles.TopBarContainer}>
        <Dropdown overlay={menu}>
          <div className={styles.user}>
            <Icon type="user" className={styles.icon} />
            <div className={styles.userName}>{this.props.userName ? this.props.userName : userInfoStorage.getItem('userName')}</div>
            <Icon type="down" style={styleJS.icon} />
          </div>
        </Dropdown>
      </div>
    );
  }
}

TopBar.defaultProps = {};

export default TopBar;
