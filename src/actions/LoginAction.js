
import { POSTJSON, GET } from '../core/WS/WSHandler';
import * as URL from '../core/WS/URL';
import { push } from 'react-router-redux';
import * as RoutingURL from '../core/RoutingURL/RoutingURL';
import AsyncFetchHandler from '../core/AsyncFetchHandler';
import NotificationCenter from '../common/NotificationCenter';

// 登录
export const GET_LOGIN = 'GET_LOGIN';
export const getLOGIN = (params: Object) => (dispatch) => {
  const result = POSTJSON(URL.LoginPath, params);
  AsyncFetchHandler(GET_LOGIN, result, dispatch);
  result.then(data => {
    if (data.code === '200') {
      dispatch(push(RoutingURL.App()));
    } else {
      NotificationCenter.NotificationCard(
        '登录失败',
        data.message,
        'error',
        3,
      );
    }
  }).catch((err) => {
    console.warn('登录 -> 网络请求失败 ', err);
  });
};

// 获取留言列表
export const GET_SUPPORT_LIST = 'GET_SUPPORT_LIST';
export const getSupportList = (params: Object) => (dispatch) => {
  const param = {
    entity: 'leave_msg',
    order: 'id',
    sort: 'desc'
  }
  const localParams = Object.assign(params, param);
  const result = GET(URL.getSupportListPath, localParams);
  AsyncFetchHandler(GET_SUPPORT_LIST, result, dispatch);
};

//
// // 退出登录
// export const GET_LOGOUT = 'GET_LOGOUT';
// export const getLOGOUT = (params: Object) => (dispatch) => {
//   const result = POSTJSON(URL.LogoutPath, params);
//   AsyncFetchHandler(GET_LOGOUT, result, dispatch);
//   result.then(data => {
//     if (data.code === '000') {
//       dispatch(push(RoutingURL.Login()));
//     }
//   }).catch((err) => {
//     console.warn('登录 -> 网络请求失败 ', err);
//   });
// };
