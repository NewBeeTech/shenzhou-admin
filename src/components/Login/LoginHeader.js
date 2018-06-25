/**
 * Created by wl on 16/4/12.
 */
import React, { PropTypes } from 'react';
import styles from './styles.css';
// import LOGO from '../../assets/images/logo.png';
const propTypes = {
  icon: PropTypes.node,
};

const LoginHeader = (props) => {
  return (
    <div className={ styles.loginHeader }>
      {/*<img src={LOGO} width="80" height="80" style={{marginLeft: '10vw'}} />*/}
    </div>
  );
};
LoginHeader.propTypes = propTypes;
export default LoginHeader;
