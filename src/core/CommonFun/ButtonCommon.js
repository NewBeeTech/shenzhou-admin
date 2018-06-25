/**
 * Created by wangxiaodan on 16/7/12.
 * @flow
 */
import React from 'react';
import { Button, Popconfirm } from 'antd';
import mainStyles from '../../assets/stylesheets/Common.css';

export const revertButton = (actionName: Function) => (params : Object = {}) => {
  return (
    <Button
      className={ mainStyles.whiteButton }
      type="ghost"
      style={{ marginLeft: '10px' }}
      onClick={() => actionName(params)}
    >
      返回
    </Button>
  );
};

export const cancelButton =
 (actionName: Function) => (action: Function, id: Number, params: Object) => {
   return (
      <Button
        className={ mainStyles.whiteButton }
        type="ghost"
        style={{ marginLeft: '10px' }}
        onClick={() => { actionName(action, id, params); }}
      >
        取消
      </Button>
   );
 };

export const confirmButton = (actionName: Function) => (params: Object, text: string = '') => {
  return (
    <Button
      className={ mainStyles.blueButton }
      type="primary"
      onClick={() => { actionName(params); }}
      style={{ marginLeft: '10px' }}
    >
      { text || '确认' }
    </Button>
  );
};

export const modifyButton = (actionName: Function) => (params: Object) => {
  return (
    <Button
      className={ mainStyles.blueButton }
      type="primary"
      onClick={() => actionName(params)}
    >
      修改
    </Button>
  );
};

export const SubmitButton = (actionName: Function) => (params: Object) => {
  return (
    <Button
      className={ mainStyles.blueButton }
      type="primary"
      onClick={() => { actionName(params); }}
    >
      提交
    </Button>
  );
};
