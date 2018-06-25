/**
 * Happy Hacking
 * Created by leiyouwho on 3/5/2016.
 */

import * as FetchState from './FetchState';
import { push } from 'react-router-redux';
// import NotificationCenter from '../common/NotificationCenter';
import * as RoutingURL from '../core/RoutingURL/RoutingURL';


const AsyncFetchHandler = (
  actionName: string,
  fetchResultPromise: Promise,
  dispatch: Function,
  sideEffect = (data) => data,
) => {
  dispatch({
    type: FetchState.REQUEST(actionName),
  });
  fetchResultPromise
    .then(data => {
      if (data.code === '000') {
        dispatch({
          type: FetchState.SUCCESS(actionName),
          data: sideEffect(data.data),
        });
      } else if (data.code === 5000) {
        dispatch(push(RoutingURL.Login()));
      } else if (data.code === 5001) {
        dispatch(push(RoutingURL.Login()))
      } else if (data.code === 5002) {
        alert('登录过期，请重新登录');
        dispatch(push(RoutingURL.Login()))
      } else if (data.code === 5003) {
        dispatch(push(RoutingURL.Login()))
      } else {
        // NotificationCenter.NotificationCard(
        //   `${actionName}请求失败`,
        //   `错误信息: ${JSON.stringify(data.message)}`,
        //   'error',
        //   2,
        // );
        dispatch({
          type: FetchState.FAILURE(actionName),
          errMsg: data.message,
        });
      }
    })
    .catch(err => {
      console.warn(err);
      dispatch({
        type: FetchState.FAILURE(actionName),
        errMsg: err.message,
      });
    });
};

export default AsyncFetchHandler;
