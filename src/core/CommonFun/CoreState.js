/**
 * Created by wangxiaodan on 16/7/12.
 */

/*
 *id: number ID
 *editing: boolean 是否可编辑
 */
export const isDisabled = (id: number, editing: boolean) => {
  if (id) {
    if (editing) {
      return false;
    }
    return true;
  }
  return false;
};
