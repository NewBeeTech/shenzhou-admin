
import { connect } from 'react-redux';
import DynamicInfo from './DynamicInfo';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  errMsg: state.LoginReducer.get('errMsg'),
  isFetching: state.LoginReducer.get('isFetching'),
  dynamicInfo: state.LoginReducer.get('dynamicInfo'),
});

export default connect(mapStateToProps)(DynamicInfo);
