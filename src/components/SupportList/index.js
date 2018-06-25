
import { connect } from 'react-redux';
import SupportList from './SupportList';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  errMsg: state.LoginReducer.get('errMsg'),
  isFetching: state.LoginReducer.get('isFetching'),
  supportList: state.LoginReducer.get('supportList'),
  searchData: state.LoginReducer.get('searchData'),
});

export default connect(mapStateToProps)(SupportList);
