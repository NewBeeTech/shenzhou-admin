
import { connect } from 'react-redux';
import Login from './Login';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
});

export default connect(mapStateToProps)(Login);