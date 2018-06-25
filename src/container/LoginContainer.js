/**
 * Created by leiyouwho on 16/4/2016.
 */

// 组合所有组件  root component

import React, { PropTypes } from 'react';
import Login from '../components/Login';
import { connect } from 'react-redux';
import shallowCompare from 'react-addons-shallow-compare';


const propTypes = {
  children: PropTypes.node,
  dispatch: PropTypes.func,
};

class RootContainer extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

RootContainer.propTypes = propTypes;

const mapStateToProps = (state) => {
  return {
    dispatch: state.dispatch,
  };
};

export default connect(mapStateToProps)(RootContainer);
