
import React, { PropTypes } from 'react';
import LoginHeader from './LoginHeader';
import LoginForm from './LoginForm';
import LoginFooter from './LoginFooter';
import styles from './styles.css';
import * as LoginAction from '../../actions/LoginAction';

const loginAction = (dispatch: Function) => (params: Object) => {
  dispatch(LoginAction.getLOGIN(params));
};

const Login = (props) => {
  return (
    <div className={ styles.login }>
      {/*<div className={ styles.loginHeader } >
         <LoginHeader />
      </div> */}
      <div className={ styles.loginForm } >
        <LoginForm loginAction={loginAction(props.dispatch)} />
      </div>

    </div>
  );
};
Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default Login;
