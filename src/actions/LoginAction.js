
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
    console.log(data)
    if (data.code == '200') {
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

// 获取列表
export const GET_DYNAMIC_LIST = 'GET_DYNAMIC_LIST';
export const getDynamicList = (params: Object) => (dispatch) => {
  const param = {
    // entity: 'leave_msg',
    // order: 'id',
    // sort: 'desc'
  }
  const localParams = Object.assign(params, param);
  const result = GET(URL.dynamicListPath, localParams);
  AsyncFetchHandler(GET_DYNAMIC_LIST, result, dispatch);
};

// 获取详情
export const GET_DYNAMIC_INFO = 'GET_DYNAMIC_INFO';
export const getDynamicInfo = (params: Object) => (dispatch) => {
  dispatch({
    type: GET_DYNAMIC_INFO,
    data: params,
  });
};

// 保存
export const ADD_DYNAMIC = 'ADD_DYNAMIC';
export const addDynamic = (params: Object) => (dispatch) => {
  const result = POSTJSON(URL.addDynamicPath, params);
  AsyncFetchHandler(
    ADD_DYNAMIC,
    result,
    dispatch
  );
  result.then(data => {
    if (data.code === '200') {
      NotificationCenter.NotificationCard(
        '保存成功',
        '',
        'success',
        2,
      );
      dispatch(push(RoutingURL.DynamicList()));
    } else {
      NotificationCenter.NotificationCard(
        '保存失败',
        '请填写正确的题目信息',
        'error',
        3,
      );
    }
  });
};

// 修改
export const UPDATE_DYNAMIC = 'UPDATE_DYNAMIC';
export const updateDynamic = (params: Object) => (dispatch) => {
  const result = POSTJSON(URL.updateDynamicPath, params);
  AsyncFetchHandler(
    UPDATE_DYNAMIC,
    result,
    dispatch
  );
  result.then(data => {
    if (data.code === '200') {
      NotificationCenter.NotificationCard(
        '保存成功',
        '',
        'success',
        2,
      );
      dispatch(push(RoutingURL.DynamicList()));
    } else {
      NotificationCenter.NotificationCard(
        '保存失败',
        '请填写正确的题目信息',
        'error',
        3,
      );
    }
  });
};
// 删除
export const DEL_DYNAMIC = 'DEL_DYNAMIC';
export const delDynamic = (params: Object) => (dispatch) => {
  const result = GET(URL.delDynamicPath, { id: params.deleteId });
  AsyncFetchHandler(
    DEL_DYNAMIC,
    result,
    dispatch
  );
  result.then(data => {
    if (data.code === '200') {
      NotificationCenter.NotificationCard(
        '删除成功',
        '',
        'success',
        2,
      );
      dispatch(getDynamicList(params));
    } else {
      NotificationCenter.NotificationCard(
        '删除失败',
        data.message,
        'error',
        3,
      );
    }
  });
};



export const GET_DYNAMICCONTENT = 'GET_DYNAMICCONTENT';
export const getDynamicConetnt = (params) => (dispatch) => {
  dispatch({
    type: 'GET_DYNAMICCONTENT',
  });
  const result = fetch(params.url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
  }).then(data => {
      if(data.ok) {
        data.json().then(result => {
          dispatch({
            type: 'GET_DYNAMICCONTENT_SUCCESS',
            data: result,
          });
        })
      } else {
        dispatch({
          type: 'GET_DYNAMICCONTENT_FAILURE',
        });
      }
    }, (err) => console.log(err));
};
