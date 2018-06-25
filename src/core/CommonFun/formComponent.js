/**
 * Created by wl on 16/7/8.
 * @flow
 */
import React from 'react';
import { Select } from 'antd';
import * as Immutable from 'immutable';

const Option = Select.Option;

/**
 * 根据value和option获取下拉列表 getSelectListByValueAndOption
 * @param  data 需要遍历的数据
 *         value value值 string
 *         option 需要显示的option内容 [id,name]
 * @return {[Array]}      [返回一个数组]
 */
export const getSelectListByValueAndOption =
 (data: Immutable.List<Object>,
   values : string = 'id',
   option : Array < string > = ['name']
 ): Array<Object> => {
   const dataSource = [];
  // 遍历获取下拉列表
   if (data) {
     if (option.length === 1) {
       data.forEach((value, index) => {
         dataSource.push(
           <Option key={index} value={String(value.get(`${values}`))}>
             {value.get(`${option[0]}`)}
           </Option>
         );
       });
     } else if (option.length === 2) {
       data.forEach((value, index) => {
         dataSource.push(
           <Option key={index} value={String(value.get(`${values}`))}>
             {value.get(`${option[0]}`)}({value.get(`${option[1]}`)})
           </Option>
         );
       });
     }
   }
   return dataSource;
 };


export const getTemplateSelectList = (data: Immutable.List<Object>): Array<Object> => {
  const dataSource = [];
  if (data) {
    data.forEach((value, index) => {
      dataSource.push(
        <Option
          key={index}
          value={`${value.get('id')},${value.get('type')},${value.get('departmentId')},
          ${value.get('departmentName')}`}
        >
          {value.get('name')}({value.get('id')})
        </Option>
      );
    });
  }
  return dataSource;
};
