
import { connect } from 'react-redux';
import DynamicList from './DynamicList';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  errMsg: state.LoginReducer.get('errMsg'),
  isFetching: state.LoginReducer.get('isFetching'),
  dynamicList: state.LoginReducer.get('dynamicList'),
  searchData: state.LoginReducer.get('dynamicSearchData'),
});

export default connect(mapStateToProps)(DynamicList);
