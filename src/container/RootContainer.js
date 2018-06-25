// 组合所有组件  root component

import React, { PropTypes } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import shallowCompare from 'react-addons-shallow-compare';
// import loginState from '../core/LoginState';
import * as RoutingURL from '../core/RoutingURL/RoutingURL';


const propTypes = {
  children: PropTypes.node,
  dispatch: PropTypes.func,
  login: PropTypes.any,
  location: PropTypes.any,
};

import userInfoStorage from '../core/UserInfoStorage';

class RootContainer extends React.Component {
  componentWillMount() {
    // this.props.dispatch(push(RoutingURL.App()));
    // this.props.dispatch(push(RoutingURL.Share()));
    // if (userInfoStorage.getItem('apiToken')) {
    //   if (!this.props.location.query.newTab) {
    //     console.log('12');
    //     this.props.dispatch(push(RoutingURL.App()));
    //   }
    // } else {
    //   this.props.dispatch(push(RoutingURL.Login()));
    // }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

RootContainer.propTypes = propTypes;

const mapStateToProps = (state) => {
  return {
    dispatch: state.dispatch,
    login: state.LoginReducer.get('login'),
  };
};

export default connect(mapStateToProps)(RootContainer);
