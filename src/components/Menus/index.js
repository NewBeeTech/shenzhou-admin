import Menus from './Menus';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  role: state.LoginReducer.get('role'),
});

export default connect(mapStateToProps)(Menus);
