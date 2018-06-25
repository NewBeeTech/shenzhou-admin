/**
 * Created by wl on 16/6/8.
 */

import { Modal } from 'antd';

const confirm = Modal.confirm;

export const showConfirm = (action, id) => {
  let text = '新建';
  if (id) {
    text = '修改';
  }
  confirm({
    title: `确认要放弃${text}操作?`,
    content: '',
    okText: '确认放弃',
    cancelText: '不放弃',
    onOk() {
      action();
    },
    onCancel() {
    },
  });
};
export const showCancel = (action, id, params) => {
  // if (!id) {
  //   let i = 0;
  //   Object.values(params).filter((value) => {
  //     if (value) {
  //       i++;
  //     }
  //     return i;
  //   });
  //   if (i) {
  //     showConfirm(action, id);
  //   } else {
      action();
  //   }
  // } else {
  //   showConfirm(action, id);
  // }
};
