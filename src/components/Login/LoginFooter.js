/**
 * Created by wl on 16/4/13.
 */
import React, { PropTypes } from 'react';
import styles from './styles.css';

const propTypes = {
  slogan: PropTypes.string,
};

const LoginFooter = (props) => {
  return (
    <div className={ styles.LoginFooter }>
    </div>
  );
};
LoginFooter.propTypes = propTypes;
export default LoginFooter;
