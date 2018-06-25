// @flow
import React from 'react';
import type { Dispatch } from '../actions/types';
import { Select } from 'antd';
import * as BasicAction from '../actions/BasicAction';
import * as Immutable from 'immutable';
const Option = Select.Option;

// 随访方案
export const searchPlanListSource = (dispatch: Dispatch) => (params: {planName: string}) => {
  dispatch(BasicAction.getPatientMgmts(params));
};
export const renderPlanListSource = (data: Immutable.List<Object>): Array<Object> => {
  const dataSource = [];
  data.forEach((value, index) => {
    dataSource.push(
      <Option key={index} value={String(value.get('id'))}>{value.get('name')}</Option>
    );
  });
  return dataSource;
};
