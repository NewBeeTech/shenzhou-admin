import { routeReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

// 引入各reducers
import LoginReducer from './LoginReducer';

// 状态入口
const appReducers = combineReducers({
  routing: routeReducer,
  LoginReducer,
});

export default appReducers;
