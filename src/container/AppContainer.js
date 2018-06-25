import React, { PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import userInfoStorage from '../core/UserInfoStorage';
import TopBar from '../components/TopBar';
import Menus from '../components/Menus';
// import Panel from '../components/Panel';
import { push } from 'react-router-redux';
import * as RoutingURL from '../core/RoutingURL/RoutingURL';
import { dispatch } from '../store';

import styles from '../assets/stylesheets/RootContainer.css';

class AppContainer extends React.PureComponent {
  componentWillMount() {
  }
  render() {
    return (
      <div className={styles.RootContainer}>
        <div className={styles.menuContainer}>
          <Menus />
        </div>
        <div className={styles.rightContainer}>
          <TopBar className={styles.rightTopBar} />
          <div className={styles.rightContent}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

AppContainer.propTypes = {
  children: PropTypes.node,
};

AppContainer.defaultProps = {};


export default AppContainer;
